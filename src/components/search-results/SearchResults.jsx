import React, { useEffect, useState } from "react";
import CardsSwiper from "../cards-swiper/CardsSwiper";
import ElementCard from "../element-card/ElementCard";
import "./search-results.css";

const SearchResults = ({ filters }) => {
  const [data, setData] = useState([
    {
      id: "11654",
      img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/5/0/Julie-Dodson_Dephino_Living-Room_Beauty.jpg.rend.hgtvcom.616.462.suffix/1420492278316.jpeg",
      title: "Քանաքեռ-Զեյթուն, Կ. Ուլնեցու փող.",
      address: "Կ. Ուլնեցու փող., Քանաքեռ-Զեյթուն, Երևան",
      price: "195,000",
    },
    {
      id: "11655",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhpq-Wp0JhwFHrDxsYCBZP0D_rO8wwe5KEOZSYwICmnRGrs5_rR9s-qz5EP1BGXe9Tec&usqp=CAU",
      title: "Կենտրոն, Զավարյան փող",
      address: "Զավարյան փող, Կենտրոն, Երևան",
      price: "89,000",
    },
    {
      id: "11656",
      img: "https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg",
      title: "Նոր Նորք, Գյուրջյան փող",
      address: "Գյուրջյան փող, Նոր Նորք, Երևան",
      price: "130,000",
    },
    {
      id: "11657",
      img: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      title: 'Բնակարան "Նկարիչների շենքում"',
      address: "Հր.Քոչար փող, Արաբկիր, Երևան",
      price: "180,000",
    },
  ]);
  const [viewData, setViewData] = useState([]);

  useEffect(
    () => setViewData(data.filter((el) => el.id == filters.id)),
    [filters]
  );

  return (
    <>
      <h2 className="search-res-header">Որոնման արդյունքներ `</h2>
      {viewData.length ? (
        <div className="search-results">
          {viewData.map((el) => {
            return (
              <ElementCard
                like={false}
                price={el.price}
                id={el.id}
                img={el.img}
                address={el.address}
                title={el.title}
                status={0}
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
