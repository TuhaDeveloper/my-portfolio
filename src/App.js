import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Mainpage from './Components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />}>
          <Route index element={<Home />} />
        </Route>
        {/* <Route path='/anotherpage' element={<NextPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
