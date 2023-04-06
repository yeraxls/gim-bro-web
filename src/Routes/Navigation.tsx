import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import Login from "../Components/Login/Login"


const Navigation = () => {
  return (
    <div>
        <BrowserRouter>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        {
          routes.map(r => <NavLink to={r.to}>{r.name}</NavLink>)
        }
      </nav>
      <Routes>
        {
          routes.map(r => <Route path={r.path} Component={r.Component}></Route>)
        }
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navigation
