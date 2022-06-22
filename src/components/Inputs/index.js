import { TextField } from "@material-ui/core";
import React from "react";


export default function InputView({
    value,
    defaultValue,
    handleChange,
    minWidth,
    maxWidth,
    isDisabled,
}) {
    
    return (
        <TextField 
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
        />
    )
}