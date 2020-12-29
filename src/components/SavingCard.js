import React from 'react'

const SavingCard = (props) => {
    const {img_url, name} = props
    return(
        <div className="card">
            <img src={img_url} alt={name}/><br />
        </div>
    )
}

export default SavingCard