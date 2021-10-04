import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewTask from './Tasks/pages/NewTask';
//import UserTasks from './User/components/UserTasks';
import UserDashboard from './User/pages/UserDashboard';
import UpdateTask from './Tasks/pages/UpdateTask';
import Auth from './User/pages/Auth';

ReactDOM.render(
  <BrowserRouter>

<Switch>
    <Route exact path="/">
       <App />
    </Route>
     <Route exact path="/:userId/tasks">
      <UserDashboard />
     </Route>
     <Route exact path="/tasks/new">
      <NewTask />
     </Route>
     <Route exact path="/tasks/:taskId">
      <UpdateTask />
     </Route>
     <Route exact path="/auth">
      <Auth />
     </Route>
    {/* <Route exact path="/">
        <Users />
      </Route> */}
        </Switch>
  
    </BrowserRouter>
     ,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

