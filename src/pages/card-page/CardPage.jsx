import {React, useState} from 'react'
import './card-page.css'
import { Link, useParams } from 'react-router-dom'
import ImagesSwiper from '../../components/images-swiper/ImagesSwiper'
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";

const CardPage = () => {

  const [data, setData] = useState([
    {
        id: 1,
        img: ['https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/5/0/Julie-Dodson_Dephino_Living-Room_Beauty.jpg.rend.hgtvcom.616.462.suffix/1420492278316.jpeg'],
        title: 'Քանաքեռ-Զեյթուն, Կ. Ուլնեցու փող.',
        address: 'Կ. Ուլնեցու փող., Քանաքեռ-Զեյթուն, Երևան',
        price: '195,000'
    },
    {
        id: 2,
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhpq-Wp0JhwFHrDxsYCBZP0D_rO8wwe5KEOZSYwICmnRGrs5_rR9s-qz5EP1BGXe9Tec&usqp=CAU','https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2158&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
        title: 'Կենտրոն, Զավարյան փող',
        address: 'Զավարյան փող, Կենտրոն, Երևան',
        price: '89,000'
    },
    {
        id: 3,
        img: [
          'https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg',
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        title: 'Նոր Նորք, Գյուրջյան փող',
        address: 'Գյուրջյան փող, Նոր Նորք, Երևան',
        price: '130,000'
    },
    {
        id: 4,
        img: ['https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg'],
        title: 'Բնակարան "Նկարիչների շենքում"',
        address: 'Հր.Քոչար փող, Արաբկիր, Երևան',
        price: '180,000'
    }
])

  const {itemId} = useParams()

  const cardData = data.filter(el => el.id === Number(itemId))

  return (
    <div className='card-page'>
      <Link to={'/'}>
        <button className='back-btn' style={{zIndex: '2'}}><FaArrowLeftLong /></button>
      </Link>
        {
          cardData.map(el => {
            return (
              <div className='container' key={el.id}>
                <div style={{background:'#F4F4F4', width: '100%'}}>
                  <ImagesSwiper images={el.img}/>
                </div>
                <div className='card-data'>
                  <h2>{el.title}</h2>
                  <div className='address'>
                    <FaLocationDot />
                    <b>{el.address}</b>
                  </div>
                  <h3 className='price'>$ {el.price}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
  )
}

export default CardPage