import React from 'react'

export function Checkoutstep(props) {
    

    return (
        <div className = "row checkout-steps">
            <div className = {props.step1? "active": ''}>Sign_In</div>
            <div className = {props.step2? "active": ''}>Shipping</div>
            <div className = {props.step3? "active": ''}>Payment</div>
            <div className = {props.step4? "active": ''}>Place order</div>
        </div>
    )
}
