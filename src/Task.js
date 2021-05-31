const Task = ({task, toggleTask, deleteTask}) => {
    return (
        <div key={task.id} className="item-task">
            <div 
                className={task.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(task.id)}
            >
                {task.textTask}
            </div>
            <div className="item-delete" onClick={() => deleteTask(task.id)}>
                X
            </div>
        </div>
    );
}

export default Task;