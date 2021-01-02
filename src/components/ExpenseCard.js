import React from 'react'
//img_url => total_saved & total_price

const ExpenseCard = (props) => {
    console.log(props)
    const {id, name, charge } = props
    console.log(name)
    return(
        <>
        <div className="card" style={{background: '#82c7a5a9'}}>
            <h1>{name}</h1><br />
            <h3>{charge}</h3><br />
        </div><br />
        </>
    )
}

export default ExpenseCard