import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function handleName(e) {
        setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function register() {
        console.log(name + " " + email + " " + password);
       axios.post("http://localhost:3000/register", { name, email, password }).then(result => {
            console.log("Registered successful");
            navigate('/')
        }).catch(err =>
            console.log("Registration failed :"+err)
        )

    };
    return (
        <Box sx={{
            width: 400,
            height: 400, position: 'absolute', top: '20%', left: '35%', boxShadow: 3
        }}>
            <Typography fontSize={40} color='primary' sx={{ fontFamily: 'ui-sans-serif', textAlign: 'center', fontWeight: 'bold', background: blue }}>SIGN UP</Typography>
            <div >
                <TextField
                    value={name}
                    onChange={handleName}
                    sx={{ m: 2, width: '90%' }}
                    id="outlined-multiline-flexible"
                    label="Username"
                    Name
                    maxRows={4}
                />
            </div>
            <div>
                <TextField
                    value={email}
                    onChange={handleEmail}
                    sx={{ m: 2, width: '90%' }}
                    id="outlined-multiline-flexible"
                    label="Email"
                    Email
                    maxRows={4}
                /></div><div>
                <TextField
                    value={password}
                    onChange={handlePassword}
                    sx={{ m: 2, width: '90%' }}
                    id="outlined-multiline-flexible"
                    label="Password"
                    password
                    maxRows={4}
                />
            </div>
            <Button variant="contained" sx={{ m: 2, width: '90%' }} onClick={register}>Sign Up</Button>
        </Box>
    )
}
export default SignUp