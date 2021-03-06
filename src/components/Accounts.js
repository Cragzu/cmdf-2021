import react, { Component } from 'react';

class Accounts extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    nextMonth = () => {
        
    }
    render() {
        return(
            <div className={"card"} style={{width: '18rem'}}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>Everyday Savings</h5>
                <p className={"card-text"}>Balance:  ${this.props.checkingAccountBalance}</p>
                <p className={"card-text"}>Balance(TSFA):         $0.00</p>
                <p className={"card-text"}>Contribution room</p>
                <a href="#" className={"card-link"}>Deposit</a>
                <a href="#" className={"card-link"}>Withdraw</a>
            </div>
            </div>
             );
    }
}

export default Accounts;