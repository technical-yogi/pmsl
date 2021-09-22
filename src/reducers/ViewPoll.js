import * as actions from "../constants";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data:null,
};

const ViewPoll = (state = initialState, action) => {
  switch (action.type) {
    case actions.VIEW_POLL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.VIEW_POLL_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response, 
      };
    case actions.VIEW_POLL_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default ViewPoll;