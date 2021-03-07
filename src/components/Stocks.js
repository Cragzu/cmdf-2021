import react, { Component } from 'react';
import MFStocksCards from './MFStocksCards';

class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            val: 0,
            percentage: 0,
            units: 0
        }
    }

    generateStocks = () => {
        switch (this.props.numStock) {
            case 0:
                this.setState({
                    title: this.props.listOfStocks[0],
                    val: this.props.stockVal[0],
                    percentage: this.props.percentage[0],
                    units: this.props.listOfUnits[0]
                })
                break;
            case 1:
                this.setState({
                    title: this.props.listOfStocks[1],
                    val: this.props.stockVal[1],
                    percentage: this.props.percentage[1],
                    units: this.props.listOfUnits[1]
                })
                break;
            case 2:
                this.setState({
                    title: this.props.listOfStocks[2],
                    val: this.props.stockVal[2],
                    percentage: this.props.percentage[2],
                    units: this.props.listOfUnits[2]
                })
                break;
        }
    }

    componentDidMount = () => {
        this.generateStocks();
    } 


    render() {
        return(
            <div style={{backgroundColor: "gray"}}>
                <h1>Stocks</h1>
                <MFStocksCards action={"Sell"} 
                gainLoss={null} 
                title={this.state.title} 
                stockVal={this.state.val} 
                percentage={this.state.percentage}
                buyStocks={this.props.buyStocks}
                sellStocks={this.props.sellStocks}
                unitOfStocks={this.props.unitOfStocks}
                unit={this.state.units}
                numStock={this.props.numStock}
                />
            </div>
        );
    }
}

export default Stocks;