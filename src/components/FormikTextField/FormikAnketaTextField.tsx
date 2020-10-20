import React from "react";
import TextField from "@material-ui/core/TextField";
import { ErrorText } from "../ErrorText/ErrorText";
import { CustomFormLabel } from "../CustomFormLabel/CustomFormLabel";

export const FormikAnketaTextField: React.FC<any> = ({
  field,
  form: { touched, errors },
  name,
  labelName,
  questionNumber,
  globalName,
  ...props
}) => {
  //const fieldName = name || field.name;

  let errorState = false;
  if (errors[globalName] !== undefined && touched[globalName] !== undefined) {
    errorState = true;
  }

  return (
    <>
      <CustomFormLabel>
        {questionNumber && `${questionNumber}. `}
        {labelName}
      </CustomFormLabel>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        {...field}
        {...props}
      />
      {errorState && errors[globalName][questionNumber - 1] && (
        <ErrorText>{errors[globalName][questionNumber - 1]}</ErrorText>
      )}
    </>
  );
};
