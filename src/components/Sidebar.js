import react, { Component } from 'react';
import placeholderImg from '../assets/hasComfy.png';

class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    nextMonth = () => {
        
    }

    render() {
        return(
            <div className="sidebar">
                <div>
                    <h1 className="logo-header">App X</h1>
                </div>
                
                <div className="sidebar-img">
                    <img src={placeholderImg}/>
                </div>

                <div className="pocket-section">
                    <h2 className="sidebar-money">Pocket Money: ${this.props.checkingAccountBalance}</h2>
                </div>

                <div>
                    <h2 className="sidebar-money">Net Worth: ${this.props.currentNetWorth}</h2>
                </div>

                <div className="next-month">
                    <button type="button" onClick={this.nextMonth} className="btn btn-secondary">Next Month</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;