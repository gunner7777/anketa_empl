import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ErrorText } from "../ErrorText/ErrorText";
import { CustomFormLabel } from "../CustomFormLabel/CustomFormLabel";

export type TOption = {
  value: string;
  text: string;
};

export const FormikMultipleCheckbox: React.FC<any> = ({
  field,
  form: { touched, errors },
  name,
  labelName,
  options,
  questionNumber,
  globalName,
  questionId,
  ...props
}) => {
  const fieldName = name || field.name;

  let errorState = false;
  if (errors[globalName] !== undefined && touched[globalName] !== undefined) {
    errorState = true;
  }

  return (
    <>
      <CustomFormLabel>
        {" "}
        {questionNumber}
        {". "}
        {labelName}
      </CustomFormLabel>
      <FormGroup {...field} {...props}>
        {options.map((option: TOption, index: number) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                value={`${questionId};${option.value}`}
                name={fieldName}
              />
            }
            label={option.text}
          />
        ))}
      </FormGroup>
      {errorState && errors[globalName][questionNumber - 1] && (
        <ErrorText>{errors[globalName][questionNumber - 1]}</ErrorText>
      )}
    </>
  );
};
