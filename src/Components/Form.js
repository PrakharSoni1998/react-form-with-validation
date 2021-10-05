import React from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
})

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const submitForm = (data) => {
        console.log(data)

    }
    return (
        <div className="Form">
            <div className="title"><h1>Sign Up</h1></div>
            <div className="inputs">
                <form action="" onSubmit={handleSubmit(submitForm)}>
                    <input type="text" name="firstName" placeholder="First Name" {...register('firstName')} />
                    <p>{errors.firstName && "First name is required"}</p>
                    <input type="text" name="lastName" placeholder="Last Name" {...register('lastName')} />
                    <p>{errors.lastName?.message}</p>
                    <input type="email" name="email" placeholder="Email" {...register('email')} />
                    <p>{errors.email?.message}</p>
                    <input type="number" name="age" placeholder="Age" {...register('age')} />
                    <p>{errors.age?.message}</p>
                    <input type="password" name="password" placeholder="Password" {...register('password')} />
                    <p>{errors.password?.message}</p>
                    <input
                        type="password" name="confirmPassword" placeholder="Confirm Password" {...register('confirmPassword')}
                    />
                    <p>{errors.confirmPassword && "Passwords Should Match!"}</p>
                    <input type="submit" id="submit" />



                </form>
            </div>

        </div>
    )
}

export default Form
