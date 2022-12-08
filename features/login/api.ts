import { useAuth } from '@/composables/useAuth'
import { useUserStore } from '@/stores/User.store'
import api from '@/common/http/api'
/**
 * Types
 */
import { PayloadType } from './types/Payload.type'
import { LoginUserResponseType } from './types/Response.type'

const LoginUser = async (payload: PayloadType) => {
  const { setProfile } = useUserStore()
  const { setAuth } = useAuth()

  const response = await api.post<LoginUserResponseType>(`api/login`, payload)

  if (response?.data) {
    setProfile(response?.data?.user)
    setAuth(`Bearer ${response?.data?.token}`)
  }

  return response?.data
}

export { LoginUser }