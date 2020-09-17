import {GET_GRID_DATA} from "../constant/constant"


const getGridData = (data) => async (dispatch) => {
  dispatch({ type: GET_GRID_DATA, payload: data });
};



 




export { getGridData };