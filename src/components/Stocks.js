import react, { Component } from 'react';
import MFStocksCards from './MFStocksCards';

class Stocks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Stocks</h1>
                <MFStocksCards />
            </div>
        );
    }
}

export default Stocks;