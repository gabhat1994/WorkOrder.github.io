import { GET_GRID_DATA, GET_MODAL_DATA } from "../constant/constant";


function dataReducer(state = { gridData: [], modalData: [] }, action) {
  switch (action.type) {
    case GET_GRID_DATA:
      return {
        ...state,
        gridData: action.payload,
      };

    default:
      return state;
  }
}

function modalReducer(state = { modalData: [] }, action) {
  switch (action.type) {
    case GET_MODAL_DATA:
      return {
        ...state,
        modalData: action.payload
      };

    default:
      return state;
  }
}

export { dataReducer , modalReducer };
