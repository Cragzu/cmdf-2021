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
                    <h3 className="card-title" style={{color: "black"}}>{this.props.title ? this.props.title : "Title"}</h3>
                    <div>
                        <p className="percentage-block" style={{color: "black"}}>${this.props.stockVal ? this.props.stockVal : 125.32}</p>
                        <p className="percentage-block" style={{color: "black"}}>{this.props.percentage ? this.props.percentage : 67 }%</p>
                    </div>

                    <div className="image-block">
                        
                    </div>

                    <p style={{color: "black"}} className="text-units">Units: {this.props.unit ? this.props.unit : 0}</p>

                    <p style={{color: "black"}} className="text-units">{this.props.gainLoss ?"Gain/Loss: " + this.props.gainLoss : null}</p>

                    <button 
                        type="button" 
                        className="btn btn-secondary card-button"
                        onClick={() => {
                            this.props.sellStocks(this.props.stockVal, this.props.numStock);
                        }}
                        >{this.props.action}</button>
                    
                    <button 
                    type="button" 
                    className="btn btn-secondary card-button"
                    onClick={() => {
                        this.props.buyStocks(this.props.stockVal, this.props.numStock);
                    }}
                    >Buy</button>
                </div>
            </div>
        );
    }
}

export default MFStocksCards;