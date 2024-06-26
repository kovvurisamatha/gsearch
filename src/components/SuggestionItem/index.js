// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestiondetails, updatesearchinput} = props
  const {suggestion} = suggestiondetails
  const suggestionitem = () => {
    updatesearchinput(suggestion)
  }
  return (
    <li className="list-container">
      <p>{suggestion}</p>
      <button type="button" className="butt" onClick={suggestionitem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
