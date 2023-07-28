// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  firstNameClick = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameClick = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="inner-container">
          <div className="frame-container">
            <button
              type="button"
              className="button"
              onClick={this.firstNameClick}
            >
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="name-container">
                <p className="name">Joe</p>
              </div>
            ) : null}
          </div>
          <div className="frame-container">
            <button
              type="button"
              className="button"
              onClick={this.lastNameClick}
            >
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="name-container">
                <p className="name">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
