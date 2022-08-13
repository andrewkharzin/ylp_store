import { Routes, Route } from 'react-router-dom';
import Navi from './routes/navigation/navi.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sigin-in.component'



function Shop() {
  return (
      <h1>Shop</h1>
   
  )
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navi />}>
        <Route index element={<Home />} />
        <Route path='store' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
      
    </Routes>
    
  );
}

export default App;
