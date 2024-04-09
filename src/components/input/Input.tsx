import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'number' | 'checkbox' | 'password'
    value: number;
}

const Input = ({type, value, ...props}: InputProps) => {
    return (
        <input 
        type={type}
        value={value} 
        {...props}
        />
    )
}

export default Input;