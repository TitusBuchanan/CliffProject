import { combineReducers } from "redux";
import resoursesReducer from "./resourcesReducer";
import newResourceReducer from "./newResourceReducer";

export default combineReducers({
  resources: resoursesReducer,
  newResource: newResourceReducer,
});
