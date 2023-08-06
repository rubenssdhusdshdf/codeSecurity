import React from 'react';

const SECURITY_CODE = "paradigma";

function UseState( {name} ) {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log(value);
 
    React.useEffect(() => {
        console.log("Empezando el efecto")

        if (!!loading) {
            setTimeout(() => {
                console.log("Haciendo la validacion")

                if(value === SECURITY_CODE) {
                    setLoading(false);
                    // setError (false)
                } else {
                    setError(true);
                    setLoading(false);
                } 
    
                console.log("terminando la validacion")
            }, 3000)
        }

        console.log("Terminando el efecto")
    }, [loading]);

    return (
        <div>
            <h2>Delete {name} </h2>

            <p>Please, write here the security code</p>

            { (error && !loading) && (
                <p>Error: the code is incorrect</p>
            )}
            {loading && (
                <p>Loading... </p>
            )}

            <input 
                placeholder="security code"
                value={value}
                onChange={(event) => {
                    // setError(false); The problem here is it has to validate in every onchange
                    setValue(event.target.value);
                }}  
            />
            <button
                onClick={() => {
                    // setError(false); It worked
                    setLoading(true);
                }} //Or onClick={() => setError(prevState => !prevState )}
            >Check</button>
        </div>
    )
}

export { UseState };