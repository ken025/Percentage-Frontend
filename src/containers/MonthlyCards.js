import React from 'react'
import { connect } from 'react-redux'
import { monthliesReducer } from '../reducers/monthliesReducer'
import MonthlyCard from '../components/MonthlyCard'
 
const MonthlyCards = (props) => {
    // console.log(props.savings)
    return(
        <div className="cards"> 
        Monthly Cards Go Here!
        {props.monthlies.map(monthly => <MonthlyCard key = {monthliesReducer.id} {...monthly} />)}
        </div>
        )
}

const msp = (state) => ({
    monthlies: state.monthlies.monthlies
})
export default connect(msp)(MonthlyCards);