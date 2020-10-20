import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { ErrorText } from "../ErrorText/ErrorText";
import { toggleModal } from "../../actions/appActions";
import { useDispatch, useSelector } from "react-redux";

const PolicyLink: React.FC<any> = () => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleModal());
  };

  return (
    <a href="#" className="ConfidentPolicyCheckbox-Link" onClick={handleClick}>
      политикой обработки персональных данных
    </a>
  );
};

export const ConfidentPolicyCheckbox: React.FC<any> = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  //const dispatch = useDispatch();

  return (
    <>
      <div className="ConfidentPolicyCheckbox">
        <Checkbox {...field} {...props} />
        <p className="ConfidentPolicyCheckbox-Text">
          Согласен с{" "}
          {/* <a href="#" className="ConfidentPolicyCheckbox-Link" onClick={handleClick}>
            политикой обработки персональных данных
          </a> */}
          <PolicyLink />
        </p>
      </div>
      {touched[field.name] && errors[field.name] && (
        <ErrorText>{errors[field.name]}</ErrorText>
      )}
    </>
  );
};
