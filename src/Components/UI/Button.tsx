import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string,
    children:ReactNode,
    width?:"w-full" | "w-fit"
}

const Button = ({className,children,width, ...rest}:IProps) => {
  return (
    <button className={`${className} ${width} text-white  rounded-md p-2`} {...rest}>{children}</button>
)
}

export default Button