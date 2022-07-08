document.getElementById("form-login").addEventListener("submit", Login)

function Login(e){
    e.preventDefault()
    const {user, pass} = e.target
    const usuario = {
        user: user.value,
        password: pass.value
    }

    window.api.Login(usuario)
}