import * as actions from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data:null,
};

const AddOpt = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_OPT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.ADD_OPT_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,   
      };
    case actions.ADD_OPT_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default AddOpt;