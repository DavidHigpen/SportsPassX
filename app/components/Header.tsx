import React from 'react'

interface HeaderProps {
    header: string;
    children: React.ReactNode;
}

const Header = ({header, children}: HeaderProps) => {
  return (
    <div className="text-3xl font-bold m-4">
        {header}
        <div>
            {children}
        </div>
    </div>
  )
}

export default Header