import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/signup',{
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if(response.ok) {
                setUser({username: '', email: '', password: ''});
                navigate('/login');
            }

            console.log("signup ",response);
        }
        catch(error) {
            console.log("error####",error);
        }
    }

    return <>
       <div className="signup-form">
            <h1>Sign up form</h1>

            <br/>

            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    required 
                    autoComplete="off"
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={handleInput}
                    >

                </input>
            </div>

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
            <button className="submit" type="submit">Sign up</button> 
            </form>
       </div> 
    </>
}