import { Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import Students from './Pages/Students';
import DetailStudent from './Pages/DetailStudent';
import ForgotPassword from './Pages/ForgotPassword';

const Main = () => {
return (         
  <Routes>
    <Route path='/' element={<SignIn/>} />
    <Route path='/students' element={<Students/>} />
    <Route path='/students/detail' element={<DetailStudent/>} />
  </Routes>
);
}
export default Main;