'use client'

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export default function Button({children, onClick}: ButtonProps) {
  return (
    <button className="btn btn-neutral" onClick={onClick}>{children}</button>
  )
}