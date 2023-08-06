import React from 'react';

function UseState( { name} ) {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
 
    React.useEffect(() => {
        console.log("Empezando el efecto")

        if (!!loading) {
            setTimeout(() => {
                console.log("Haciendo la validacion")
    
                setLoading(false);
    
                console.log("terminando la validacion")
            }, 3000)
        }

        console.log("Terminando el efecto")
    }, [loading]);
    return (
        <div>
            <h2>Eliminate {name} </h2>


            

            <p>Please, write here the security code</p>

            {error && (
                <p>Error: the code is incorrect</p>
            )}
            {loading && (
                <p>Loading... </p>
            )}
            <input placeholder="security code"/>
            <button
                onClick={() => setLoading(true)} //Or onClick={() => setError(prevState => !prevState )}
            >Check</button>
        </div>
    )
}

export { UseState };