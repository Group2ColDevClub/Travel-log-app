import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/ui/navbar/navbar.tsx';
import { Packages, PlanTrip, SignIn, SignUp, CommunityPage, Cart } from './pages';
import Footer from './components/ui/Footer/Footer';
import Card from './components/ui/Card/Card';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<>/</>} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/plan_a_trip' element={<PlanTrip />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
