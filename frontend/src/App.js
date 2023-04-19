import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import { RequireAuth } from './components/custom/RequireAuth/RequireAuth.tsx';
import NavBar from './components/ui/navbar/navbar.tsx';
import { Packages, PlanTrip, SignIn, SignUp, CommunityPage, Cart } from './pages';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<>/</>} />
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/packages' element={<Packages />} />
          <Route
            path='/plan_a_trip'
            element={
              <RequireAuth>
                <PlanTrip />
              </RequireAuth>
            }
          />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
