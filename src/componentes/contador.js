import React from "react";
import '../stylesheets/contador.css'

function Contador ({ numeroClics }){
    return(
        <div className="contador">
            { numeroClics }
        </div>
    );
}

export default Contador; 