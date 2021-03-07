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
            <div>
                <h5 className={"card-title"}>{CashAccount.sentences.savings}</h5>
                <p className={"card-text"}>Balance: ${this.props.savingsAccountBalance}</p>
            </div>
        );
    }

    renderTfsaAccount() {
        return(
            <div>
                <h5 className={"card-title"}>{CashAccount.sentences.tfsa}</h5>
                <p className={"card-text"}>Balance: ${this.props.tfsaAccountBalance}</p>
                <p className={"card-text"}>Contribution room: ${this.props.tfsaContributionRoom}</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className={"card"}>
                    <div className={"card-body"}>
                        {this.props.accountTypeIsTFSA ? this.renderTfsaAccount() : this.renderSavingsAccount()}
                        <button type="button" className="btn btn-secondary card-button">{CashAccount.sentences.deposit}</button>
                        <button type="button" className="btn btn-secondary card-button">{CashAccount.sentences.withdraw}</button>
                    </div>
                </div>
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

CashAccount.sentences = {
  savings: "Everyday Savings",
  tfsa: "Tax-Free Savings",
  deposit: "Deposit",
  withdraw: "Withdraw",
  cancel: "Cancel",
};

export default CashAccount;