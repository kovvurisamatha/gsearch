import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchinput: ''}
  onchangesearchinput = event => {
    this.setState({searchinput: event.target.value})
  }
  updatesearchinput = value => {
    this.setState({searchinput: value})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchinput} = this.state
    const searcheddata = suggestionsList.filter(eachitem =>
      eachitem.suggestion.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="search Google"
              onChange={this.onchangesearchinput}
            />
          </div>
          <ul>
            {searcheddata.map(eachsuggestion => (
              <SuggestionItem
                key={eachsuggestion.id}
                suggestiondetails={eachsuggestion}
                updatesearchinput={this.updatesearchinput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
