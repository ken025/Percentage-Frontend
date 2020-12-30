import React from 'react'

//img_url => total_saved & total_price

const MonthlyCard = (props) => {
    console.log(props)
    const {id, bill_name, price } = props
    console.log(bill_name)
    return(
        <>
        <div className="card" style={{background: '#82c7a5a9'}}>
            <h1>{bill_name}</h1><br />
            <h3>{price}</h3><br />
        </div><br />
        </>
    )
}

export default MonthlyCard