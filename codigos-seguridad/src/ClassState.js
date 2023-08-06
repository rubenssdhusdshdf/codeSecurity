import React from 'react';
import { Loading } from '../src/Loading';

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: false,
        };
    }

    //UNSAFE_componentWillMount() {
        //console.log("componentWillMount")
    //}

    //componentDidMount() {
    //    console.log("componentWillUnmount")
    //}

    componentDidUpdate() {
        console.log('actualizacion'); //Cada vez que llamemos a this.state, vamos a llamar a CompoenentDidUpdate and will show an update in console.log

        if (!!this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validacion")
    
                this.setState( { loading: false })
    
                console.log("terminando la validacion")
            }, 3000)
        }
    } 

    render() {
        return (
            <div>
                <h2>Eliminate {this.props.name} </h2>

                <p>Please, write here the security code</p>

                {this.state.error && (
                    <p>Error: the code is incorrect</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                <input placeholder="security code"/>
                <button
                    onClick={ () => this.setState( { loading: true } ) }
                >Check</button>
            </div>
        )
    }
}
export { ClassState };