import { Component } from 'react';
import PropTypes from 'prop-types';
import placeholderImg from '../assets/logo.png';

class Sidebar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="sidebar">
            {
                // <div>
                //     <h1 className="logo-header">Penny</h1>
                // </div>
            }
                <div className="sidebar-img">
                    <img src={placeholderImg} className="prof-image"/>
                </div>
                <div className="Age-date-section">
                <p >Age: 13
                <br/>January 2021</p>
                </div>
                 <div style={{ borderTop: "4px solid white ", marginLeft: 100, marginRight: 100, marginTop: 40 }}></div>
                <div className="pocket-section">
                    <p className="sidebar-money">Pocket Money: <br/>${this.props.checkingAccountBalance}</p>
                </div>
                <div style={{ borderTop: "4px solid white ", marginLeft: 100, marginRight: 100, marginTop: 40 }}></div>
                <div className="pocket-section">
                    <p className="sidebar-money">Net Worth: <br/>${this.props.currentNetWorth}</p>
                </div>

                <div className="next-month">
                    <button type="button" onClick={this.props.changeMonthButtonOnClick} className="next-month-btn">Next Month</button>
                </div>
                <br/>
            </div>
        );
    }
}

Sidebar.propTypes = {
    changeMonthButtonOnClick: PropTypes.func.isRequired,
    currentNetWorth: PropTypes.number.isRequired,
    checkingAccountBalance: PropTypes.number.isRequired,
};

export default Sidebar;