 
export function makeChartData (data){
    let chartHolder = {};
    for(let key in data){
          console.log('data',data[key]);
          chartHolder['"'+data[key]['date']+'"']=data[key]['portfolio_value_till_date']
    }
    return chartHolder;
 
}
 


export function convertIndianCurrency(currency) {
    let money = currency.toLocaleString("en-IN",{style:"currency",currency:"INR"});
    return money.substring(0, money.indexOf('.'));
}
