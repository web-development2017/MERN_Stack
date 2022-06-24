import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { REGISTER_USER } from "../../mutations/registerUserMutations";

export default function RegisterUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [registerUser] = useMutation(REGISTER_USER, {
    //     variables: { username, email, password }
    // });

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(name, email, phone);
        if (username === '' || email === '' || password === '') {
            return alert('Please fill in all fields');
        }
      
        // TODO
        // Need to hash password before saving to database
        // registerUser(username, email, password);

        // async function postData(url = '', data = {}){
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         body: JSON.stringify(data)
        //     });
        //     return response.json();
        // }
        // postData('https://localhost:3000/signup', { answer: 42 }).then(data => {
        //     console.log(data); // JSON data parsed by `data.json()` call
        // });
        fetch('/register', {
            method: 'POST'
        });
      
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
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" id="password"  value={ password }  onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>            
    </>
  )
}
