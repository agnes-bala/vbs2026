import React from "react";
import { TextField } from "@mui/material";

function MuiTextField({
  label,
  name,
  value,
  enableUpperCase = false,
  error,
  helperText,
  onChange,
  onInput,
  inputProps,   // accept inputProps
  ...rest
}) {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      size="small"
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
      onInput={(e) => {
        if (enableUpperCase) {
          const { selectionStart } = e.target;
          if (!isNaN(+e.target.value)) {
            setTimeout(() => e.target.setSelectionRange(selectionStart, selectionStart), 0);
          } else {
            e.target.value = e.target.value.toUpperCase();
            setTimeout(() => e.target.setSelectionRange(selectionStart, selectionStart), 0);
          }
        }
        if (onInput) onInput(e);
      }}
      inputProps={inputProps}   // pass explicitly
      {...rest}
    />
  );
}

export default MuiTextField;