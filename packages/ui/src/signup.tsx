import {useState} from "react";

interface propsInterface  {
    click: (username: string, email: string, password: string, level: number) => void,
    login: string
}

export const Signup = (props: propsInterface) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [level, setLevel] = useState(400);

    return(
        <>
            <div className="ui-bg-loginBoxBg ui-text-white ui-flex ui-flex-col ui-justify-center ui-items-center ui-rounded-2xl ">
                <input
                    type="text"
                    placeholder="  Username"
                    className="ui-w-96 ui-h-10 ui-rounded-md ui-bg-loginInputBox ui-text-white focus:border-white ui-mt-10 ui-outline-white"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="  Email"
                    className="ui-w-96 ui-h-10 ui-rounded-md ui-bg-loginInputBox ui-text-white focus:border-white ui-mt-5 ui-outline-white"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    type="password"
                    placeholder="  Password"
                    className="ui-w-96 ui-h-10 ui-rounded-md ui-bg-loginInputBox ui-text-white focus:border-white ui-mt-5 ui-outline-white"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <div className="ui-mt-8">
                    What is your chess skill level?
                </div>
                <div className="ui-flex ui-mt-8">
                    <button
                        onClick={() => {setLevel(400)}}
                        className={`ui-w-24 ui-h-24 ui-bg-signupLevelButton ui-rounded-md ui-ml-4 ui-mr-4 ui-text-sm ${level === 400 ? 'ui-border-signupLevel ui-border-2' : ''}`}
                    >
                        <center><img className="ui-w-12 ui-h-12" src = "https://i.ibb.co/QNHR3zD/white-Pawn.png"/></center>
                        New to chess
                    </button>
                    <button
                        onClick={() => {setLevel(600)}}
                        className={`ui-w-24 ui-h-24 ui-bg-signupLevelButton ui-rounded-md ui-ml-4 ui-mr-4 ui-text-sm ${level === 600 ? 'ui-border-signupLevel ui-border-2' : ''}`}
                    >
                        <center><img className="ui-w-12 ui-h-12" src = "https://i.ibb.co/7tVBTsw/white-Knight.png"/></center>
                        Beginner
                    </button>
                    <button
                        onClick={() => {setLevel(800)}}
                        className={`ui-w-24 ui-h-24 ui-bg-signupLevelButton ui-rounded-md ui-ml-4 ui-mr-4 ui-text-sm ${level === 800 ? 'ui-border-signupLevel ui-border-2' : ''}`}
                    >
                        <center><img className="ui-w-12 ui-h-12" src = "https://i.ibb.co/98GY3sW/white-Rook.png"/></center>
                        Intermediate
                    </button>
                    <button
                        onClick={() => {setLevel(1000)}}
                        className={`ui-w-24 ui-h-24 ui-bg-signupLevelButton ui-rounded-md ui-ml-4 ui-mr-4 ui-text-sm ${level === 1000 ? 'ui-border-signupLevel ui-border-2' : ''}`}
                    >
                        <center><img className="ui-w-12 ui-h-12" src = "https://i.ibb.co/6Bm79Y3/white-Queen.png"/></center>
                        Advance
                    </button>
                </div>
                <button
                    className="ui-w-96 ui-mt-12 ui-h-14 ui-text-2xl ui-font-bold ui-bg-loginButton ui-rounded-lg "
                    onClick={() => {
                        props.click(username, email, password, level);
                    }}
                >
                    Sign up
                </button>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="ui-bg-loginBottom ui-w-full ui-h-20 ui-rounded-2xl ui-flex ui-justify-center ui-items-center ui-gap-4">
                    <div>Already have a account?</div>
                    <a href={props.login} className="ui-text-blue-400">Log In</a>
                </div>
            </div>
        </>
    )
}