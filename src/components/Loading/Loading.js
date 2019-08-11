import React from 'react'

import './Loading.css'

export default function () {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-dual-ring">
                <div></div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}