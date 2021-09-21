export const setName = (name) => {
    if(name){
  return {
    type: "setname",
    payload: name
  };
}
};
export const setPwd = (pas) => {
    if(pas){
    return {
        type:"setpassword",
        payload:pas,
    }
}
}
export const setRule = (rul) => {
    if(rul){
    return {
        type:"setrule",
        payload:rul,
    }
}
}

