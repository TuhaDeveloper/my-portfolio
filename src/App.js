import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Mainpage from './Components/Layout';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import Projects from './Components/Projects';
import ParentAbout from './Components/Layout/parentAbout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='/' element={<ParentAbout />}>
          <Route path='about' element={<About />} />
        </Route>

        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
