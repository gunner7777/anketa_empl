import axios from "axios";
import { RECORD_RESULT_DATABASE, MODAL_TOGGLE } from "../actionTypes";

//const URL = "http://localhost/anketav/app/";
const URL = "https://empl-anketa.vgsha.info/api/";

export const recordResultDatabase = (result: any) => {
  //console.log("resujlt", result);
  return (dispatch: any) => {
    //dispatch(docsIsLoading(true));
    const filename = "app/addResult.php";
    axios
      .post(URL + filename, result)
      .then((response) => {
        //console.log("response---", response.data);
        dispatch(isRecordSuccess(response.data));
        //dispatch(docsIsLoading(false));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
};

export const isRecordSuccess = (bool: boolean) => {
  return {
    type: RECORD_RESULT_DATABASE,
    bool,
  };
};

export const toggleModal = () => {
  return {
    type: MODAL_TOGGLE,
  };
};
