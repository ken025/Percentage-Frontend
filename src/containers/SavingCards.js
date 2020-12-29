import React from 'react'
import { connect } from 'react-redux'
import { savingsReducer } from '../reducers/savingsReducer'
import SavingCard from '../components/SavingCard'
 
const SavingCards = (props) => {
    return(
        <div className="cards"> 
        Cards Go Here!
        {props.savings.map(saving => <SavingCard key = {savingsReducer.id} {...saving} />)}
        </div>
        )
}

const msp = (state) => ({
    savings: state.savings.savings
})
export default connect(msp)(SavingCards);