const initialState = " ";
const userRule = (state=initialState,action) =>{
    switch(action.type)
    {
        case "setrule":
            return [action.payload];
        default:
            return state;
    }
}
export default userRule;