import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import User from './components/User';

const App = () => {
  return (
    <div>
      <div>
        <NavLink to="/users">users</NavLink>
        <NavLink to="/todos">todos</NavLink>
      </div>
      <Route path="/users" exact component={UsersPage} />
      <Route path="/users/:id" exact component={User} />
      <Route path="/todos" exact component={TodosPage} />
    </div>
  );
};

export default App;
