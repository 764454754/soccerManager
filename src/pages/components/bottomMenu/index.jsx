import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { imgSrc } from '~/imgSrc';

class BottomMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return <Fragment>
            <div className='bottomBar'>
                <div className='bottom-menu'>
                    <div className='bottom-menu-item'>
                        <div className='bottom-menu-btn'>
                            <Link to='/'>
                                <img src={imgSrc['首页']} />
                            </Link>
                        </div>
                        <span>主页</span>
                    </div>
                    <div className='bottom-menu-item'>
                        <div className='bottom-menu-btn'>
                            <Link to='/test'>
                                <img src={imgSrc['阵容管理']} />
                            </Link>
                        </div>
                        <span>阵容管理</span>
                    </div>
                    <div className='bottom-menu-item'>
                        <div className='bottom-menu-btn'>
                            <Link to='/test'>
                                <img src={imgSrc['球员管理']} />
                            </Link>
                        </div>
                        <span>球员管理</span>
                    </div>
                    <div className='bottom-menu-item'>
                        <div className='bottom-menu-btn'>
                            <Link to='/test'>
                                <img src={imgSrc['转会市场']} />
                            </Link>
                        </div>
                        <span>转会市场</span>
                    </div>
                </div>
            </div>
        </Fragment>;
    }
}

export default BottomMenu;
