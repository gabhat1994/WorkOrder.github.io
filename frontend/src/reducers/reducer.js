import  {} from "../constant/constant"

function dataReducer(state = { }, action) {
    switch (action.type) {
 
      case "ADD_MENU_ITEM":
        return {
          ...state,
        };
  
      default:
        return state;
    }
  }
  
  export { dataReducer };