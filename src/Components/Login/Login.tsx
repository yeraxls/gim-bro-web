import "./styles/custom.css"
const Login = () => {
  return (
    <div>
      <form className="form" >
        <img src="https://ih1.redbubble.net/image.3708541048.9411/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Gim Bro web" />
        <label>Correo electrónico</label>
        <input type="email" placeholder="red" />
        <label>Contraseña</label>
        <input type="password" />
        <button type="submit" >Enviar</button>
      </form>
    </div>
  )
}

export default Login
