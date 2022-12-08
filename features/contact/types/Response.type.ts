import { UserProfile } from './UserProfile.type'

export type LoginUserResponseType = {
  expires_in: number
  token: string
  token_type: string
  user: UserProfile
}

export type LogoutUserResponseType = {
  message: string
}