import {GET_GRID_DATA , GET_MODAL_DATA} from "../constant/constant"


const getGridData = (data) => async (dispatch) => {
  dispatch({ type: GET_GRID_DATA, payload: data });
};

// const getModalData = (data) => async (dispatch) => {
//     dispatch({ type: GET_MODAL_DATA, payload: data });
//   };



 




export { getGridData};