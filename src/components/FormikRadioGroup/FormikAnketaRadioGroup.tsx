import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ErrorText } from "../ErrorText/ErrorText";
import { CustomFormLabel } from "../CustomFormLabel/CustomFormLabel";

export type TOption = {
  value: string;
  text: string;
};

export const FormikAnketaRadioGroup: React.FC<any> = ({
  field,
  form: { touched, errors },
  name,
  options,
  labelName,
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
        {questionNumber}
        {". "}
        {labelName}
      </CustomFormLabel>
      <RadioGroup {...field} {...props} name={fieldName}>
        {options.map((option: TOption, index: number) => (
          <FormControlLabel
            value={`${questionId};${option.value}`}
            control={<Radio />}
            label={option.text}
            key={index}
          />
        ))}
      </RadioGroup>

      {errorState && errors[globalName][questionNumber - 1] && (
        <ErrorText>{errors[globalName][questionNumber - 1]}</ErrorText>
      )}
    </>
  );
};
