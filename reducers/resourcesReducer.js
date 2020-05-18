import resources from "../mock/resources";
import { INCREMENT, SUBMIT_FORM } from "../actions/types";

const INITIAL_STORE = {
  list: [...resources],
  loading: true,
  errors: {},
  count: 0,
  query: '',
  search: [...resources]
};

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...store,
        count: action.payload,
      };
    case SUBMIT_FORM:
      const newResource = action.payload;
      newResource.id = store.list[store.list.length - 1].id + 1;
      return {
        ...store,
        list: [...store.list, newResource],
      };
      case "CHANGE_SEARCH": 
      const newsearchedResources = action.payload
      newsearchedResources = [...store.list]
        return {
          ...store,
          query: action.payload,
          search: [...store.list, newsearchedResources]
        }
      
    default:
      return store;
  }
};
