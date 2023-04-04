import React,{useState} from 'react';
import { BrowserRouter , Routes,Route} from  "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Info from './components/Info';

import Detail from './components/Detail';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  return (
    
       <Provider store={store}>
       
        <div className='container'>
              <Routes>
                         <Route path='/'  element={<Detail/> } />
                            <Route path='/Info/:id' element={<Info post={selectedPost} />} />

              </Routes>
              </div>
             
              </Provider>
    
  );
}

export default App;
