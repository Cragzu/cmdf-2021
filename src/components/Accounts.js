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
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Everyday Savings</h5>
                <p class="card-text">Balance:  ${this.props.checkingAccountBalance}</p>
                <p class="card-text">Balance(TSFA):         $0.00</p>
                <p class="card-text">Contribution room</p>
                <a href="#" class="card-link">Deposit</a>
                <a href="#" class="card-link">Withdraw</a>
            </div>
            </div>
             );
    }
}

export default Accounts;