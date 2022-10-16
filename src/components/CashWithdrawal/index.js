// Write your code here
import {Component} from 'react'
import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateBalance = value =>
    this.setState(prevState => ({amount: prevState.amount - value}))

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const sliceWord = name.slice(0, 1)
    return (
      <div className="card-container">
        <div className="profile-card">
          <div className="user-details">
            <div className="container">
              <p className="para">{sliceWord}</p>
            </div>
            <p className="name-user">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <p className="amount-name">
              {amount}
              <br />
              <span className="number">in Rupees</span>
            </p>
          </div>
          <div className="withdraw-container">
            <p className="para-withdraw">Withdraw</p>
            <p className="text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-initial-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  DenominationItemsList={eachItem}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
