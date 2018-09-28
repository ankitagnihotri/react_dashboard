import React, {PureComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends PureComponent {

    render() {
        return (
            <div className="fluid-container" style={{background:"#E6E6FA"}}>
            <AppBar position="static" color="default">
             <Toolbar style={style1}>{this.props.heading}</Toolbar>
            </AppBar>
            <h4 style={style2}>Investments</h4>
            </div>
        );
    }
}

let style1 = {
    marginLeft:150, 
    fontSize:30, 
    fontStyle:'bold', 
    color: '#E29E16', 
    fontFamily: 'sans-sarif'
}

let style2 = {
    marginLeft:175, 
    marginTop: 20
}


export default Header;