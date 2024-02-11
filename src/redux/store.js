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
    if (action.type === "get-items") {
      return {
        ...state,
        items: {
          items: action.payload.items,
        },
      };
    }
    return state;
  },
  {
    allItems: {
      items: [
        {
          id: "11654",
          img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/5/0/Julie-Dodson_Dephino_Living-Room_Beauty.jpg.rend.hgtvcom.616.462.suffix/1420492278316.jpeg",
          title: "Քանաքեռ-Զեյթուն, Կ. Ուլնեցու փող.",
          address: "Կ. Ուլնեցու փող., Քանաքեռ-Զեյթուն, Երևան",
          price: "195000",
          region: "arabkir",
          rooms: "3",
          type: "rent",
          status: "good",
          building_type: "stone",
          floor: "3",
        },
        {
          id: "11655",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhpq-Wp0JhwFHrDxsYCBZP0D_rO8wwe5KEOZSYwICmnRGrs5_rR9s-qz5EP1BGXe9Tec&usqp=CAU",
          title: "Կենտրոն, Զավարյան փող",
          address: "Զավարյան փող, Կենտրոն, Երևան",
          price: "89000",
          region: "arabkir",
          rooms: "4",
          type: "rent",
          status: "good",
          building_type: "stone",
          floor: "5",
        },
        {
          id: "11656",
          img: "https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg",
          title: "Նոր Նորք, Գյուրջյան փող",
          address: "Գյուրջյան փող, Նոր Նորք, Երևան",
          price: "130000",
          region: "arabkir",
          rooms: "1",
          type: "rent",
          status: "new",
          building_type: "stone",
          floor: "1",
        },
        {
          id: "11657",
          img: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
          title: 'Բնակարան "Նկարիչների շենքում"',
          address: "Հր.Քոչար փող, Արաբկիր, Երևան",
          price: "180000",
          region: "arabkir",
          rooms: "6",
          type: "sell",
          status: "new",
          building_type: "monolith",
          floor: "1",
        },
      ],
    },
    currentFilters: {
      data: null,
    },
  }
);
export default store;
