import { useState } from "react";

export default function RegisterUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            return alert('Please fill in all fields');
        }
        
        if(process.env.NODE_ENV === 'development'){
            fetch('http://localhost:5000/auth/register', {
                method: 'POST'
            });
        }else{
            fetch('https://mernstack888.herokuapp.com/auth/register', {
                method: 'POST'
            });
        }
        
      
        //Clear form
        setUsername('');
        setEmail('');
        setPassword('');
    }

  return (
    <>

        {/* Modal */}
        <div className="container">
            <div className="mb-3">
                <h5 >Register User</h5>
            </div>
            <div className="mb-3">
                <form onSubmit={onSubmit} id="form">
                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" id="username"  value={ username }  onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"  value={ email }  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" id="password"  value={ password }  onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>            
    </>
  )
}
