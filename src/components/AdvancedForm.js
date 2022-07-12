import { Field, Form, Formik } from "formik";
import React from "react";
import { advancedFormSchema } from "../schemas/formSchema";
import { CustomCheckbox } from "./CustomCheckbox";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";

export const AdvancedForm = () => {
    return (
        <Formik
            initialValues={{
                username: "",
                jobType: "",
                acceptedTos: false,
            }}
            validationSchema={advancedFormSchema}
            onSubmit={async (values, formikBag) => {
                // console.log({ values, formikBag });
                formikBag.setSubmitting(true);

                await setTimeout(() => {
                    formikBag.setSubmitting(false);
                    formikBag.resetForm();
                }, 3000);
            }}
        >
            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your name"
                    />
                    <CustomSelect
                        lable="Job Type"
                        name="jobType"
                        placeholder="Enter your job"
                    >
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="developer">Developer</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                    </CustomSelect>

                    {/* <Field name="jobType" as="select">
                        <option>Designer</option>
                        <option>Developer</option>
                        <option>Manager</option>
                        <option>Other</option>
                    </Field> */}

                    <CustomCheckbox type="checkbox" name="acceptedTos" />

                    <button disabled={isSubmitting} type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};
