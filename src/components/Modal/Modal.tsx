import React from "react";
import Button from "@material-ui/core/Button";
import { toggleModal } from "../../actions/appActions";
import { useDispatch, useSelector } from "react-redux";

type TModalWindow = {
  children: React.ReactNode | React.ReactChild | React.ElementType;
};

export const ModalWindow: React.FC<any> = ({ children }: TModalWindow) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleModal());
  };

  return (
    <div className="Modal Col12">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
        className="Modal-Button"
        onClick={handleClick}
      >
        Закрыть
      </Button>
      <div className="Modal-Text">{children}</div>
    </div>
  );
};
