import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CustomFormLabel } from "../CustomFormLabel/CustomFormLabel";
import { ErrorText } from "../ErrorText/ErrorText";

export type TOption = {
  value: string;
  text: string;
};

export const FormikRadioGroup: React.FC<any> = ({
  field,
  form: { touched, errors },
  name,
  options,
  labelName,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <>
      <CustomFormLabel>{labelName}</CustomFormLabel>
      <RadioGroup {...field} {...props} name={fieldName}>
        {options.map((option: TOption, index: number) => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.text}
            key={index}
          />
        ))}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <ErrorText>{errors[fieldName]}</ErrorText>
      )}
    </>
  );
};
