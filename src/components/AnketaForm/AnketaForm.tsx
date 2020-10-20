import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, FieldArray } from "formik";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormikAnketaRadioGroup } from "../FormikRadioGroup/FormikAnketaRadioGroup";
import { FormikTextField } from "../FormikTextField/FormikTextField";
import { FormikMultipleCheckbox } from "../FormikMultipleCheckbox/FormikMultipleCheckbox";
import { FormikAnketaTextField } from "../FormikTextField/FormikAnketaTextField";
import { getAnketa, saveAnketa } from "../../actions/anketaActions";
import { recordResultDatabase } from "../../actions/appActions";

export const AnketaForm: React.FC<any> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ankState: any = useSelector<any>((state) => state.anketa.anketa);
  const userState: any = useSelector<any>((state) => state.user.user);

  useEffect(() => {
    dispatch(getAnketa());
  }, [ankState.id_ank, dispatch]);

  window.scrollTo(0, 0);

  if (JSON.stringify(ankState) === "{}") {
    return (
      <div className="AnketaForm-ForLoading Text_Center">
        <CircularProgress />
      </div>
    );
  }

  const { questions } = ankState;

  const validate = (value: any) => {
    let errorMessage = undefined;
    if (value === "" || value === undefined) {
      errorMessage = "Выберите ответ";
    }
    return errorMessage;
  };

  const anketaForm = questions.map((question: any, index: number) => {
    switch (question.type) {
      case "single":
        return (
          <div className="AnketaForm-Question">
            <Field
              key={index}
              questionId={question.id}
              globalName="anketaAnswers"
              questionNumber={index + 1}
              name={`anketaAnswers.${index}`}
              labelName={question.text}
              options={question.answers}
              component={FormikAnketaRadioGroup}
              validate={validate}
            />
          </div>
        );

      case "text":
        return (
          <div className="AnketaForm-Question">
            <Field
              key={index}
              globalName="anketaAnswers"
              questionNumber={index + 1}
              name={`anketaAnswers.${index}`}
              labelName={question.text}
              component={FormikAnketaTextField}
              validate={validate}
            />
          </div>
        );

      case "multiple":
        return (
          <div className="AnketaForm-Question">
            <Field
              key={index}
              questionId={question.id}
              globalName="anketaAnswers"
              questionNumber={index + 1}
              name={`anketaAnswers.${index}`}
              labelName={question.text}
              options={question.answers}
              component={FormikMultipleCheckbox}
              validate={validate}
            />
          </div>
        );
      case "other":
        return (
          <div className="AnketaForm-Question">
            <Field
              key={index}
              questionNumber={index + 1}
              name={`anketaAnswers.${index}`}
              labelName={question.text}
              component={FormikTextField}
            />
          </div>
        );
      default:
        break;
    }
  });

  return (
    <div className="AnketaForm-Outer">
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          anketaAnswers: [],
        }}
        onSubmit={(values: any) => {
          // add empty for 'other' questions because it is undefined
          for (let i = 0; i < values.anketaAnswers.length; i++) {
            if (values.anketaAnswers[i] == null) {
              values.anketaAnswers[i] = questions[i].id + ";empty";
            }
          }

          dispatch(saveAnketa(values.anketaAnswers));
          dispatch(
            recordResultDatabase({
              id_ank: ankState.id_ank,
              user: userState,
              result: values.anketaAnswers.join("|"),
            })
          );
          history.push("/thanks");
        }}
        render={(formikBag) => (
          <FieldArray
            name="testAnswers"
            render={(arrayHelpers) => (
              <Form className="AnketaForm">
                {anketaForm}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Завершить анкетирование
                </Button>
              </Form>
            )}
          />
        )}
      />
    </div>
  );
};
