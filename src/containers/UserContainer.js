import React from 'react'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
 
const UserContainer = (props) => {
    // console.log(props.savings)
    return(
        <div className="cards"> 
        <UserForm/>
        {/* {props.savings.map(saving => <SavingCard key = {savingsReducer.id} {...saving} />)} */}
        </div>
        )
}

const msp = (state) => ({
    savings: state.savings.savings
})
export default connect(msp)(UserContainer);