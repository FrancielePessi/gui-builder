import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Cards from './Pages/Cards';
import Main from './Pages/Main';
import LayoutBase from './Pages/LayoutBase';
import TodoList from './Pages/TodoList';

export default () => (
    <HashRouter>
        <Switch>
            <LayoutBase>
                <Route exact path="/" component={Main} />
                {/* <Route exact path="/signup" component={Signup} /> */}
                <Route exact path="/cards" component={Cards} />
                {/* <Route exact path="/maps" component={Maps} /> */}
                <Route exact path="/todo" component={TodoList} />
                {/* <Route exact path="/maps" component={Maps} /> */}
            </LayoutBase>

        </Switch>
    </HashRouter>
);
