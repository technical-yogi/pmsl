const initialState = " ";
const userData = (state=initialState,action) =>{
    switch(action.type)
    {
        case "setname":
            return [action.payload];
        default:
            return state;
    }
}
export default userData;
