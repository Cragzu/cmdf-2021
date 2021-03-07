import { Component } from 'react';
import PropTypes from "prop-types";

class SavingsAccount extends Component{
     constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className={"card"}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>Everyday Savings</h5>
                <p className={"card-text"}>Balance: ${this.props.savingsAccountBalance}</p>
                <a href="#" className={"card-link"} style={{paddingRight: '10em'}}>Deposit</a>
                <a href="#" className={"card-link"}>Withdraw</a>
            </div>
            </div>
             );
    }
}

SavingsAccount.propTypes = {
    savingsAccountBalance: PropTypes.number.isRequired,
};

export default SavingsAccount;