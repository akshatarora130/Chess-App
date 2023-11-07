"use client"

import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

const SignupPage = () => {
    const router = useRouter();

    return (
        <>
            <div className="bg-signupPageBg h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="text-4xl text-white mb-10 font-bold flex ml-24">
                        <img className="w-10 h-10" src="https://i.ibb.co/9GxLrNg/signup-Image-removebg-preview.png" alt="signup-Image-removebg-preview"/>
                        Chess.co.in
                    </div>
                    <div className="text-4xl text-white bold">
                        <center>Create your chess.co.in</center>
                    </div>
                    <div className="text-4xl text-white mb-6">
                        <center>account</center>
                    </div>
                    <div>
                        <img className="w-96 ml-10" src="https://i.ibb.co/RT5mRBg/signup-Imgae.png" alt="signup-Imgae" />
                    </div>
                    <center>
                    <button
                        className="mt-12 w-full h-14 text-2xl font-bold bg-signupButton rounded-lg text-white"
                        onClick={() => {
                            router.push("./signup/main")
                        }}
                    >
                        Sign up
                    </button>
                    </center>
                    <br/>
                    <br/>
                    <div className="flex gap-8">
                        <div className= "border-t-2 w-48 mt-2"></div>
                        <div className="text-white">OR</div>
                        <div className= "border-t-2 w-48 mt-2"></div>
                    </div>
                    <br/>
                    <br/>
                    <center>
                        <button
                            className="w-full bg-signupApple h-14 text-white rounded-md mt-4"
                            onClick={() => {
                                signIn("apple")
                            }}
                        >
                            <div className="flex gap-24">
                                <img src="https://i.ibb.co/f22Qcst/apple.png" alt="apple" className="w-12 ml-6"/>
                                <div className="mt-2">Log in with Apple</div>
                            </div>
                        </button>
                    </center>
                    <center>
                    <button
                        className="w-full bg-signupGoogle h-14 text-white rounded-md mt-4"
                        onClick={() => {
                            signIn("google")
                        }}
                    >
                        <div className="flex gap-24">
                            <img src="https://i.ibb.co/yYpmGLB/google.png" alt="google" className="w-10 ml-8"/>
                            <div className="mt-2">Log in with Google</div>
                        </div>
                    </button>
                    </center>
                </div>
            </div>
        </>
    )
}

export default SignupPage;