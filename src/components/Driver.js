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
            savingsAccountBalance: 0,
            savingsInterestRate: 0.005,
            tfsaAccountBalance: 0,
            tfsaInterestRate: 0.008,
            tfsaContributionRoom: 8000,
            // add more values as needed
        };
    }

    // Add money from checking acc into savings
    addBalanceSavings(amount) {
        if (amount > this.state.checkingAccountBalance) {
            console.log("Not enough money for this transaction!"); // todo: visually display this
            return;
        }
        this.setState({
            checkingAccountBalance: this.state.checkingAccountBalance - amount,
            savingsAccountBalance: this.state.savingsAccountBalance + amount
        });
    }

    // Add money from savings acc into checking
    subtractBalanceSavings(amount) {
        if (amount > this.state.savingsAccountBalance) {
            console.log("Not enough money for this transaction!"); // todo: visually display this
            return;
        }
        this.setState({
            checkingAccountBalance: this.state.checkingAccountBalance + amount,
            savingsAccountBalance: this.state.savingsAccountBalance - amount
        });
    }

    // Add money from checking acc into TFSA
    addBalanceTFSA(amount) {
        if (amount > this.state.checkingAccountBalance) {
            console.log("Not enough money for this transaction!"); // todo: visually display this
            return;
        }
        if (amount + this.state.tfsaAccountBalance > this.state.tfsaContributionRoom) {
            console.log("Not enough contribution room for this transaction!");
            return;
        }

        this.setState({
            checkingAccountBalance: this.state.checkingAccountBalance - amount,
            tfsaAccountBalance: this.state.tfsaAccountBalance + amount
        });
    }

    // Add money from TFSA acc into checking
    subtractBalanceTFSA(amount) {
        if (amount > this.state.tfsaAccountBalance) {
            console.log("Not enough money for this transaction!") // todo: visually display this
            return;
        }
        this.setState({
            checkingAccountBalance: this.state.checkingAccountBalance + amount,
            tfsaAccountBalance: this.state.tfsaAccountBalance - amount
        });
    }

    // Add interest to cash accounts at the end of the month
    monthlyCompoundInterestCashAccounts() {
        let savingsInterest = (this.state.savingsAccountBalance * this.state.savingsAccountBalance) / 12;
        let tfsaInterest = (this.state.tfsaAccountBalance * this.state.tfsaInterestRate) / 12;
        this.setState({
            savingsAccountBalance: this.state.savingsAccountBalance + savingsInterest,
            tfsaAccountBalance: this.state.tfsaAccountBalance + tfsaInterest
        });
    }

    nextMonth = () => {

    }

    render() {
        return (
            <div className={'Driver'} style={{display: "contents"}}>
                <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                            <Sidebar 
                            checkingAccountBalance={this.state.checkingAccountBalance}
                            currentNetWorth={this.state.currentNetWorth}
                            currentMonth={this.state.currentMonth}
                            nextMonth={this.nextMonth}
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
                </div>
            </div>
        )
    }
}

export default Driver;
