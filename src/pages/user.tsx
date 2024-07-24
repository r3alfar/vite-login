import { getCurrentUser, logoutUser, verifyToken } from "@/api/userApiService";
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

interface udata {
  id: string,
  name: string,
  username: string
}

function User() {
  const navigate = useNavigate()
  async function onLogout() {
    try {
      const res = await logoutUser();
      navigate('/')
      console.log("FE Logout repsonse: ", res)
    } catch (error) {
      console.log("FE Failed to Logout: ", error)
      return
    }
  }

  const [userData, setUserData] = useState<udata>({ id: '', name: '', username: '' })
  const hasMounted = useRef(false)
  useEffect(() => {
    if (hasMounted.current) {
      if (!userData.id) {
        // const getUserData = async () => {
        //   const res = await getCurrentUser();
        //   setUserData(res.data)
        //   console.log(res.data)
        // }
        // getUserData()
        const verifyUserToken = async () => {
          try {
            const res = await verifyToken();
            setUserData(res.data)
            console.log(res.data)
          } catch (error) {
            navigate("/")
          }

        }
        verifyUserToken()
      } else {
        console.log("user data is available")
      }
    } else {
      console.log("refresh handled")
      hasMounted.current = true
    }

  })

  return (
    <div className='flex justify-center items-center h-screen'>
      <div
        className="flex flex-col text-center"
      >
        <h1
          className="font-semibold text-3xl"
        >Welcome,</h1>
        <h1
          className="font-extrabold text-9xl"
        >{userData.name}</h1>
        <Button
          className="mt-6"
          type="submit"
          onClick={() => onLogout()}
        >Logout</Button>
      </div>

    </div>
  )
}

export default User