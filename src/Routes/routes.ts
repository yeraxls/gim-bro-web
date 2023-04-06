import { JsxElement } from "typescript"
import Login from "../Components/Login/Login"
import Dashboard from "../Components/Dashboard/Dashboard"
import { type } from "os"

interface routes{
    to: string,
    path: string,
    Component: Props
}

interface Props { children: JSX.Element | JSX.Element[] }

export const CustomRoutes = () : routes[] => {
    return [
        {to: "/login", path:"/login", Component: Login},
        {to: "/dashboard", path:"/dashboard",  Component: Dashboard}
    ]
}