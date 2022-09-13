import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useActions, useAppState } from '../overmind';
import AuthLayout from './../layouts/AuthLayout';
import ControlledInput from './ControlledInput';
const LoginForm = () => {
    const navigate = useNavigate()
    const navigateToSignupForm = () => {
        navigate('/sign-up')
    }
    const redirect = useAppState((state) => {
        if (state.user.redirect)
            return state.user.redirect
    })
    const isLoggedin = useAppState((state) => {
        return state.user.isLoggedin
    })
    const { logIn } = useActions().user
    const { removeRedirection } = useActions()
    const loginSchema = yup.object({
        email: yup
            .string()
            .email("Please enter a valid Email")
            .required("Please Enter Your Email")
            .trim("This field can`t be empty"),
        password: yup
            .string("")
            .required("Please Enter Your Password")
            .trim("This field can`t be empty"),
    }).required();

    const { handleSubmit, control, } = useForm({
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        logIn(data)
    }
    useEffect(() => {
        if (redirect)
            removeRedirection()
        if (isLoggedin)
            navigate("/explore")
    }, [])

    return (
        <AuthLayout
            slogan={<>Purchase Today <br /> For Secured Tomorrow</>}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={2}
                    sx={{
                        height: "100%"
                    }}
                >
                    <Stack
                        direction={"column"}
                        spacing={2}
                        sx={{
                            width: "100%"
                        }}
                    >
                        <ControlledInput fieldName={"email"} label={"Email"} type={"email"} control={control} />
                        <ControlledInput fieldName={"password"} label={"Password"} type={"password"} control={control} />

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                        >
                            <Checkbox
                                label={"Remember Me"}
                                sx={{
                                    margin: 0,
                                    padding: 0
                                }} />
                            <Typography component={"span"}>Remember Me</Typography>
                        </Stack>
                    </Stack>
                    <Button color='primary' variant="contained" fullWidth type="submit">Sign In</Button>
                    <Typography>
                        I`m a new member
                        <Typography
                            component="span"
                            color={"primary"}
                            onClick={navigateToSignupForm}
                            sx={{
                                cursor: "pointer",
                                marginLeft: "3px"
                            }}
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </Stack>
            </form>
        </AuthLayout >
    )
}

export default LoginForm
