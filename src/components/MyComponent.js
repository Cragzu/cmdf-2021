import React from 'react';

// test component
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: "cool values"
        }
    }

    render() {
        return (
            <div className={'MyComponent'}>
                <p>My Component</p>
            </div>
        )
    }
}

export default MyComponent;