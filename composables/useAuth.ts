import { destroyCookie, parseCookies, setCookie } from 'nookies'

const useAuth = () => {
  const cookies = parseCookies()

  const removeAuth = (cookieName: string) => {
    destroyCookie(null, cookieName, {
      path: '/'
    })
  }

  const setAuth = (cookie: string) => {
    setCookie(null, 'token', cookie, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })
  }

  return {
    token: cookies?.token || null,
    hasAuth: !!cookies?.token,
    removeAuth,
    setAuth
  }
}

export { useAuth }