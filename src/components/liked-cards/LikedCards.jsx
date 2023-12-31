import { React, useState } from "react";
import "./liked-cards.css";
import ElementCard from "../element-card/ElementCard";
import { RiCloseFill } from "react-icons/ri";

const LikedCards = ({ onClose }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      img: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/5/0/Julie-Dodson_Dephino_Living-Room_Beauty.jpg.rend.hgtvcom.616.462.suffix/1420492278316.jpeg",
      title: "Քանաքեռ-Զեյթուն, Կ. Ուլնեցու փող.",
      address: "Կ. Ուլնեցու փող., Քանաքեռ-Զեյթուն, Երևան",
      price: "195,000",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhpq-Wp0JhwFHrDxsYCBZP0D_rO8wwe5KEOZSYwICmnRGrs5_rR9s-qz5EP1BGXe9Tec&usqp=CAU",
      title: "Կենտրոն, Զավարյան փող",
      address: "Զավարյան փող, Կենտրոն, Երևան",
      price: "89,000",
    },
    {
      id: 3,
      img: "https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg",
      title: "Նոր Նորք, Գյուրջյան փող",
      address: "Գյուրջյան փող, Նոր Նորք, Երևան",
      price: "130,000",
    },
    {
      id: 4,
      img: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      title: 'Բնակարան "Նկարիչների շենքում"',
      address: "Հր.Քոչար փող, Արաբկիր, Երևան",
      price: "180,000",
    },
    {
      id: 5,
      img: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      title: 'Բնակարան "Նկարիչների շենքում"',
      address: "Հր.Քոչար փող, Արաբկիր, Երևան",
      price: "180,000",
    },
    {
      id: 6,
      img: "https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg",
      title: "Նոր Նորք, Գյուրջյան փող",
      address: "Գյուրջյան փող, Նոր Նորք, Երևան",
      price: "130,000",
    },
  ]);

  const liked = JSON.parse(localStorage.getItem("liked"));
  const liked_cards = cards.filter((el) => liked.includes(el.id));
  console.log(liked);

  return (
    <div className="liked-cards-section">
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={() => onClose()}
      ></div>
      <div className="liked-cards-panel">
        <button className="close-btn" onClick={() => onClose()}>
          <RiCloseFill />
        </button>
        <div className="liked-cards">
          {liked.length == 0 ? (
            <p style={{ color: "gray" }}>Չկա պահպանված գույք</p>
          ) : (
            liked_cards.map((el) => {
              return (
                <div className="l-card" key={el.id}>
                  <ElementCard
                    // like={like}
                    price={el.price}
                    id={el.id}
                    img={el.img}
                    address={el.address}
                    title={el.title}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedCards;
