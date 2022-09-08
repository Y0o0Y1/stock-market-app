import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, FormHelperText, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import AuthLayout from '../layouts/AuthLayout';
import { useActions, useAppState } from './../overmind/index';
import ControlledInput from './ControlledInput';

const SignUpForm = () => {
    const userActions = useActions().user
    //navigation
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/')
    }
    const { redirect } = useAppState().user

    //form state & validation schema
    const registrationSchema = yup.object({
        firstName: yup
            .string()
            .required("This Field is required")
            .min(4, "First Name must be greater than 4 characters")
            .max(100, "Full Name can`t be greater than 100 characters")
            .trim("This field cannot be empty")
            .matches(
                /^[a-zA-Z\u0600-\u06FF]+.?/,
                ("This field can`t contain only numbers")
            ),
        lastName: yup
            .string()
            .required("This Field is required")
            .min(4, "Last Name must be greater than 4 characters")
            .max(100, "Full Name can`t be greater than 100 characters")
            .trim("This field cannot be empty")
            .matches(
                /^[a-zA-Z\u0600-\u06FF]+.?/,
                ("This field can`t contain only numbers")
            ),
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("This Field Is required")
            .typeError(("validations.required_input")),
        password: yup
            .string("")
            .required("Please enter a password")
            .min(6, "Your password must be more than 6 characters")
            .max(100, "Password can`t be greater than 100 characters"),
        terms: yup
            .bool("This Field Is required")
            .oneOf([true], 'Field must be checked')
    })
        .required();
    const { handleSubmit, control, } = useForm({
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(registrationSchema),
    });
    const onSubmit = (data) => {
        userActions.register(data)
    }
    useEffect(() => {
        if (redirect)
            navigate("/")
    }, [redirect])
    return (
        <AuthLayout
            slogan={<>Move forward <br />to be financially constant</ >}
        >
            <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
                sx={{
                    height: "100%"
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack
                        direction={"column"}
                        spacing={2}
                        sx={{
                            width: "100%"
                        }}
                    >
                        <Grid container columnSpacing={2}>
                            <Grid item xs={6}>
                                <ControlledInput fieldName={"firstName"} label={"First Name"} type={"text"} control={control} />
                            </Grid>
                            <Grid item xs={6}>
                                <ControlledInput fieldName={"lastName"} label={"Last Name"} type={"text"} control={control} />
                            </Grid>
                        </Grid>
                        <ControlledInput fieldName={"email"} label={"Email"} type={"email"} control={control} />
                        <ControlledInput fieldName={"password"} label={"Password"} type={"password"} control={control} />
                        <Controller
                            control={control}
                            name="terms"
                            render={({
                                field: { onChange, value, name, ref },
                                fieldState: { error },
                            }) => (
                                <Stack
                                    direction={"column"}
                                    alignItems={"flex-start"}
                                    justifyContent={"flex-start"}
                                >
                                    <Stack
                                        direction={"row"}
                                        alignItems={"flex-start"}
                                        spacing={1}
                                    >
                                        <Checkbox
                                            name={name}
                                            onChange={onChange} // send value to hook form
                                            checked={value}
                                            inputRef={ref}
                                            error={error && error}
                                            sx={{
                                                margin: "0",
                                                padding: "0"
                                            }}
                                        />
                                        <Typography component={"span"} fontSize={"13px"}>
                                            I agree to all statemments included in
                                            <Typography component={"span"} color="primary" ml={0.5} fontSize={"13px"} sx={{ cursor: "pointer" }}>
                                                Terms of use
                                            </Typography>
                                        </Typography>
                                    </Stack>
                                    {error &&
                                        <FormHelperText sx={{ color: "red" }}>{error.message}</FormHelperText>
                                    }
                                </Stack>

                            )}
                        />

                        <Button color='primary' variant="contained" fullWidth type={"submit"}>Join Now</Button>
                    </Stack>
                </form>
                <Typography>
                    Already a member
                    <Typography
                        component="span"
                        color={"primary"}
                        onClick={navigateToLogin}
                        sx={{
                            cursor: "pointer",
                            marginLeft: "3px"
                        }}
                    >
                        Sign in here
                    </Typography>
                </Typography>
            </Stack>
        </AuthLayout >
    )

}

export default SignUpForm
