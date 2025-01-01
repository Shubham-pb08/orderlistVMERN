import { useState } from "react";

export const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
    }

    return <>
       <div className="signup-form">
            <h1>Login form</h1>

            <br/>

            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    autoComplete="off"
                    placeholder="Enter your Email"
                    value={user.email}
                    onChange={handleInput}
                    >
                </input>
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    required 
                    autoComplete="off"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInput}
                    >
                </input>
            </div>
            
            <br/>
            <button className="submit" type="submit">Login</button> 
            </form>
       </div> 
    </>
}