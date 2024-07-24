import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createUser } from "@/api/userApiService"
import { useState } from "react"
import { useToast } from "../ui/use-toast"

const formSchema = z
  .object({
    name: z.string().min(3).max(50),
    username: z.string().min(2).max(50),
    password: z.string().min(3).max(25),
    password_confirm: z.string().min(3).max(25),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Password don't match",
    path: ["password_confirm"],
  });

interface ChildOnSuccess {
  onSuccess: (bool: boolean) => void
}

function RegisterForm({ onSuccess }: ChildOnSuccess) {
  const { toast } = useToast()
  const [error, setError] = useState('')

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      password_confirm: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const newUser = {
      name: values.name,
      username: values.username,
      password: values.password,
    }
    console.log(newUser)

    try {


      const createdUser = await createUser(newUser);
      console.log("user created successfully: ", createdUser)

      // Reset form
      onSuccess(true)
      form.reset()

      toast({
        title: "Register Success.",
        description: "Please Login to continue",
        variant: "default",
      })
    } catch (error) {
      setError('failed to create user')
    }


  }
  return (
    <Form {...form}>
      {error && <p>{error}</p>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="display name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* USERNAME */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PASSWORD */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CONFIRM PASSWORD */}
        <FormField
          control={form.control}
          name="password_confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="retype your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default RegisterForm