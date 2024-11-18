export const fetchTasksRequest = () => ({ type: 'FETCH_TASKS_REQUEST' });
export const fetchTasksSuccess = (tasks) => ({ type: 'FETCH_TASKS_SUCCESS', payload: tasks });
export const fetchTasksFailure = (error) => ({ type: 'FETCH_TASKS_FAILURE', payload: error });
export const toggleTask = (taskId) => ({ type: 'TOGGLE_TASK', payload: taskId });
