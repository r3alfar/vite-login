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
import { loginUser } from "@/api/userApiService"
import { useToast } from "../ui/use-toast"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(3).max(25)
})

interface ChildAuthChange {
  onAuthChange: (bool: boolean) => void
}

function LoginForm({ onAuthChange }: ChildAuthChange) {
  const { toast } = useToast()
  const navigate = useNavigate()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    try {
      const tokens = await loginUser(values);
      onAuthChange(true);
      form.reset();
      console.log("user loggedin: ", tokens)
      toast({
        title: "Login Success",
        description: "redirecting...",

      })

      navigate('/user')

    } catch (error) {
      console.log("FAILED TO LOGIN: error", error)
      return
    }

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default LoginForm