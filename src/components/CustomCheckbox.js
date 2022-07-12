import { useField } from "formik";
import React, { useEffect } from "react";

export const CustomCheckbox = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    // console.log(field, meta, helpers);

    return (
        <>
            <div className="checkbox">
                <input
                    {...field}
                    {...props}
                    className={meta.touched && meta.error ? "input-error" : ""}
                />
                <span>I accept to the terms of service!</span>
            </div>

            {meta.touched && meta.error && (
                <h3 className="error">{meta.error}</h3>
            )}
        </>
    );
};
