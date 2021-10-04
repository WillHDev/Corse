
// import './App.css';
import React from 'react'

import 'bulma/css/bulma.min.css';
//import './styles/globals.css'
import Layout from '../../Shared/components/Layout'
import ResourceHighlight from '../../Shared/components/ResourceHighlight'
import ResourceList from '../components/ResourceList'
import NewsLetter from '../../Shared/components/NewsLetter'
import Footer from '../../Shared/components/Footer'



//const data2 = [
//   {
//       id: "1",
//       title: "Learning Singleton Pattern",
//       description: "I would like to learn singleton in JS language because it's important for my job",
//       link: "https://link.com",
//       proiority: 3,
//       timeToFinish: 120,
//     status: "active"
//   },
//   {
//       id: "2",
//       title: "Resouce 2 Description",
//       description: "I would like to learn singleton in JS language because it's important for my job",
//       link: "https://link.com",
//       proiority: 2,
//       timeToFinish: 60,
//     status: "inactive"
//   }
// ];



class TasksDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: []};
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch('http://localhost:8080/api/resources');
    const data = await response.json();
 

    this.setState({ tasks: data });
    console.log(this.state);
  }
  
//
  render() {
    const { tasks } = this.state;
    return (
      <div >
       
     
      <>
        <Layout>
         <ResourceHighlight 
            resources={tasks.slice(2)}
       />   
         <NewsLetter /> 
        <ResourceList 
            tasks={tasks.slice(0,2)}
        /> 
        <Footer />
        </Layout>
     </>
      
      
    </div>
    );
  }
}





export default TasksDisplay;



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