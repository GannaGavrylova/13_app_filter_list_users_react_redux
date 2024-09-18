import { SET_FILTER } from "./actions";

const initialState = {
  user: ["Alice", "Max", "Charlie", "David"],
  filter: "",
};

const filterUsers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payloud.filter,
      };
    default:
      return state;
  }
};

export default filterUsers;
