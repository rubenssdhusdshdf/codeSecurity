import React from 'react';

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: true,
        };
    }
    render() {
        return (
            <div>
                <h2>Eliminate {this.props.name} </h2>

                <p>Please, write here the security code</p>

                {this.state.error && (
                    <p>Error: the code is incorrect</p>
                )}

                <input placeholder="security code"/>
                <button
                    onClick={ () => 
                        this.setState( prevState => ({ error: !prevState.error }) )
                    }
                >Check</button>
            </div>
        )
    }
}
export { ClassState };