"use client"

import {Signup} from "ui";
import {useRouter} from "next/navigation";

const MainSignupPage = () =>{
    const router = useRouter();
    const signupButton = async (username, email, password, level) => {
        if (!username || !email || !password) {
            alert("Fill all the required fields");
            return;
        }

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password, level }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("User created successfully");
                router.push("/login");
                console.log(data);
            } else {
                alert("User registration failed");
                console.error("User registration failed");
            }
        } catch (error) {
            alert("An error occurred while registering the user");
            console.error("An error occurred", error);
        }
    };

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