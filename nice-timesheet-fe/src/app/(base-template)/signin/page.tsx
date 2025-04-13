"use client";

import {keycloakLogin} from "@/app/(base-template)/actions/auth";

export default async function SignIn(){

    await keycloakLogin();

    return <></>
}