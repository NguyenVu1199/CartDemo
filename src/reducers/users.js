import * as Types from "./../contstans/actions";
var initialState = [];
const users = (state = initialState, action) => {
  var { users,user} = action;
  switch (action.type) {
    case Types.LOGIN:
      state = users;
      console.log("action" + JSON.stringify(action));
      return [...state];
      case Types.ADD_USER:
      state.push(user);
      console.log("action" + JSON.stringify(action));
      return [...state];
    default:
      return [...state];
  }
};
export default users;
