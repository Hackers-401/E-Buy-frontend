import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "../style/login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <main class="login_page">
            <div id="container">
                <div id="left">
                    <h1 id="welcome">E-BUY</h1>
                </div>
                <div id="right">
                    <h1 id="login">LogIn</h1><br />
                    <input onChange={e => setUsername(e.target.value)} type="email" id="email" class="client-info"/>
                        <label for="email">Email</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" id="password" class="client-info"/>
                            <label for="password">Password</label>
                            <input onClick={loginbutton} type="submit" id="submit" class="client-info" value="Submit"/>
                            {/* <input to="/register" type="submit" id="submit" class="client-info" value="Register Now"/> */}
                            <Link to="/register">Register Now</Link>
                           
        </div>
      </div>
      </main>

                    )
}

                    export default Login
