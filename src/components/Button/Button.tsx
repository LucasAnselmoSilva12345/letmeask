import { ButtonHTMLAttributes } from 'react'

import './button-component.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps){
  return(
    <button 
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}

    />
  )
}