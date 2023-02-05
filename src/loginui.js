import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, Formik,Field } from "formik";
import Link from '@mui/material/Link';
// import {LoginuiContext} from "./Contexts/LoginuiContext";
import { GlobalInfo } from './Context'

const Login=() =>{
    // const{setUserName,setshowProfile} = useContext(LoginuiContext);
    const { color, setColor } = useContext(GlobalInfo);
    console.log("GlobalInfo", color);

    useEffect(() => {
        setColor("")
        console.log("appColor", color);
    }, [])

const paperstyle={padding:20,height: '70vh', width:280, margin:"20px auto", backgroundColor: '#0000000a'}
const Avatarstyle={backgroundcolor:'green'}
const TextFieldstyle={margin:"10px auto 10px",border: 1, backgroundColor:"white"}
const Buttonstyle={margin:"5px auto 10px"}
const initialValues={
    username:'', 
    password:'',  

}
const onSubmit=(values,props)=>{
   console.log(values);
}
return(

     <Grid align='center'> 
    <Paper elevation={10} style={paperstyle}>
        <Avatar style={Avatarstyle}>H</Avatar>
        <h2 style={{color}}>Sign In</h2>
         <Formik initialValues={initialValues} onSubmit={onSubmit}>
           {(props)=>(
           <Form>

        <Field as={TextField} style={TextFieldstyle} label="Username" name="Username"   placeholder='Enter Username' fullWidth required/>
       <Field as={TextField} style={TextFieldstyle} label='Password' name="password" placeholder='Enter Password' type='password' fullWidth required/>
        <Button href="/navigate"  style={Buttonstyle}  type='submit' color='primary' variant='contained' fullWidth >sign in </Button>
            </Form>
           )}
        </Formik>
        <Typography>  
         <Link href="#">
         forgot Password?
         </Link>
     </Typography>
     <Typography> Do you Have an account  
         <Link href="#">
         Sign Up
         </Link>
     </Typography>
        </Paper>
        </Grid>
)
    }
export default Login;