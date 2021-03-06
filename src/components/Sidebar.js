import react, { Component } from 'react';

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
            <div className="sidebar col-md-3">
                <div>
                    <h1 className="logo-header">App X</h1>
                </div>
                
                <div>
                    <image></image>
                </div>

                <div>
                    <h2 className="sidebar-money">Pocket Money: 100.0</h2>
                </div>

                <div>
                    <h2 className="sidebar-money">Net Worth: 100.0</h2>
                </div>

                <div>
                    <button onClick={this.nextMonth} className="next-month">Next Month</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;