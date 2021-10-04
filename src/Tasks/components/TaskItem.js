const TaskItem = ( task ) => {
    return(
<div  className="column is-5 is-offset-1">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">{task.createdAt}</h2>
                    <h1 className="title has-text-black is-3">{task.title}</h1>
                    <p className="has-text-dark">{task.description}</p>
                  </div>
                </div>
                )

}

export default TaskItem;