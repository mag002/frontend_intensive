import { useState } from "react";

interface LoginProps {
    handleLogin: (userName: string) => void;
}

function Login({ handleLogin }: LoginProps) {
    const [userName, setUserName] = useState<string>("");

    return <div className="flex justify-center items-center h-screen">
        <div className="shadow-md w-3/12 h-6/12 rounded-md p-5">
            <div className="">
                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">User name</label>
                <div className="relative mt-2 rounded-md shadow-sm flex">
                    <input value={userName} onChange={event => setUserName(event.target.value)} type="text" name="userName" id="userName" className="block w-full rounded-md border-0 p-1.5   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />
                    <button onClick={() => handleLogin(userName)} className="ms-5 rounded-sm bg-sky-500 text-white px-3 py-1 ">Enter</button>
                </div>
            </div>
        </div>
    </div>
}

export default Login