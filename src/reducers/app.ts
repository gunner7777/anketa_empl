import { MODAL_TOGGLE } from "../actionTypes";

const initialState = {
  modalShow: false,
};

export const app = (state = initialState, action: any) => {
  switch (action.type) {
    case MODAL_TOGGLE:
      return {
        ...state,
        modalShow: !state.modalShow,
      };
    default:
      return state;
  }
};
