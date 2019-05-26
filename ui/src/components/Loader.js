import React from 'react';

function Loader() {
    const css = `
                @keyframes lds-eclipse {
                0 % {
                - webkit - transform: rotate(0deg);
                transform: rotate(0deg);
            }
                50% {
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
            }
                100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
            }
                @-webkit-keyframes lds-eclipse {
                    0 % {
                    - webkit - transform: rotate(0deg);
                    transform: rotate(0deg);
                }
                    50% {
                    -webkit-transform: rotate(180deg);
                    transform: rotate(180deg);
                }
                    100% {
                    -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
                }
                }
                .lds-eclipse {
                    position: relative;
                }
                .lds-eclipse div {
                    position: absolute;
                    -webkit-animation: lds-eclipse 1s linear infinite;
                    animation: lds-eclipse 1s linear infinite;
                    width: 160px;
                    height: 160px;
                    top: 20px;
                    left: 20px;
                    border-radius: 50%;
                    box-shadow: 0 4px 0 0 #209CEE;
                    -webkit-transform-origin: 80px 82px;
                    transform-origin: 80px 82px;
                }
                .lds-eclipse {
                    width: 200px !important;
                    height: 200px !important;
                    -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
                    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
                    }
    `;
    return (
        <div className="columns is-centered">
            <div className="column is-half">
                <div className="lds-css ng-scope">
                    <div style={{width: '100%', height: '100%'}} className="lds-eclipse">
                        <div/>
                    </div>
                    <style type="text/css">{css}</style>
                </div>
            </div>
        </div>
    );
}

export default Loader;