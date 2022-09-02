import { Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import Students from './Pages/Students';
import DetailStudent from './Pages/DetailStudent';
import ForgotPassword from './Pages/ForgotPassword';
import FormGrade from './Pages/FormGrade';
import FormTeacher from './Pages/FormTeacher';
import Teacher from './Pages/Teacher';
import Kegiatan from './Pages/Kegiatan';
import FormKegiatan from './Pages/FormKegiatan';
import Parent from './Pages/Parent';
import FormParent from './Pages/FormParent';
import Navbar from './Components/Navbar';
const Main = () => {
return (         
  <Routes>
    <Route path='/' element={<SignIn/>} />
    <Route path='/forgot-password' element={<ForgotPassword/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/murid' element={<Students/>} />
    <Route path='/murid/detail' element={<DetailStudent/>} />
    <Route path='/add-nilai' element={<FormGrade/>} />
    <Route path='/guru' element={<Teacher/>} />
    <Route path='/add-guru' element={<FormTeacher/>} />
    <Route path='/kegiatan' element={<Kegiatan/>} />
    <Route path='/add-kegiatan' element={<FormKegiatan/>} />
    <Route path='/orang-tua' element={<Parent/>} />
    <Route path='/add-orang-tua' element={<FormParent/>} />
    <Route path='/navbar' element={<Navbar/>} />
  </Routes>
);
}
export default Main;