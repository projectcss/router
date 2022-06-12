import React from 'react';
import {observer} from 'mobx-react';
import './App.css';
import store from './components/mobx/store'

const App = observer(() =>{
  return (
    <div>
        <p>{store.count}</p>
        <button onClick={() => store.increase()}>increase</button>
        <button onClick={() => store.reset()}>reset</button>
    </div>
  );
})

export default App;

