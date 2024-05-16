import { createStore } from "redux";

const store = createStore(
  function (state, action) {
    switch (action.type) {
      case "add-filters":
        return {
          ...state,
          currentFilters: {
            data: action.payload.data,
          },
        };
      case "get-items":
        return {
          ...state,
          allItems: {
            items: action.payload.all_items,
          },
        };
      case "get-images":
        return {
          ...state,
          allImages: {
            images: action.payload.all_images
          }
        }
    }
    return state;
  },
  {
    allImages: {
      images: [],
    },
    allItems: {
      items: [],
    },
    currentFilters: {
      data: null,
    },
  }
);
export default store;
