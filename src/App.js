import React, { useState, useCallback } from 'react';
import {
  BrowserRouter,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

import './index.css';
import NewTask from './Tasks/pages/NewTask';
import UserDashboard from './User/pages/UserDashboard';
import UpdateTask from './Tasks/pages/UpdateTask';
import Auth from './User/pages/Auth';
import TasksDisplay from './Tasks/pages/TasksDisplay';
import { AuthContext } from './Shared/context/auth-context.js';


const App = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  //wrap with useCallBack to avoid infinite loops
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
         <Route exact path="/">
            <TasksDisplay />
        </Route>
        <Route exact path="/:userId/tasks">
            <UserDashboard />
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
     <Redirect to="/"/>
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/">
          <TasksDisplay />
        </Route>
         <Route exact path="/:userId/tasks">
            <UserDashboard />
         </Route>
       <Route exact path="/auth">
         <Auth />
      </Route>
      <Redirect to="/auth"/>
   </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider  value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
  <BrowserRouter>
      <Switch>{routes}</Switch>
    </BrowserRouter>
    </AuthContext.Provider>
    );
  };




export default App;



// async function fetchResourcesJSON() {
//   const response = await fetch("http://localhost:8080/api/resources");
//   const resources = await response.json();
//   //console.log(resources)
//   return resources;
// }

// function App( ) {
//   const [, setResources, resources] = useState([]);

//   useEffect(() => {
//     // You need to restrict it at some point
//     // This is just dummy code and should be replaced by actual
//       const data = fetchResourcesJSON();
//       return data;
//   }, []);

 
//   //console.log(resources);

  
  
//   return (
   
//     <div className="App">
       
//       <header className="App-header">
//       <>
//         <Layout>
//          <ResourceHighlight 
//           resources={resources}
//          />   
//          {/* <NewsLetter /> 
//          <ResourceList 
         
//         />  */}
//         <Footer />
//         </Layout>
//      </>
//       </header>
      
//     </div>
   
//   );
// }





// // export async function getServerSideProps() {
// //   //write async in front of the function where you would
// //   //like to resolve this data

// //   const resData = await fetch("http://localhost:8080/api/resources");
// //   //********* */
  
// //   const data = await resData.json();
// //   //only appears in terminal
 
// //      return {  props: {
// //        resources: data
// //      }
// //     }
// // }

// export default App;
// // resources={resources.slice(2)}
// // resources={resources.slice(0,2)}