import { useField } from "formik";
import React from "react";

export const CustomInput = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    console.log(field, meta, helpers, props);

    return (
        <>
            <label>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && (
                <h3 className="error">{meta.error}</h3>
            )}
        </>
    );
};
