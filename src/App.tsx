
import './App.css'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { ThemeToggler } from './components/theme-toggler'
// import LoginForm from './components/forms/LoginForm'
// import RegisterForm from './components/forms/RegisterForm'
// import { useState } from 'react'
// import { Button } from './components/ui/button'
// import { logoutUser } from './api/userApiService'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import User from './pages/user'
import MainContent from './pages/MainContent'
import ProtectedRoute from './components/ProtectedRoute'

// interface AuthChange {
//   handleAuthChange: (bool: boolean) => void
// }

function App() {


  return (
    <Router>
      <div>

        <main>
          <Routes>
            <Route path="" element={<MainContent />} />
            <Route path="/user" element={
              // <ProtectedRoute>
              <User />
              // </ProtectedRoute> 

            } />
          </Routes>
        </main>
      </div>
    </Router>





  )
}

export default App


// const MainContentsz = () => {
//   // const [count, setCount] = useState(0)
//   const [isAuth, setIsAuth] = useState(false)
//   const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
//   const [defaultTab, setDefaultTab] = useState("login")

//   const handleAuthChange = (bool: boolean) => {
//     setIsAuth(bool)
//   }

//   const handleRegisterSuccess = (bool: boolean) => {
//     setIsRegisterSuccess(bool)
//     setDefaultTab("login")
//   }


//   async function onLogout() {
//     try {
//       const res = await logoutUser();
//       console.log("FE Logout repsonse: ", res)
//     } catch (error) {
//       console.log("FE Failed to Logout: ", error)
//       return
//     }
//   }
//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <div className='w-[600px]'>
//         <div className='flex flex-col justify-center items-center'>
//           <div className='py-2'>
//             <ThemeToggler />
//           </div>

//           <Tabs
//             value={defaultTab}
//             onValueChange={(value: string) => setDefaultTab(value)}
//             // defaultValue='login' 
//             className=''>
//             <div className=' '>
//               <TabsList className='grid w-full grid-cols-2'>
//                 <TabsTrigger value='login'>Login</TabsTrigger>
//                 <TabsTrigger value='register'>Register</TabsTrigger>
//               </TabsList>
//             </div>

//             {/* CONTENT main */}
//             <TabsContent value='login' className=''>
//               <Card className='w-[456px]'>
//                 <CardHeader>
//                   <CardTitle>Login</CardTitle>
//                   <CardDescription>Log back to your account</CardDescription>
//                 </CardHeader>
//                 <CardContent className='space-y-2'>
//                   <LoginForm onAuthChange={handleAuthChange} />
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             {/* CONTENT secondary */}
//             <TabsContent value='register'>
//               <Card className='w-[456px]'>
//                 <CardHeader>
//                   <CardTitle>Register Account</CardTitle>
//                   <CardDescription>Join Our Community</CardDescription>
//                 </CardHeader>
//                 <CardContent className='space-y-2'>
//                   <RegisterForm onSuccess={handleRegisterSuccess} />
//                 </CardContent>
//               </Card>
//               {/* <div
//                 className='container mx-auto border border-black/85 h-[400px] rounded-xl'
//               >
//                 <h1>secondary</h1>
//               </div> */}
//             </TabsContent>
//           </Tabs>
//         </div>
//         <div className='mt-2 text-center'>
//           <h2>hi</h2>

//           {
//             isAuth && (
//               <h1>hihi</h1>
//             )
//           }

//         </div>
//         <div className='mt-4 items-center'>
//           <Button type='submit' onClick={() => onLogout()}>Logout Protected</Button>
//         </div>
//       </div>

//     </div>
//   )
// }


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Button } from './components/ui/button'
// import { ThemeToggler } from './components/theme-toggler'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <ThemeToggler />
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
