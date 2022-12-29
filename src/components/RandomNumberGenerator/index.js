// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  generateRandom = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const greaterthenHundred = count >= 100 ? 0 : count

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandom}
          >
            Generate
          </button>
          <p className="count">{greaterthenHundred}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
