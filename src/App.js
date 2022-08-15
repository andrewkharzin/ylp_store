import { Routes, Route } from 'react-router-dom';
import Navi from './routes/navigation/navi.component';
import Home from './routes/home/home.component';
// import SignIn from './routes/sign-in/sigin-in.component'
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navi />}>
        <Route index element={<Home />} />
        <Route path='store' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
      
    </Routes>
    
  );
}

export default App;
