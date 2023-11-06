import React from "react";

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
  }
const Input:React.FC<InputProps> = ({id , onChange ,value,label,type}) => {
    return (
        <div className=" relative">
            <input 
            type={type}
            onChange={onChange}
            value={value}
            id={id}
            className="focus:outline-none focus:ring-0 appearance-none w-full text-white bg-neutral-700 focus:bg-neutral-700 px-4 h-[50px] pb-1 pt-6 rounded-md text-md block invalid:border-b-1 peer"
            placeholder=""
            />
            <label htmlFor={id}
            className="absolute bottom-1 text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100
            p peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ">
                {label}
            </label>
            
        </div>
    )
}
export default Input;