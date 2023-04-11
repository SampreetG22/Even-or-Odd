import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  BtnClick = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    console.log(newNumber)
    this.setState(prevState => ({number: prevState.number + newNumber}))
  }

  EvenOrOdd = () => {
    const {number} = this.state
    if (number % 2 === 0) {
      return <p className="mainPara">Count is Even</p>
    }
    return <p className="mainPara">Count is Odd</p>
  }

  render() {
    const {number} = this.state
    return (
      <div className="bgContainer">
        <div className="subContainer">
          <h1 className="mainHead">Count {number}</h1>
          {this.EvenOrOdd()}
          <button className="BtnCSS" onClick={this.BtnClick} type="button">
            Increment
          </button>
          <p className="paragraph2">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
