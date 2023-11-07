"use client"

import {Login} from "ui";
import { signIn } from "next-auth/react";

const LoginPage = () => {

    const loginButton = (username, password) => {
        signIn("credentials", {
            username: username,
            password: password,
            callbackUrl: "/",
        });
    }

    const loginGoogle = () => {
        signIn("google");
    }

    const loginApple = () => {
        signIn("apple");
    }

    return (
        <>
            <div className="bg-loginPageBg h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="text-4xl text-white mb-10 font-bold flex ml-16">
                        <img className="w-10 h-10 " src="https://i.ibb.co/9GxLrNg/signup-Image-removebg-preview.png" alt="signup-Image-removebg-preview"/>
                        Chess.co.in
                    </div>
                    <div>
                        <Login click ={loginButton} google = {loginGoogle} apple = {loginApple} signup = "./signup"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;