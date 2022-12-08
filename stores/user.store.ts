// import { acceptHMRUpdate, defineStore } from 'pinia'
// import { UserProfile } from '@/features/Login/types/UserProfile.type'

import { UserProfile } from "~~/features/login/types/UserProfile.type"

type ProfileState = {
  profile: UserProfile | null
}

// export const useUserStore = defineStore({
//   id: 'user-store',
//   state: (): ProfileState => {
//     return {
//       profile: null
//     }
//   },
//   actions: {
//     async setProfile(profile: UserProfile) {
      
//     }
//   },
//   getters: {},
//   persist: true
// })

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
// }


export const useUserStore = definePiniaStore(
  'profile-store',
  {
    state: () => (
      {
        profile: {}
      }
    ),
    getters: {},
    actions: {
      async setProfile(profile: UserProfile) {
        this.profile = profile
      },
    },
  }
)