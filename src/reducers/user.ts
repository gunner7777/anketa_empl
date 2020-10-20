import { ADD_NEW_USER, IS_USER_EXIST, USER_RESET } from "../actionTypes";

const initialState = {
  user: {
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    phone: "",
    company: "",
  },
  isExist: "unknown",
};

export const user = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        user: action.user,
      };
    case IS_USER_EXIST:
      return {
        ...state,
        isExist: action.bool,
      };
    case USER_RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
