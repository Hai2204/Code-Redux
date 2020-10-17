import * as Types from "../constants/actionType";
import * as Message from "../constants/Message";
var initialState = Message.MSG_WELLCOM;

const message = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message
    // case Types.MSG_DELETE_TO_CARD_SUCCESS:
    //   return action.message
    default:
      return state;
  }
};
export default message;
