import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { FormikRadioGroup } from "../FormikRadioGroup/FormikRadioGroup";
import { ConfidentPolicyCheckbox } from "../ConfidentPolicyCheckbox/ConfidentPolicyCheckbox";
import { FormikTextField } from "../FormikTextField/FormikTextField";
import { addNewUser, isUserRegistrate } from "../../actions/userActions";
import { toggleModal } from "../../actions/appActions";
import { ConfidentPolicy } from "../ConfidentPolicy/ConfidentPolicy";
import { ModalWindow } from "../Modal/Modal";

export type FormValues = {
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  company: string;
  confidentPolicy: boolean;
};

export const AuthForm: React.FC<{}> = () => {
  const history = useHistory();
  const isModalShow: any = useSelector<any>((state) => state.app.modalShow);
  const isUserExist: any = useSelector<any>((state) => state.user.isExist);
  const dispatch = useDispatch();
  const initialValues: FormValues = {
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    phone: "",
    company: "",
    confidentPolicy: false,
  };

  useEffect(() => {
    if (isUserExist === true) {
      history.push("/thanks");
    } else if (isUserExist === false) {
      history.push("/anketa");
    }
  }, [history, isUserExist]);

  //window.scrollTo(0, 0);

  return (
    <>
      <div className="AuthForm">
        <h2 className="AuthForm-Title Text_Center">
          Заполните информацию о себе
        </h2>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={initialValues}
          validationSchema={Yup.object({
            lastName: Yup.string()
              .min(2, "Должно быть не менее 2 символов")
              .required("Обязательно для заполнения"),
            firstName: Yup.string()
              .min(2, "Должно быть не менее 2 символов")
              .required("Обязательно для заполнения"),
            middleName: Yup.string()
              .min(2, "Должно быть не менее 2 символов")
              .required("Обязательно для заполнения"),
            email: Yup.string()
              .email("Неверный email")
              .required("Обязательно для заполнения"),
            phone: Yup.string()
              .min(6, "Должно быть не менее 6 символов")
              .required("Обязательно для заполнения"),
            company: Yup.string().required("Обязательно для заполнения"),
            confidentPolicy: Yup.boolean().oneOf(
              [true],
              "Для продолжения примите соглашение"
            ),
          })}
          onSubmit={(values) => {
            dispatch(isUserRegistrate({ email: values.email }));
            delete values.confidentPolicy;
            dispatch(addNewUser(values));
          }}
          render={(formikBag) => (
            <Form className="AuthForm-Form">
              <div className="AuthForm-InputWrapper">
                <Field
                  name="lastName"
                  labelName="Фамилия"
                  component={FormikTextField}
                />
              </div>

              <div className="AuthForm-InputWrapper">
                <Field
                  name="firstName"
                  labelName="Имя"
                  component={FormikTextField}
                />
              </div>

              <div className="AuthForm-InputWrapper">
                <Field
                  name="middleName"
                  labelName="Отчество"
                  component={FormikTextField}
                />
              </div>

              <div className="AuthForm-InputWrapper">
                <Field
                  name="email"
                  labelName="Email"
                  component={FormikTextField}
                />
              </div>

              <div className="AuthForm-InputWrapper">
                <Field
                  name="phone"
                  labelName="Телефон"
                  component={FormikTextField}
                />
              </div>

              <div className="AuthForm-InputWrapper">
                <Field
                  name="company"
                  labelName="Наименование организации"
                  component={FormikTextField}
                />
              </div>

              <div className="AuthForm-InputWrapper">
                <Field
                  toggleModal={toggleModal}
                  name="confidentPolicy"
                  component={ConfidentPolicyCheckbox}
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disableElevation
              >
                Начать анкетирование
              </Button>
            </Form>
          )}
        />
      </div>
      {isModalShow && (
        <ModalWindow>
          <ConfidentPolicy />
        </ModalWindow>
      )}
    </>
  );
};
