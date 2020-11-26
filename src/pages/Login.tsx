import React, {useState} from 'react';
import "./Common.css"

const Login: React.FC<{}> = () => {

    return (
        <div>
            <form>
                <span>
                    <input placeholder={"Username"}/>
                </span>
                <span>
                    <input placeholder={"Password"}/>
                </span>
            </form>
        </div>
    )
}

export default Login;