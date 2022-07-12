import * as yup from "yup";

export const basicFormSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .min(6, "Enter valid email!")
        .required("Email Required!"),
    age: yup
        .number()
        .positive("Age must be even!")
        .min(16, "Age must be at least 16!")
        .required("Age Required!"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 letters!")
        .required("Password Reeuiqred!"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match!")
        .required("Confirm Password"),
});

export const advancedFormSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username must be at least 3 letters!")
        .required("Username required!"),
    jobType: yup
        .string()
        .notOneOf(
            ["designer", "developer", "manager", "other"],
            "Choose Valid Job!"
        )
        .required("Job type required!"),
    acceptedTos: yup.boolean().oneOf([true], "Please to the terms of service!"),
});
