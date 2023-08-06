import React from 'react';
import { Loading } from '../src/Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: false,
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

                if (SECURITY_CODE === this.state.value) {
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false});
                }
    
              
    
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

                <input 
                
                placeholder="security code"
                value={this.state.value}
                onChange={(event) => {
                    this.setState({ value: event.target.value });
                }} 
                />
                <button
                    onClick={ () => this.setState( { loading: true } ) }
                >Check</button>
            </div>
        )
    }
}
export { ClassState };