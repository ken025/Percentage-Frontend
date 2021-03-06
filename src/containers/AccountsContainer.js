import React from 'react'
import { connect } from 'react-redux'
import Accounts from '../components/Accounts'

class AccountsContainer extends React.Component {

  render() {
      return (
     
          <div>
             <section id="home-heading" className="p-5">
                    <div className="dark-overlay">
                        <h1 id="heading-title">ACCOUNTS</h1>
                        </div>
              </section>
              <Accounts/>       
            </div>
        )
    }

}

const mapStateToProps = (state) => (
    {user: state.users}
)      

export default connect(mapStateToProps, {  } )(AccountsContainer)