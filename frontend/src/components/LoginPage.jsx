import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
function LoginPage() {
    const navigate = useNavigate();
    const [Username, setMailId] = useState("");
    const [Password, setPassword] = useState("");
    const handleUsername = (evt) => {
        setMailId(evt.target.value);
    }
    const handlePassword = (evt) => {
        setPassword(evt.target.value);
    }
    const login = () => {
        console.log(Username)
        console.log(Password)
        const apicall = axios.get(`http://localhost:5000/login?UserName=${Username}&password=${Password}`)
        apicall.then((data) => {
            console.log("login " + data.data);
            if (data.data === true) {
                toast.success("Login Successfull");
                navigate("/studentList")
            }else{
                toast.error("Login failed");
            }
        }).catch(err => {
            console.log("login alert check :" + err);
            toast.error("User not Registered");
            <Alert variant="filled" severity="error">
                User not registered
            </Alert>
        }
        )
    };
    function register() {
        return (
            navigate('/register')
        )
    };

    return (
        <Box
            sx={{
                width: 400,
                height: 400,
                borderRadius: 1,
                alignContent: 'center',
                justifyItems: 'center',
                position: 'fixed',
                left: '35%',
                top: '20%',
                boxShadow: 3
            }}
        >
            <Typography variant="h5" sx={{ marginY: 3 }} align='center' color='primary'>
                Student Information System
            </Typography>
            <div>
                <TextField required sx={{ m: 2 }} value={Username} onChange={handleUsername} id="outlined-basic" label="Email/Username" variant="outlined" />
            </div>
            <div>
                <TextField required onChange={handlePassword} value={Password} id="outlined-basic" type='password' label="Password" variant="outlined" />
            </div>
            <Button sx={{ m: 2 }} variant="contained" onClick={login}>Sign In</Button>
            <Button sx={{ m: 2 }} variant="contained" onClick={register}>Sign Up</Button>
            <ToastContainer/>


        </Box>
    )
}
export default LoginPage;