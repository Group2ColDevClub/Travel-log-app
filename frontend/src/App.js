import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RequireAuth } from './components/custom/RequireAuth/RequireAuth.tsx';
import NavBar from './components/ui/navbar/navbar.tsx';
import { Packages, PlanTrip, SignIn, SignUp, CommunityPage, Cart } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<>/</>} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route
          path='/packages'
          element={
            <RequireAuth>
              <Packages />
            </RequireAuth>
          }
        />
        <Route path='/plan_a_trip' element={<PlanTrip />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
