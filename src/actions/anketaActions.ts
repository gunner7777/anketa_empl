import axios from "axios";
import {
  GET_ANKETA_SUCCESS,
  SAVE_ANKETA,
  RECORD_RESULT_DATABASE,
} from "../actionTypes";

//const URL = "http://localhost/anketav/anketa/";
const URL = "https://empl-anketa.vgsha.info/api/";

export const getAnketa = (id?: number) => {
  return (dispatch: any) => {
    //dispatch(docsIsLoading(true));
    const filename = "anketa/readOne.php";
    axios
      .get(URL + filename)
      .then((response) => {
        //console.log("resp3", response.data);
        dispatch(getAnketaSuccess(response.data));
        //dispatch(docsIsLoading(false));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
};

const getAnketaSuccess = (anketa: any) => {
  return {
    type: GET_ANKETA_SUCCESS,
    anketa,
  };
};

export const saveAnketa = (completeAnketa: string) => {
  //console.log("object", completeAnketa);
  return {
    type: SAVE_ANKETA,
    completeAnketa,
  };
};

/* const recordResultDatabase = (userAndResult: any) => {
  return ((dispatch: any) => {

  });
}
 */
