import { useField } from "formik";
import React, { useEffect } from "react";

export const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <select
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
