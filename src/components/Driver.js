import React from 'react';

import MyComponent from "./MyComponent";
import Accounts from "./Accounts";
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
            <div className={'Driver'}>
                {/*all components go in here*/}
                <p>Placeholder :)</p>
                <MyComponent/>
                <Accounts/>
            </div>
        )
    }
}

export default Driver;
