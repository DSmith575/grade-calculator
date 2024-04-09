import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	type: "button" | "submit" | "reset";
	children: string;
}

const Button = ({ type, children, ...props }: ButtonProps) => {
	return (
		<button type={type} {...props}>
			{children}
		</button>
	);
};

export default Button;
