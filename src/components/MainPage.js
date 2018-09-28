import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {connect} from 'react-redux';
import { LineChart } from 'react-chartkick';
import TableCard from './TableCard';
import SideBar from './SideBar';
import Header from './Header';
import {
  summaryGraphData,
  getCapitalData
} from '../actions';

import{
   makeChartData,
   convertIndianCurrency
}from '../utils'


class MainPage extends Component {
  

  componentWillMount =()=>{
    this.props.summaryGraphData()
    this.props.getCapitalData()
  } 



  render() {
    console.log(this.props.graph_data, 'Main Page');
    console.log(this.props.capital, 'Main Page');

    if(this.props.graph_data.length){
      let datum=makeChartData(this.props.graph_data);
      console.log(datum, 'new Chart Data')
      
      return(
        <div className="fluid-container" style={{background:"#E6E6FA"}}>
              <Header heading= {'Minance'}></Header>
              <SideBar />  
  
            <div className="row" style={style1}>
              <div className="col-sm-4">
                <Card style={style2}>
                 <p variant="title" style={style3}>Capital</p>   
                 <p style={style4}>{(this.props.capital==='isLoading')?('Loading..'):(convertIndianCurrency(this.props.capital.products.net.capital))}</p>
                </Card>
              </div>
  
              <div className="col-sm-4">
               <Card style={style2}>
                <p variant="title" style={style3}>Profits</p>
                <p style={style4}>{(this.props.capital==='isLoading')?('Loading..'):(convertIndianCurrency(this.props.capital.products.net.net_booked_profit))}</p>
               </Card>
              </div>
  
              <div className="col-sm-4" >
                <Card style={style2}>
                 <p variant="title" style={style3}>Portfolio Value</p>
                 <p style={style4}>{(this.props.capital==='isLoading')?('Loading..'):(convertIndianCurrency(this.props.capital.products.net.net_portfolio_value))}</p>
                </Card>
              </div>
  
           </div>
          
  
              <Card className="CustomNoShadowComponent" style={style5}>
                <CardHeader title={<div className="customCardHeader">Graph

                  <LineChart library={{backgroundColor: "#E6E6FA"}} messages={{empty: "Data is not available!!"}}
                   refresh={60} xtitle="TimeStamp" ytitle="Gross Realised PNL"
                   data={datum}/>

                </div>}/>
              </Card>
  
              <TableCard heading={'Equities'} ></TableCard>
        </div>
      );
    }else{
      return(
        <div>
          <p>Loading</p>
        </div>
      )
    }

  }
}

let style1 = {
  marginTop: 0, 
  marginLeft: 150, 
  marginRight: 10, 
  padding: 10
}

let style2 = {
  fontSize: 18,
  textAlign: "center",
  height:'10%', 
  minWidth:'25%'
}

let style3 = {
  fontSize: 20, 
  textAlign: "left", 
  padding: 10
}

let style4 = {
  fontSize: '1.2em', 
  textAlign: "left", 
  padding: 10,
  color: "#0d21bc"
}

let style5 = {
  marginTop:20,
  marginBottom:2,
  marginLeft:175,
  marginRight:25,
  height:400
}

const mapToStateProps = ({main}) => {
  const {
      graph_data,
      isLoading,
      capital
  } = main;
  return {
      graph_data,
      isLoading,
      capital
  };
};
export default connect(mapToStateProps, {
  summaryGraphData,
  getCapitalData
})(MainPage);
