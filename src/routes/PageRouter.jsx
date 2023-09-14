import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "../components/Create"
import routes from "./routes.json"
import Read from "../components/Read"
import Update from "../components/Update"
import Error from "../components/Error"

const PageRouter = () => {

    return(
        <>
            <BrowserRouter>
                <Routes>
                <Route path={routes.Home} element={<Create/>} />
                <Route path={routes.READ} element={<Read/>} />
                <Route path={routes.UPDATE} element={<Update/>} />
                <Route path={routes.ERROR} element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRouter