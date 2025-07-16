import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/authProvider';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-[50%] lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                className="input"
                                placeholder="Name"
                            />
                            {errors.name && <span>Name is required</span>}

                            <label className="label">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                className="input"
                                placeholder="Email"
                            />
                            {errors.email && <span>Email is required</span>}

                            <label className="label">Password</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 12,
                                })}
                                name="password"
                                className="input"
                                placeholder="Password"
                            />
                            {errors.password?.type === 'required' && <span>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span>Password must be at least 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span>Password must be less than 12 characters</span>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;