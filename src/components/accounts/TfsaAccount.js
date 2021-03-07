import { Component } from 'react';
import PropTypes from "prop-types";

class TfsaAccount extends Component{
     constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className={"card"}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>Tax-Free Savings</h5>
                <p className={"card-text"}>Balance: ${this.props.tfsaAccountBalance}</p>
                <p className={"card-text"}>Contribution room: ${this.props.tfsaContributionRoom}</p>
                <a href="#" className={"card-link"} style={{paddingRight: '10em'}}>Deposit</a>
                <a href="#" className={"card-link"}>Withdraw</a>
            </div>
            </div>
             );
    }
}

TfsaAccount.propTypes = {
    tfsaAccountBalance: PropTypes.number.isRequired,
    tfsaContributionRoom: PropTypes.number.isRequired,
};

export default TfsaAccount;