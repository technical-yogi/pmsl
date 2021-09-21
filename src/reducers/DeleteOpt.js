import * as actions from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data:null,
};

const DeleteOpt = (state = initialState, action) => {
  switch (action.type) {
    case actions.DELETE_OPTION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.DELETE_OPTION_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,  // got it 
      };
    case actions.DELETE_OPTION_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default DeleteOpt;