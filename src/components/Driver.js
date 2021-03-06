import React from 'react';

import MyComponent from "./MyComponent";
import Sidebar from './Sidebar';

class Driver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkingAccountBalance: 100.0,
            currentNetWorth: 100.0,
            currentMonth: 0, // months go from 0-95 for gameplay between 10 and 18 years of age (8yr * 12mo = 96mo)
            savingsInterestRate: 0.005,
            tfsaInterestRate: 0.008,
            // add more values as needed
        }
    }

    render() {
        return (
            <div className={'Driver', "container"}>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                        <Sidebar 
                        checkingAccountBalance={this.state.checkingAccountBalance}
                        currentNetWorth={this.state.currentNetWorth}
                        currentMonth={this.state.currentMonth}
                        />
                        </div>

                        <div className="col-sm">
                        <p>Placeholder :)</p>
                        </div>

                        <div className="col-sm">
                        <MyComponent/>
                        </div>
                  
                    </div>
                </div>
                
                {/*all components go in here*/}
                
            </div>
        )
    }
}

export default Driver;
