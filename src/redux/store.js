import { createStore } from "redux";
import { setFilter } from "./actions";
import filterUsers from "./reducer";

const store = createStore(filterUsers);

export default store;
