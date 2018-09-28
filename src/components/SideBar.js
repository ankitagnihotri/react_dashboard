import React, {PureComponent} from 'react';
import logo from './../logo.png';
import Drawer from '@material-ui/core/Drawer';

class SideBar extends PureComponent {

    render() {
        return (
            <Drawer variant="permanent">
              <img src={logo} className="App-logo" alt="logo" style={{height:60,width:60,padding:10}} />
              <h4 style={{padding:10,marginRight:50,color:"#E29E16"}}>Investments</h4>
          </Drawer>
        );
    }
}

export default SideBar;