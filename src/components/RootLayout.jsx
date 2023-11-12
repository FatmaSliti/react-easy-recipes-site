import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation"
import Footer from "./Footer"

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <Outlet />
            <Footer />
            
        </>
    )
}

export default RootLayout
