import {} from "../constant/constant"


const gridData = (data) => async (dispatch) => {
  dispatch({ type: "RESTAURANT_LIST_DATA", payload: data });
};



 




export { gridData };