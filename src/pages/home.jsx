import React, { Fragment } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import BottomMenu from './components/bottomMenu/index';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <Fragment>
            <div>TOP 1</div>
            <div>TOP 2</div>
            <div>TOP 3</div>
        </Fragment>;
    }
}
