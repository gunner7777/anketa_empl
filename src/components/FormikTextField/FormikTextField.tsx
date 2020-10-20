import React from "react";
import TextField from "@material-ui/core/TextField";
import { CustomFormLabel } from "../CustomFormLabel/CustomFormLabel";
import { ErrorText } from "../ErrorText/ErrorText";

export const FormikTextField: React.FC<any> = ({
  field,
  form: { touched, errors },
  name,
  labelName,
  questionNumber,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <>
      <CustomFormLabel className="Form-Label">
        {questionNumber && `${questionNumber}. `}
        {labelName}
      </CustomFormLabel>
      <TextField
        id="outlined-basic"
        fullWidth
        variant="outlined"
        {...field}
        {...props}
      />
      {touched[fieldName] && errors[fieldName] && (
        <ErrorText>{errors[fieldName]}</ErrorText>
      )}
    </>
  );
};
