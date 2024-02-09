import { createStore } from "redux";

const store = createStore(
  function (state, action) {
    if (action.type === "add-filters") {
      return {
        ...state,
        currentFilters: {
          data: action.payload.data,
        },
      };
    }
    return state;
  },
  {
    currentFilters: {
      data: null,
    },
  }
);
export default store;
