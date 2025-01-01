import { useState } from "react";

export const Contact = () => {

    const [message, setMessage] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setMessage({
            ...message,
            [name]:value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(message);
    }

    return <>
       <div className="signup-form">
            <h1>Contact form</h1>

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
                    value={message.username}
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
                    value={message.email}
                    onChange={handleInput}
                    >
                </input>
            </div>

            <div>
                <label htmlFor="message">message</label>
                <input 
                    type="textarea" 
                    name="message" 
                    id="message" 
                    required 
                    autoComplete="off"
                    placeholder="Enter your Message"
                    value={message.message}
                    onChange={handleInput}
                    >
                </input>
            </div>
            
            <br/>
            <button className="submit" type="submit">Send Message</button> 
            </form>
       </div> 
    </>
}