import userApi from "./userApi";
import axios, { AxiosResponse } from "axios";

interface UserRegisterModel {
  name: string
  username: string
  password: string
}

interface UserLoginModel {
  username: string
  password: string
}

export const createUser = async (userData: UserRegisterModel): Promise<AxiosResponse> => {
  try {
    console.log("apiservice value: ", userData)


    const response = await axios.post(userApi.createUser(), userData)

    console.log("actual rrrespon: ", response)
    return response
  } catch (error) {
    console.error("Error creating user: ", error)
    throw error
  }
}

export const loginUser = async (loginData: UserLoginModel): Promise<AxiosResponse> => {
  try {
    console.log("apiservice value: ", loginData)

    const res = await axios.post(userApi.signIn(), loginData, {
      withCredentials: true
    })
    console.log("actual response: ", res)
    return res
  } catch (error) {
    console.error("Error login: ", error)
    throw error
  }
}

export const logoutUser = async () => {
  try {
    const res = await axios.post(userApi.logout(), {}, {
      withCredentials: true
    })
    console.log("Logout Response: ", res)
  } catch (error) {
    console.log("Logout error:: ", error)
    throw error
  }
}

export const verifyToken = async (): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(userApi.verifyToken(), {
      withCredentials: true
    })
    return response
  } catch (error) {
    console.error("Not Authenticated", error)
    throw error
  }
}

export const getCurrentUser = async (): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(userApi.getCurrentUser(), {
      withCredentials: true
    })
    return response
  } catch (error) {
    throw error
  }
}

// const response = await fetch(userApi.createUser(), {
//   method: "POST",
//   body: JSON.stringify(userData)
// });

// if (!response.ok) {
//   throw new Error('failed to create use')
// }

// const data = await response.json();
// return data;