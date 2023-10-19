import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ElementCard from '../element-card/ElementCard';
import './cards-swiper.css'
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const CardsSwiper = () => {

    const liked_cards = localStorage.getItem('liked')
    if (liked_cards === '' || liked_cards == null) {
        localStorage.setItem('liked', JSON.stringify([]))
    }
    console.log(liked_cards)
    // localStorage.removeItem('liked')

    const [cards, setCards] = useState([
        {
            id: 1,
            img: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/5/0/Julie-Dodson_Dephino_Living-Room_Beauty.jpg.rend.hgtvcom.616.462.suffix/1420492278316.jpeg',
            title: 'Քանաքեռ-Զեյթուն, Կ. Ուլնեցու փող.',
            address: 'Կ. Ուլնեցու փող., Քանաքեռ-Զեյթուն, Երևան',
            price: '195,000',
            isLiked: false
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhpq-Wp0JhwFHrDxsYCBZP0D_rO8wwe5KEOZSYwICmnRGrs5_rR9s-qz5EP1BGXe9Tec&usqp=CAU',
            title: 'Կենտրոն, Զավարյան փող',
            address: 'Զավարյան փող, Կենտրոն, Երևան',
            price: '89,000',
            isLiked: false
        },
        {
            id: 3,
            img: 'https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg',
            title: 'Նոր Նորք, Գյուրջյան փող',
            address: 'Գյուրջյան փող, Նոր Նորք, Երևան',
            price: '130,000',
            isLiked: false
        },
        {
            id: 4,
            img: 'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg',
            title: 'Բնակարան "Նկարիչների շենքում"',
            address: 'Հր.Քոչար փող, Արաբկիր, Երևան',
            price: '180,000',
            isLiked: false
        }
    ])

    const like = (id) => {
        console.log(id)
        setCards(cards.map(el => {
            if(el.id === id){
                el.isLiked = !el.isLiked
            }
            return el
        }))
        const liked = JSON.parse(localStorage.getItem('liked'))
        localStorage.setItem('liked', JSON.stringify([...liked, id]));
        console.log(localStorage.getItem('liked'))
        console.log(id)
    }

  return (
    <div className='cards-swiper-panel'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        breakpoints={{
            500: {
            slidesPerView: 2,
            spaceBetween: 40,
            },
            1120: {
            slidesPerView: 4
            },
        }}
        >
            {
                cards.map(el => {
                    return (
                        <SwiperSlide key={el.id}>
                            <ElementCard 
                                like={like} 
                                price={el.price}
                                id={el.id}
                                img={el.img}
                                address={el.address}
                                title={el.title}
                                isLiked={el.isLiked}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default CardsSwiper