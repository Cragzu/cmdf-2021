import React from 'react';

class GIC extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h3 style={{color: "black"}}>Guaranteed Investment Certificate</h3>

                    <p className="gis-block" style={{color: "black"}}>Profit</p>
                    <p className="gis-block" style={{color: "black"}}>$123.45</p>
                    

                    <div>
                        <button type="button" className="btn btn-secondary">Buy</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GIC;