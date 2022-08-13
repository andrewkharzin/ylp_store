import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';


function Home() {

  const categories = [
    {
      "id": 1,
      "title": "Автоматы",
      "imageUrl": "https://prosvet54.ru/upload/iblock/3b7/avtomaty.jpg"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  return (
    <>
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
    
    </>
    
  );
}

export default Home;
