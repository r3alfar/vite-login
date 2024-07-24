import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ThemeToggler } from '@/components/theme-toggler'
import LoginForm from '@/components/forms/LoginForm'
import RegisterForm from '@/components/forms/RegisterForm'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { logoutUser } from '@/api/userApiService'


function MainContent() {
  // const [count, setCount] = useState(0)
  const [isAuth, setIsAuth] = useState(false)
  // const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
  const [defaultTab, setDefaultTab] = useState("login")

  const handleAuthChange = (bool: boolean) => {
    setIsAuth(bool)
  }

  const handleRegisterSuccess = (bool: boolean) => {
    setDefaultTab("login")
  }


  async function onLogout() {
    try {
      const res = await logoutUser();
      console.log("FE Logout repsonse: ", res)
    } catch (error) {
      console.log("FE Failed to Logout: ", error)
      return
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[600px]'>
        <div className='flex flex-col justify-center items-center'>
          <div className='py-2'>
            <ThemeToggler />
          </div>

          <Tabs
            value={defaultTab}
            onValueChange={(value: string) => setDefaultTab(value)}
            // defaultValue='login' 
            className=''>
            <div className=' '>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='login'>Login</TabsTrigger>
                <TabsTrigger value='register'>Register</TabsTrigger>
              </TabsList>
            </div>

            {/* CONTENT main */}
            <TabsContent value='login' className=''>
              <Card className='w-[456px]'>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>Log back to your account</CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <LoginForm onAuthChange={handleAuthChange} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* CONTENT secondary */}
            <TabsContent value='register'>
              <Card className='w-[456px]'>
                <CardHeader>
                  <CardTitle>Register Account</CardTitle>
                  <CardDescription>Join Our Community</CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <RegisterForm onSuccess={handleRegisterSuccess} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

    </div>
  )
}

export default MainContent