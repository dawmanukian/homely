import React, { useEffect, useState } from "react";
import CardsSwiper from "../cards-swiper/CardsSwiper";
import ElementCard from "../element-card/ElementCard";
import "./search-results.css";
import { useDispatch } from "react-redux";

const SearchResults = ({ filters }) => {
  const dispatch = useDispatch();

  function filtracion(fi) {
    setViewData(
      data.filter((el) => {
        if (fi.id && fi.id !== el.id) return false;
        if (fi.address && !el.address.startsWith(fi.address)) return false;
        if (fi.regions && !fi.regions.includes(el.region)) return false;
        if (fi.rentOrSell && el.type !== fi.rentOrSell) return false;
        if (fi.roomsNumber && !fi.roomsNumber.includes(el.rooms)) return false;
        if (fi.status && !fi.status.includes(el.status)) return false;
        if (fi.building_type && !fi.building_type.includes(el.building_type))
          return false;
        if (
          fi.floor_min &&
          fi.floor_max &&
          (Number(el.floor) < Number(fi.floor_min) ||
            Number(el.floor) > Number(fi.floor_max))
        )
          return false;
        if (fi.price_from && Number(el.price) < Number(fi.price_from))
          return false;
        if (fi.price_to && Number(el.price) > Number(fi.price_to)) return false;

        return true;
      })
    );
  }

  const [data, setData] = useState([
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
  ]);
  const [viewData, setViewData] = useState([]);

  useEffect(() => filtracion(filters), [filters]);
  console.log(filters);
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <h2 className="search-res-header">Որոնման արդյունքներ `</h2>
        <button
          className="clear-filters-btn"
          onClick={() => {
            dispatch({
              type: "add-filters",
              payload: { data: null },
            });
          }}
        >
          Տեսնել բոլորը
        </button>
      </div>
      {viewData.length ? (
        <div className="search-results">
          {viewData.map((el) => {
            return (
              <ElementCard
                key={el.id}
                like={false}
                price={el.price}
                id={el.id}
                img={el.img}
                address={el.address}
                title={el.title}
                status={0}
                rooms={el.rooms}
              />
            );
          })}
        </div>
      ) : (
        <p className="nothing_text">Ոչինչ չի գտնվել</p>
      )}
    </>
  );
};

export default SearchResults;
