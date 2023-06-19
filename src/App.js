import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Mainpage from './Components/Layout';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='contact' element={<Contact />} />
        {/* <Route path='/anotherpage' element={<NextPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
