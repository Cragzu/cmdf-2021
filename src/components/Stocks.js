import react, { Component } from 'react';
import MFStocksCards from './MFStocksCards';

class Stocks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{backgroundColor: "gray"}}>
                <h1>Stocks</h1>
                <MFStocksCards action={"Sell"} gainLoss={null}/>
            </div>
        );
    }
}

export default Stocks;