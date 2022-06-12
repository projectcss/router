import {BrowserRouter, Route, Routes, Link, useLocation, useRoutes} from './components/router/react-router-dom';
import Home from './components/home';
import List from './components/list';
import Login from './components/login';
import Detail from './components/list/detail';
import Singer from './components/list/singer';
import Music from './components/list/music';
import Comment from './components/list/comment';
import Create from './components/list/create';


import './App.css';

const Config = [
  {
    element: <Home/>,
    path: '/home'
  },
  {
    element: <Login/>,
    path: '/login'
  },
  {
    element: <List/>,
    path: '/list',
    children: [
      {
        element: <Detail/>,
        path: '/list/detail',
        children:[
          {
            element: <Singer/>,
            path: '/list/detail/:singerId'
          },
          {
            element: <Music/>,
            path: '/list/detail/music'
          },
          {
            element: <Comment/>,
            path: '/list/detail/comment'
          }
        ]
      },
      {
        element: <Create/>,
        path: '/list/create'
      }
    ]
  }
]

const Index = () => {
  const element = useRoutes(Config);
      return <div>{element}</div>
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Index/>
      </BrowserRouter>
    </div>
  );
}

export default App;
