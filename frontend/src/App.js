import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext.tsx';
import { RequireAuth } from './pages/RequireAuth/RequireAuth.tsx';
import { Packages, PlanTrip, SignIn, SignUp, CommunityPage, Cart } from './pages';
import NavBar from './components/ui/navbar/navbar.tsx';
import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer bodyClassName={styles.toast_body} />
      </BrowserRouter>
    </AuthProvider>
  );
}
