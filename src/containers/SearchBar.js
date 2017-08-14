import React, {Component} from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}

    this.onInputChange= this.onInputChange.bind(this)
  }
onInputChange(event) {
  this.setState({term: event.target.value})
}
onFormSubmit(event) {
  event.preventDefault()
}

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <input placeholder='location' value={this.state.term} onChange={this.onInputChange}/>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}
