import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { Button } from '@material-ui/core'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        {/*Home work*/}
                        Subtotal = ({0} items):
                        <strong>0</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale = {2}
                value={0}//home work
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
