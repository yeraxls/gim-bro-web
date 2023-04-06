import { JsxElement } from "typescript"
import Login from "../Components/Login/Login"
import Dashboard from "../Components/Dashboard/Dashboard"
import { type } from "os"

interface routes {
    to: string,
    path: string,
    name: string,
    Component: () => JSX.Element
}


export const routes: routes[] = [
    { to: "/", path: "/", name:"login", Component: Login },
    { to: "/dashboard", path: "/dashboard", name:"dashboard", Component: Dashboard }
]