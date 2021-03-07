import {Component} from 'react';
import PropTypes from "prop-types";

class CashAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: true,
            default: true,
            inputAmount: '',
        };
    }

    renderSavingsAccount() {
        return (
            <div>
                <h5 className={"card-title"} style={{color: "black"}}>{CashAccount.sentences.savings}</h5>
                <p className={"card-text"} style={{color: "black"}}>Balance: ${this.props.savingsAccountBalance}</p>
            </div>
        );
    }

    renderTfsaAccount() {
        return(
            <div>
                <h5 className={"card-title"} style={{color: "black"}}>{CashAccount.sentences.tfsa}</h5>
                <p className={"card-text"} style={{color: "black"}}>Balance: ${this.props.tfsaAccountBalance}</p>
                <p className={"card-text"} style={{color: "black"}}>Contribution room: ${this.props.tfsaContributionRoom}</p>
            </div>
        );
    }

    deposit() {
        let amount = Number(this.state.inputAmount);
        if (!isNaN(amount)) {
            this.props.accountTypeIsTFSA ? this.props.addBalanceTFSAOnClick(amount) : this.props.addBalanceSavingsOnClick(amount);
        }
    }

    withdraw() {
        let amount = Number(this.state.inputAmount);
        if (!isNaN(amount)) {
            this.props.accountTypeIsTFSA ? this.props.subtractBalanceTFSAOnClick(amount) : this.props.subtractBalanceSavingsOnClick(amount);
        }
    }

    renderDepositConfirmation(isDeposit) {
        return (
            <div className={"cash-account-deposit-confirmation"}>
                <input
                    onChange={(evt) => { this.setState({inputAmount: evt.target.value}); }} // update state with text box value
                    placeholder={CashAccount.sentences.inputPlaceholder}
                />
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary card-button"
                        onClick={() => this.deposit()}
                    >
                        {CashAccount.sentences.deposit}
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary card-button"
                        onClick={() => this.withdraw()}
                    >
                        {isDeposit ? CashAccount.sentences.deposit : CashAccount.sentences.withdraw}
                    </button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className={"card"}>
                    <div className={"card-body"}>
                        {this.props.accountTypeIsTFSA ? this.renderTfsaAccount() : this.renderSavingsAccount()}
                        {this.renderDepositConfirmation()}
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
    addBalanceSavingsOnClick: PropTypes.func.isRequired,
    subtractBalanceSavingsOnClick: PropTypes.func,
    addBalanceTFSAOnClick: PropTypes.func,
    subtractBalanceTFSAOnClick: PropTypes.func,
    parentObject: PropTypes.object,
};

CashAccount.sentences = {
  savings: "Everyday Savings",
  tfsa: "Tax-Free Savings",
  deposit: "Deposit",
  withdraw: "Withdraw",
  cancel: "Cancel",
  inputPlaceholder: "Enter amount",
};

export default CashAccount;