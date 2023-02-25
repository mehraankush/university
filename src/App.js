import { BrowserRouter as Router, Route , useNavigate  ,Routes } from 'react-router-dom';


import './App.css';
import Home from './component/Home/Home'
import Paper from './component/Paper/Paper'

function App() {
  return (
    <div className="App">
      <Router>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/Paper' element={<Paper/>}/>
               {/* <Route path='/symtums/Card' element={<Card/>}/> */}
           </Routes>
        </Router>
    </div>
  );
}

export default App;
