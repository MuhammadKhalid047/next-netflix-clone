import Input from "@/components/input";
import { register } from "module";
import React ,{useCallback, useState} from "react";
const Auth = () =>{
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [variant,setVariant]=useState('login')

    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant) =>  currentVariant==='login' ? 'register' : 'login') ;
    }, [])
     
    return(
        <>
            <div className=" w-full  relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
                <div className=" bg-black w-full h-full lg:bg-opacity-50 md:bg-opacity-50">
                    <nav className="pt-12 pb-5 px-12">
                        <img src="/images/logo.png" alt="logo" className=" h-11" />
                    </nav>
                    <div className="flex justify-center items-center">
                        <div className=" bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md md:max-w-md rounded-md w-full mb-10">
                            <h2 className="text-3xl text-white font-semibold mb-8">{variant === 'login' ? 'Sign in': 'Create New Account'}</h2>
                            <div className="flex flex-col gap-4">
                                {variant==='login' ? '':
                                <Input
                                    id="name"
                                    type="name"
                                    label="Username"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)} 
                                />}
                                <Input
                                    id="email"
                                    type="email"
                                    label="Email address or phone number"
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)} 
                                />
                                <Input
                                    id="password"
                                    type="password"
                                    label="password"
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)} 
                                />
                                <button className=" bg-red-700 py-3 rounded-md w-full text-white font-semibold mt-2 transition hover:bg-red-500">{variant==="login"? "Sign In":"Sign Up"}</button>
                                <p className="text-zinc-400 mt-10">{variant === 'login' ? 'New to Netflix? ' : 'Already have an account? '}<span className="text-white font-semibold cursor-pointer " onClick={toggleVariant} >{variant === 'login' ? 'Sign up now.' : 'Sign In'}</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Auth;