import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignOut';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Header from './components/Header';

export default function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}
