import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthForm } from "../AuthForm/AuthForm";
import { AnketaForm } from "../AnketaForm/AnketaForm";

import { getAnketa } from "../../actions/anketaActions";
import { addNewUser, isUserRegistrate } from "../../actions/userActions";
import { recordResultDatabase } from "../../actions/appActions";
import { ThanksForAnketa } from "../ThanksForAnketa/ThanksForAnketa";

export const Content = () => {
  const dispatch = useDispatch();
  const user = {
    lastName: "ln",
    firstName: "fn",
    middleName: "mn",
    email: "email",
    gender: "male",
  };
  useEffect(() => {
    //dispatch(getAnketa());
    //dispatch(addNewUser(user));
    //dispatch(isUserRegistrate({ email: "email" }));
    /* let dd = ["13", "2", ["12", "33"], "dfdf"].join("|");
    console.log(dd);
    dispatch(
      recordResultDatabase({
        id_ank: "1",
        user: user,
        result: dd,
      })
    ); */
  });

  return (
    <div className="Content-Outer">
      <div className="Content">
        <Switch>
          <Route exact path="/">
            <AuthForm />
          </Route>
          <Route path="/anketa">
            <AnketaForm />
          </Route>
          <Route path="/thanks">
            <ThanksForAnketa />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};
