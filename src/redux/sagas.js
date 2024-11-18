import { call, put, all, takeEvery } from 'redux-saga/effects';
import { fetchTasksSuccess, fetchTasksFailure } from './actions';

function fetchTasksApi() {
        return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then((response) =>
        response.json()
    );
}

function* fetchTasks() {
    try {
        const tasks = yield call(fetchTasksApi);
        yield put(fetchTasksSuccess(tasks));
    } catch (error) {
        yield put(fetchTasksFailure(error.message));
    }
}

function* watchFetchTasks() {
    yield takeEvery('FETCH_TASKS_REQUEST', fetchTasks);
}

export default function* rootSaga() {
    yield all([watchFetchTasks()]);
}
