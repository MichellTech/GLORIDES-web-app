import axios from 'axios'
import { toast } from 'react-toastify'

const mainAxiosAction = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

const logUserOut = () => {
  localStorage.clear('User_Token')
  window.location.replace('/auth/login')
  toast.error('Session expired, kindly login!')
}

mainAxiosAction.interceptors.request.use(
  (config) => {
    config.headers['x-glorious-access'] = JSON.parse(
      localStorage.getItem('User_Token')
    )
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

mainAxiosAction.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    if (
      error?.response?.data?.message === 'Invalid Token' ||
      error?.response?.data?.message ===
        'Authentication required, access denied!'
    ) {
      logUserOut()
    } else if (error?.message === 'Network Error') {
      toast.error('Network error, kindly check your network')
      return Promise.reject(error)
    } else {
      return Promise.reject(error)
    }
  }
)

export default mainAxiosAction
