import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Amplify, { Auth } from 'aws-amplify';

const identityPoolId = 'ap-southeast-1:888ed8d1-ea60-4753-9c60-00c730190b01',
    region = 'ap-southeast-1',
    userPoolId = 'ap-southeast-1_kZptKddro',
    userPoolWebClientId = '3bda0uqn2kdk3v5cpvq34h8pso',
    mandatorySignIn = false;

Amplify.configure({
    Auth: {
        identityPoolId,
        region,
        userPoolId,
        userPoolWebClientId,
        mandatorySignIn,
        cookieStorage: {
            expires: 365,
            secure: true,
        }
    }
});

console.log(Amplify.Auth)

ReactDOM.render(
    <StyleRoot>
        <App />
    </StyleRoot>
    , document.getElementById('root')
);
registerServiceWorker();
