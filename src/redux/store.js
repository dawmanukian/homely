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
    if (action.type === "select-language") {
      return {
        ...state,
        currentLanguage: {
          lang: action.payload.lang,
        },
      };
    }
    return state;
  },
  {
    currentFilters: {
      data: null,
    },
    currentLanguage: {
      lang: localStorage.getItem("lang") || "arm",
    },
  }
);
export default store;
