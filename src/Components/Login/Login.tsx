import useLogin from "../../Hooks/useLogin"
import "./styles/custom.css"
const Login = () => {
  const{ user, setUser, login } = useLogin()

  const checkSubmit = () : boolean => {
    return user.email.length == 0 || user.password.length == 0
  }
  return (
    <div>
      <form className="form" >
        <img src="https://ih1.redbubble.net/image.3708541048.9411/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Gim Bro web" />
        <label>Correo electrónico</label>
        <input value={user.email} onChange={(event) => setUser({...user, email: event.target.value})} type="email" placeholder="red" />
        <label>Contraseña</label>
        <input type="password" value={user.password} onChange={(event) => setUser({...user, password: event.target.value})} />
        <button type="submit" disabled={checkSubmit()} onClick={login}>Enviar</button>
        <button type="submit" onClick={login}>Enviar</button>
      </form>
    </div>
  )
}

export default Login
