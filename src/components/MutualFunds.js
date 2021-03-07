import react, { Component } from 'react';
import MFStocksCards from './MFStocksCards';

class MutualFunds extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return(
            <div>
                <h1>Mutual Funds</h1>
                <MFStocksCards />
            </div>
        );
    }
}

export default MutualFunds;