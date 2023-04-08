import Menu from "../Menu/Menu"
import Ejercicio from "./Ejercicio/Ejercicio"
import "./Styles/custom.css"
const Dashboard = () => {
  return (
    <div style={{display: "flex"}}>
      <Menu />
      <Ejercicio customCard="custom-card" />
      <Ejercicio customCard="custom-card" />
      <Ejercicio customCard="custom-card" />
      <Ejercicio customCard="custom-card" />
      <Ejercicio customCard="custom-card" />
    </div>
  )
}

export default Dashboard
