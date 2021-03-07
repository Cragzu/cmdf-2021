import {Component} from 'react';
import PropTypes from "prop-types";

class CashAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: true,
        };
    }

    renderSavingsAccount() {
        return (
            <div className={"card"}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>Everyday Savings</h5>
                    <p className={"card-text"}>Balance: ${this.props.savingsAccountBalance}</p>
                    <button type="button" className="btn btn-secondary card-button">Deposit</button>
                    <button type="button" className="btn btn-secondary card-button">Withdraw</button>
                    {this.state.test ? <p>hi</p> : <p>bye</p>}
                </div>
            </div>
        );
    }

    renderTfsaAccount() {
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

    render() {
        return (
            <div>
                {this.props.accountTypeIsTFSA ? this.renderTfsaAccount() : this.renderSavingsAccount()}
            </div>
        );
    }
}

CashAccount.propTypes = {
    accountTypeIsTFSA: PropTypes.bool.isRequired,
    savingsAccountBalance: PropTypes.number,
    tfsaAccountBalance: PropTypes.number,
    tfsaContributionRoom: PropTypes.number,
};

export default CashAccount;