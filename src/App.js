import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';
import './App.css';
import TaskForm from './components/TaskForm';

const App = () => (
    <Provider store={store}>
        <div>
            <TaskForm />
            <TaskList />
        </div>
    </Provider>
);

export default App;
