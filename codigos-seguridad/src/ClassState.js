import React from 'react';

class ClassState extends React.Component {
    render() {
        return (
            <div>
                <h2>Eliminate ClassState</h2>

                <p>Please, write here the security code</p>
                <input placeholder="security code"/>
                <button>Check</button>
            </div>
        )
    }
}
export { ClassState };