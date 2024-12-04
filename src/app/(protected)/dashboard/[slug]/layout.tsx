import React from 'react'

type Props = {
    children: React.ReactNode
    params: {slug: string}
}

const Layout = ({children,params}: Props) => {
  return (
    <div>
        {/* sidebar */}
        <div>
            {/* infobar */}
            {children}
        </div>
    </div>
  )
}

export default Layout