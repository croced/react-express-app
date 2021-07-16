import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history'
import { Provider } from 'react-redux';
import { store } from '../store'; 

import Dashboard from './Dashboard';
import Navigation from './Navigation';
import TaskDetail from './TaskDetail';

const Main = () => {
    return (
        <Router history={history}>
            <Provider store={store}>
                <div>
                    <Navigation />
                    <Route
                        exact
                        path="/dashboard"   
                        render={() => ( <Dashboard /> )}
                    />
                    <Route
                        exact
                        path="/task/:id"
                        render={(match) => ( <TaskDetail match={match.match}/> )}
                    />
                </div>
            </Provider>
        </Router>    
    );
};

export default Main; 