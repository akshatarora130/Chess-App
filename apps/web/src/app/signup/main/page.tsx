"use client"

import {Signup} from "ui";

const MainSignupPage = () =>{
    const signupButton = (username, email, password, level ) => {
        alert(username);
        alert(email);
        alert(password);
        alert(level);
    }

    return(
        <>
            <div className="bg-signupPageBg h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="text-4xl text-white mb-10 font-bold flex ml-28">
                        <img className="w-10 h-10" src="https://i.ibb.co/9GxLrNg/signup-Image-removebg-preview.png" alt="signup-Image-removebg-preview" />
                        Chess.co.in
                    </div>
                    <div>
                        <Signup click = {signupButton} login = "./../login"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSignupPage;