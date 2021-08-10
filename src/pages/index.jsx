import React, { Fragment, lazy, Suspense } from 'react';
import './index.css';
import { myRoutes } from '~/router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BottomMenu from './components/bottomMenu/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(myRoutes);
        console.log(lazy(() => import('./components/some/index')));

        return <Fragment>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {
                            myRoutes.map(item => <Route key={item.path} path={item.path} exact={item.exact} component={item.component} />)
                        }
                    </Switch>
                    <BottomMenu />
                </Suspense>
            </Router>
        </Fragment>;
    }
}

export default App;
