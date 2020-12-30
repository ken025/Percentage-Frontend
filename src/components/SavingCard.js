import React from 'react'
//img_url => total_saved & total_price

const SavingCard = (props) => {
    console.log(props)
    const {id, name, total_price, total_saved} = props
    console.log(name)
    return(
        <div className="card" style={{background: '#82c7a5a9'}}>
            <h1>{name}</h1><br />
            <h3>{total_price}</h3><br />
            <h5>{total_saved}</h5><br />
        </div>
    )
}

export default SavingCard