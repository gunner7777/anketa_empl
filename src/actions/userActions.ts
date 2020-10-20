import axios from "axios";
import { ADD_NEW_USER, IS_USER_EXIST, USER_RESET } from "../actionTypes";

//const URL = "http://localhost/anketav/users/";
const URL = "https://empl-anketa.vgsha.info/api/";

type TUser = {
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  company: string;
};

const user = {
  lastName: "ln",
  firstName: "fn",
  middleName: "mn",
  email: "email",
  phone: "phone",
  company: "company",
};

export const addNewUser = (user: TUser) => {
  return {
    type: ADD_NEW_USER,
    user,
  };
};

export const isUserRegistrate = (email: any) => {
  //console.log("resujlt", email);
  return (dispatch: any) => {
    //dispatch(docsIsLoading(true));
    const filename = "users/existCheck.php";
    axios
      .post(URL + filename, email)
      .then((response) => {
        //console.log("response---", response);
        dispatch(isUserRegistrateSuccess(response.data));
        //dispatch(docsIsLoading(false));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
};

export const isUserRegistrateSuccess = (bool: boolean) => {
  return {
    type: IS_USER_EXIST,
    bool,
  };
};

export const userReset = () => {
  return {
    type: USER_RESET,
  };
};
