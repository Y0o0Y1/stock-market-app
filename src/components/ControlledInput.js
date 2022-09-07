import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'


const ControlledInput = ({ control, fieldName, type, label }) => {
    return (
        <Controller
            name={fieldName}
            control={control}
            rules={{ required: true, error: "required field" }}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
            }) => {
                error && console.log({ error })
                return (
                    <TextField
                        defaultValue={value}
                        variant='outlined'
                        label={label}
                        fullWidth
                        type={type}
                        name={name}
                        onChange={onChange} // send value to hook form
                        onBlur={onBlur} // notify when input is touched
                        inputRef={ref} // wire up the input ref
                        helperText={error && error.message}
                        error={error && true}
                    />
                )
            }
            }

        />
    )
}

export default ControlledInput
