import { GET_ANKETA_SUCCESS, SAVE_ANKETA } from "../actionTypes";

const initialState = {
  anketa: {},
  result: [],
};

export const anketa = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ANKETA_SUCCESS:
      return {
        ...state,
        anketa: action.anketa,
      };

    case SAVE_ANKETA:
      console.log("res", action.completeAnketa);
      return {
        ...state,
        result: action.completeAnketa,
      };

    default:
      return state;
  }
};
