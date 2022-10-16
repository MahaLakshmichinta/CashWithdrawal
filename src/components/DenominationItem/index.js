// Write your code here
import './index.css'

const DenominationItem = props => {
  const {DenominationItemsList, updateBalance} = props
  const {value} = DenominationItemsList

  const onButtonClick = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        className="button-withdrawal"
        onClick={onButtonClick}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
