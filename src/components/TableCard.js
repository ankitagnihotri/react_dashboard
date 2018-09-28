import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  getTableData
} from '../actions';

let id = 0;
function createData(BROKERAGE, BROKER_TRADING_ID, BUY_QTY, BUY_RATE, CURRENT_RATE, STATUS, SYMBOL) {
  id += 1;
  return { id, BROKERAGE, BROKER_TRADING_ID, BUY_QTY, BUY_RATE, CURRENT_RATE, STATUS, SYMBOL };
}

class TableCard extends PureComponent{

  componentWillMount =()=>{
    this.props.getTableData()
  } 

  render(){
    console.log(this.props.table_data, 'Table Page');
    
 const rows = [
  createData(8.13, "A102224", 4,1271.00, 965.25, "OPEN", "Siemens"),
  createData(41.36, "A102224", 44, 344.50, 302.95, "OPEN", "KEC International"),
  createData(12.25, "A102224", 58, 132.00, 67.00, "OPEN", "NBCC"),
  createData(5.95, "A102224", 3, 1240.00, 838.40, "OPEN", "Mahanagar Gas"),
  createData(15.88, "A102224", 9, 1102.50, 874.55, "OPEN", "Ratnamani Metals & Tubes"),
  
];
     return(
       <div>
         <Card className="CustomNoShadowComponent" style={style1}>
              <CardHeader title={<div className="customCardHeader">
              <h4>{this.props.heading}</h4></div>}/>
              <Paper style={style2}>
                <Table className="table" style={{minWidth: 900}} >
                 <TableHead>
                    <TableRow>
                      <TableCell numeric style={style3}>BROKERAGE</TableCell>
                      <TableCell numeric style={style3}>BROKER TRADING ID</TableCell>
                      <TableCell numeric style={style3}>BUY QTY</TableCell>
                      <TableCell numeric style={style3}>BUY RATE</TableCell>
                      <TableCell numeric style={style3}>CURRENT RATE</TableCell>
                      <TableCell numeric style={style3}>STATUS</TableCell>
                      <TableCell numeric style={style3}>SYMBOL</TableCell>
                    </TableRow>
                 </TableHead>

                <TableBody>
                  {rows.map(row => {
                    return (
                      <TableRow key={row.id}>
                      <TableCell numeric style={style4}>{row.BROKERAGE}</TableCell>
                      <TableCell numeric style={style4}>{row.BROKER_TRADING_ID}</TableCell>
                      <TableCell numeric style={style4}>{row.BUY_QTY}</TableCell>
                      <TableCell numeric style={style4}>{row.BUY_RATE}</TableCell>
                      <TableCell numeric style={style4}>{row.CURRENT_RATE}</TableCell>
                      <TableCell numeric style={style4}>{row.STATUS}</TableCell>
                      <TableCell numeric style={style4}>{row.SYMBOL}</TableCell>
                     </TableRow>
                    );
                  })}
                  </TableBody>
                </Table>
              </Paper>

            </Card>
       </div>
     )
  }
}

let style1 = {
  marginTop: 20,
  marginBottom: 2,
  marginLeft: 175,
  marginRight: 25,
  height: 500,
}

let style2 = {
   // overflowX: 'auto',
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "#E6E6FA",
}

let style3 = {
  fontSize: '1em', 
  fontStyle: 'bold',
  textAlign: 'center',
}

let style4 = {
  fontSize: '0.8em',
  textAlign: 'center',
}


const mapToStateProps = ({main}) => {
  const {
      table_data
  } = main;
  return {
      table_data
  };
};
export default connect(mapToStateProps, {
  getTableData
})(TableCard);


