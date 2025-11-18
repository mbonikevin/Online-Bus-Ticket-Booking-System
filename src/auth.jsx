import { getUser } from "./store.jsx"

export function useAuth() {
  const u = getUser()
  return {
    user: u,
    role: u ? u.role : null,
    loggedIn: !!u
  }
}
