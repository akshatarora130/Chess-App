import {useState} from "react";

interface propsInterface  {
    click: (username: string, password: string) => void,
    google: () => void,
    apple: () => void,
    signup: string,
}

export const Login = (props: propsInterface) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            <div className="ui-bg-loginBoxBg ui-w-96 ui-text-white ui-flex ui-flex-col ui-justify-center ui-items-center ui-rounded-2xl ">
                <input
                    type="text"
                    placeholder="  Username or email"
                    className="ui-w-80 ui-h-10 ui-rounded-md ui-bg-loginInputBox ui-text-white focus:border-white ui-mt-10 ui-outline-white"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="  Password"
                    className="ui-w-80 ui-h-10 ui-rounded-md ui-bg-loginInputBox ui-text-white focus:border-white ui-mt-5 ui-outline-white"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <div className="ui-flex ui-gap-20 ui-mt-5 ui-text-sm">
                    <div>
                        <input type="checkbox"/>
                        <label>   Remember Me</label>
                    </div>
                    <a href="" className="ui-text-blue-500">Forget Password?</a>
                </div>
                <button
                    className="ui-mt-12 ui-w-80 ui-h-14 ui-text-2xl ui-font-bold ui-bg-loginButton ui-rounded-lg"
                    onClick={() => {
                        props.click(username, password);
                    }}
                >
                    Log In
                </button>
                <br/>
                <br/>
                <div className="ui-flex ui-gap-8">
                    <div className= "ui-border-t-2 ui-w-28 ui-mt-2"></div>
                    <div className="ui-text-white">OR</div>
                    <div className= "ui-border-t-2 ui-w-28 ui-mt-2"></div>
                </div>
                <br/>
                <br/>
                <button
                    className="ui-w-80 ui-bg-black ui-h-12 ui-rounded-md"
                    onClick={() => {
                        props.apple()
                    }}
                >
                    <div className="flex gap-6">
                        <img src="https://i.ibb.co/f22Qcst/apple.png" alt="apple" className="w-12 ml-6"/>
                        <div className="mt-2">Log in with Apple</div>
                    </div>
                </button>
                <button
                    className="ui-w-80 ui-bg-white ui-h-12 ui-rounded-md ui-text-black ui-mt-4"
                    onClick={() => {
                        props.google()
                    }}
                >
                    <div className="flex gap-6">
                        <img src="https://i.ibb.co/yYpmGLB/google.png" alt="google" className="w-10 ml-8"/>
                        <div className="mt-2">Log in with Google</div>
                    </div>
                </button>
                <br/>
                <div className="ui-bg-loginBottom ui-w-96 ui-h-20 ui-rounded-2xl ui-flex ui-justify-center ui-items-center ui-gap-4">
                    <div>New?</div>
                    <a href={props.signup} className="ui-text-blue-400">Sign up - and start playing chess</a>
                </div>
            </div>
        </>
    )
}