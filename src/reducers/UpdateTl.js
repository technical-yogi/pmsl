import * as actions from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data:null,
};

const UpdateTl = (state = initialState, action) => {
  // console.log(action.payload,"asdfasdf"); 
  switch (action.type) {       
    case actions.UPDATE_POLL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.UPDATE_POLL_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response, 
      };
    case actions.UPDATE_POLL_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default UpdateTl;