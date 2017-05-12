import React from 'react';
import { Router, Scene, ActionConst} from 'react-native-router-flux';
/**
 * Containers
 */

import Home from './containers/Home';
import Login from './containers/Login';
import AttractionDetail from './containers/AttractionDetail';

const routes = () => {
    return  <Router>
         <Scene key='root' >
            <Scene key='home' component={Home} initial={true} title='Home' direction='vertical'/>
            <Scene key='login' component={Login} title='Login' hideNavBar={true} direction='vertical'/>
            <Scene key='attractionDetail' component={AttractionDetail} title='AttractionDetail' direction='vertical'/>
         </Scene>
        </Router>
}

export default routes;
