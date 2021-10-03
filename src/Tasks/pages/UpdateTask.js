//fn component in most cases
//TODO look up when to use class component

import { useParams } from 'react-router-dom'

import TwoUpdateTaskForm from '../components/TwoUpdateTaskForm';

const DEFAULT_DATA = {
    title: "Some Title",
    description: "",
    link: "",
    priority:"2",
    timeToFinish: 60,
    creator: "u3",
    assignedTo: "u2"
}


const DUMMY_TASKS = [
    {
        id: "1",
        title: "Learning Singleton Pattern",
        description: "I would like to learn singleton in JS language because it's important for my job",
        link: "https://link.com",
        proiority: 3,
        timeToFinish: 120,
        status: "active",
        creator: "u1",
        assignedTo:"u1"
    },
    {
        id: "2",
        title: "Resouce 2 Description",
        description: "I would like to learn singleton in JS language because it's important for my job",
        link: "https://link.com",
        proiority: 2,
        timeToFinish: 60,
        status: "inactive",
        creator: "u2",
        assignedTo:"u1"
    },
    {
        id: "3",
        title: "Resource 3 Description",
        description: "I would like to learn singleton in JS language because it's important for my job",
        link: "https://link.com",
        proiority: 1,
        timeToFinish: 30,
        status: "inactive",
        creator: "u2",
        assignedTo:"u2"
    }
]


const options = [
    { label: "Brad", value: "Brad" },
    { label: "Chad", value: "mango" },
    { label: "Drew", value: "strawberry" },
  ];

// const options = [
//     { label: "Grapes 🍇", value: "grapes" },
//     { label: "Mango 🥭", value: "mango" },
//     { label: "Strawberry 🍓", value: "strawberry", disabled: true },
//   ];

  


    // const submitForm = () => {
    //     //request POST , vs absolute path
    //     fetch("/api/resources"), {
                                //^
    //         body: JSON.stringify(form),
    //         headers: {"Content-Type": "application/json"},
    //         method: "POST"
        
    //     }
    // }
    const UpdateTask = () => {

  
    const taskId = useParams().taskId;
    const identifiedTask = DUMMY_TASKS.find( task => task.id === taskId);
    if(!identifiedTask) {
        return (<div className="center">
            <h2 >Could not find task</h2>
            </div>
        )
    }
        return (<div>
            <h1>Update Task</h1>
            <TwoUpdateTaskForm task={identifiedTask}/>
            </div>)
    
   
}
   

export default UpdateTask;