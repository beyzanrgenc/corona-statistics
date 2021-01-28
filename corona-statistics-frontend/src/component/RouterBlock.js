import React, { Component } from 'react';
import PostNews from './PostNews';
import Graphic from './Graphic';
import { Switch, Route } from 'react-router-dom';



class RouterBlock extends Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/postNews" exact component={PostNews} />
                    <Route path="/graphics" exact component={Graphic} />
                    <Route path="/" exact component={PostNews} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default RouterBlock;
