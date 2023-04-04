import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Form from './components/ui/Form/Form.tsx';
import NavBar from './components/ui/navbar/navbar.tsx';
import { Packages, PlanTrip, SignIn, SignUp, CommunityPage, Cart } from './pages';

export default function App() {
  const inputs = [
    {
      label: 'name',
      name: 'name',
      placeholder: 'first name',
      onChange: (value) => console.log(value),
      validationFunc: (value) => console.log(value, 'hello', value === 'hello') || value === 'hello',
      errorMsg: 'Error. not hello',
    },
    {
      label: 'lastname',
      name: 'lastname',
      placeholder: 'last name',
      onChange: (value) => console.log(value),
      validationFunc: (value) => console.log(value, 'world', value === 'world') || value === 'world',
      errorMsg: 'Error. not world',
    },
  ];
  return (
    <BrowserRouter>
      <NavBar />
      <Form
        inputs={inputs}
        onSubmit={(data, e) => {
          console.log(data);
        }}
      />
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
