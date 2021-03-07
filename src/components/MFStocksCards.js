import react, { Component } from 'react';
import stats from "../assets/TradingView.jpg"

class MFStocksCards extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title" style={{color: "black"}}>Title</h3>
                    <div>
                        <p className="percentage-block" style={{color: "black"}}>N%</p>
                        <p className="percentage-block" style={{color: "black"}}>N%</p>
                    </div>

                    <div className="image-block">
                        <img src={stats} className="stocks-img"/>
                    </div>

                    <p style={{color: "black"}} className="text-units">Units: units</p>

                    <p style={{color: "black"}} className="text-units">Gain/Loss: units</p>

                    <button type="button" className="btn btn-secondary card-button">Redeem</button>
                    <button type="button" className="btn btn-secondary card-button">Buy</button>
                </div>
            </div>
        );
    }
}

export default MFStocksCards;