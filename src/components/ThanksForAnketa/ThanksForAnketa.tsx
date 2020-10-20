import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { userReset } from "../../actions/userActions";

export const ThanksForAnketa = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userReset());
    history.push("/");
  };

  window.scrollTo(0, 0);

  return (
    <div className="ThanksForAnketa">
      <h2 className="ThanksForAnketa-Text Text_Center">
        Спасибо за ваши ответы
      </h2>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleClick}
      >
        Завершить
      </Button>
    </div>
  );
};
