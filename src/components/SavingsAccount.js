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
                <p className={"card-text"}>Balance(TSFA): ${this.props.tsfaAccountBalance}</p>
                <p className={"card-text"}>Contribution room: ${this.props.tsfaContributionRoom}</p>
                <a href="#" className={"card-link"} style={{paddingRight: '10em'}}>Deposit</a>
                <a href="#" className={"card-link"}>Withdraw</a>
            </div>
            </div>
             );
    }
}

SavingsAccount.propTypes = {
    savingsAccountBalance: PropTypes.number.isRequired,
    tsfaAccountBalance: PropTypes.number.isRequired,
    tsfaContributionRoom: PropTypes.number.isRequired,
};

export default SavingsAccount;