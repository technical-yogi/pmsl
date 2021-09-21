const initialState = " ";
const userPwd = (state=initialState,action) =>{
    switch(action.type)
    {
        case "setpassword":
            return [action.payload];
        default:
            return state;
    }
}
export default userPwd;