import React from "react";
import '@/app/assets/styles/global.css'
const MainLayout  = ({children}: {children:React.ReactNode})=>{
    return (
        <>
         <html>
            <body>
                <div>
            {children}
         </div>
            </body>
         </html>
        </>
    )
}

export default MainLayout;