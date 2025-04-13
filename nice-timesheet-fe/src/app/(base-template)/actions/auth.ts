"use server"

import { signIn } from "@/auth"

export const keycloakLogin = async () => {
    await signIn('keycloak', { redirectTo: '/timesheet' })
}
