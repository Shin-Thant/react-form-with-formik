import { Form, useFormik } from "formik";
import React, { useEffect } from "react";
import * as yup from "yup";
import { basicFormSchema } from "../schemas/formSchema";

const ErrorLine = ({ message }) => {
    return <h3 className="error">{message}</h3>;
};

export const BasicForm = () => {
    const formik = useFormik({
        // * add initial values
        initialValues: {
            email: "",
            age: 1,
            password: "",
            confirmPassword: "",
        },
        // * add validation in formik
        // validate: ({ age, email, password, confirmPassword }) => {
        //     const errors = {};

        //     if (!age || age < 0) errors.age = "Age is required!";

        //     if (
        //         !email ||
        //         email?.length < 6 ||
        //         !email.includes("@") ||
        //         !email.includes(".com")
        //     )
        //         errors.email = "Enter valid email!";

        //     if (!password) errors.password = "Password is required!";
        //     else if (password.length < 8)
        //         errors.password = "Password must be at least 8 letters!";

        //     if (!confirmPassword) errors.confirmPassword = "Confirm Password!";
        //     else if (confirmPassword !== password)
        //         errors.confirmPassword = "Passwords have to be same!";

        //     return errors;
        // },
        // * add validation schema
        validationSchema: basicFormSchema,
        // * add onSubmit function
        onSubmit: async (values, formikBag) => {
            // console.log({ values, formikBag });
            // formikBag.setSubmitting(true);

            await setTimeout(() => {
                // formikBag.setSubmitting(true);
                console.log(isSubmitting);
                formikBag.resetForm();
            }, 3000);
        },
    });
    // console.log(formik);

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        // * if you don't set handleChange, handleBlur
        getFieldProps,
        values,
        touched,
        errors,
        isSubmitting,
    } = formik;

    // * if you use getFieldProps() you don't need "id" or "name"
    // * but if you set "handleChange" and values you have to set "id" or "name"
    // * if you don't, you won't get any values

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            {/* <Form> */}
            <label htmlFor="email">Email</label>
            <input
                // id="email"
                type="email"
                placeholder="Enter your email"
                className={errors?.email && touched?.email ? "input-error" : ""}
                {...getFieldProps("email")}
                // onChange={handleChange}
                // value={values.email}
            />
            {errors?.email && touched?.email ? (
                <ErrorLine message={errors?.email} />
            ) : (
                ""
            )}

            <label htmlFor="age">Age</label>
            <input
                // id="age"
                type="number"
                min="1"
                placeholder="Enter your age"
                className={errors?.age && touched?.age ? "input-error" : ""}
                {...getFieldProps("age")}
                // onChange={handleChange}
                // value={values.age}
                // onBlur={handleBlur}
            />
            {errors?.age && touched?.age ? (
                <ErrorLine message={errors?.age} />
            ) : (
                ""
            )}

            <label htmlFor="password">Password</label>
            <input
                // id="password"
                type="password"
                placeholder="Enter your password"
                className={
                    errors?.password && touched?.password ? "input-error" : ""
                }
                {...getFieldProps("password")}
                // value={values.password}
                // onChange={handleChange}
                // onBlur={handleBlur}
            />
            {errors?.password && touched?.password ? (
                <ErrorLine message={errors?.password} />
            ) : (
                ""
            )}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                // id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className={
                    errors?.confirmPassword && touched?.confirmPassword
                        ? "input-error"
                        : ""
                }
                {...getFieldProps("confirmPassword")}
                // value={values.confirmPassword}
                // onChange={handleChange}
                // onBlur={handleBlur}
            />
            {errors?.confirmPassword && touched?.confirmPassword ? (
                <ErrorLine message={errors?.confirmPassword} />
            ) : (
                ""
            )}

            <button disabled={isSubmitting} type="submit">
                {isSubmitting ? "true" : "false"}
            </button>
            {/* </Form> */}
        </form>
    );
};
