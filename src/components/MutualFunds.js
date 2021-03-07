import react, { Component } from 'react';
import MFStocksCards from './MFStocksCards';

class MutualFunds extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return(
            <div style={{backgroundColor: "gray"}}>
                <h1>Mutual Funds</h1>
                <MFStocksCards action={"Redeem"} gainLoss={"+54.32"}/>
            </div>
        );
    }
}

export default MutualFunds;