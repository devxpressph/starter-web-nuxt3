export type UserProfile = {
  created_at: string
  email: string
  email_verified_at: string
  updated_at: string
  id: number
  is_active: boolean
}

export type StoreUserProfile = {
  profile: {
    value: UserProfile
  }
}