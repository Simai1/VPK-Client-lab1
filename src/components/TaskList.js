import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTasksRequest} from "../redux/actions";

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state);

    const handleToggleComplete = (taskId) => {
        dispatch({ type: 'TOGGLE_TASK', payload: taskId });
    };

    useEffect(() => {
        dispatch(fetchTasksRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleComplete(task.id)}
                    />
                    {task.title}
                </li>
            ))}
        </ul>
    );
};
export default TaskList;
