import Link from "next/link";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const route = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        let postDate = {
            username,
            name,
            lastname,
            email,
            password
        };

        let response = await fetch('http://localhost:8000/UserView/crearUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(postDate)
        });
        let result = await response.json();
        console.log(result);
        await route.push('/')
    }
    return (
        <>
            <div className="min-h-screen max-w-full bg-black flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-lime-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
                </div>
                <div className="absolute w-48 h-48 rounded-xl bg-lime-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
                </div>
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <form onSubmit={submit}>
                        <div>
                            <h1 className="text-3xl font-bold text-center mb-2 cursor-pointer">Register</h1>
                        </div>
                        <div className="space-y-4">
                            <label className="mt-0 mb-0 font-bold" >User</label>
                            <input
                                type={"text "}
                                placeholder="Username"
                                className=" block mt-0 text-white text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                            <label className="mt-0 font-bold">Name</label>
                            <input
                                type={"text"}
                                placeholder="Your name"
                                className="block mt-0 text-white text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                onChange={e => setName(e.target.value)}
                                required
                            />
                            <label className="mt-0 font-bold">Last Name</label>
                            <input
                                type={"text"}
                                placeholder="Your Last Name"
                                className="block text-white text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                onChange={e => setLastname(e.target.value)}
                                required
                            />
                            <label className="mt-0 font-bold">Email</label>
                            <input
                                type={"email"}
                                placeholder="@gmail.com"
                                className="block text-white text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <label className="mt-0 font-bold">Password</label>
                            <input
                                type={"password"}
                                placeholder="@gmail.com"
                                className="block text-white text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-center mt-6">
                            <button 
                            className="py-3 w-64 text-xl text-black bg-lime-300 rounded-2xl"
                            type={"submit"}>Register</button>
                            <p className="mt-4 text-sm">Do you already have an account? <span className="underline cursor-pointer"> <Link href={"login"}>Login</Link></span>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="w-40 h-40 absolute bg-lime-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div
                    className="w-20 h-40 absolute bg-lime-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
                </div>
            </div>
        </>
    )
}
