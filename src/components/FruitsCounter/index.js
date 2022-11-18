// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  mangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-bg">
        <div className="sub-bg">
          <h1 className="heading">
            Bob ate <span className="fruit-count"> {mango} </span> mangoes
            <span className="fruit-count"> {banana} </span> bananas
          </h1>
          <div className="main-fruitContainer">
            <div className="fruitContainer">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="Image"
                />
              </div>
              <button
                type="button"
                className="button"
                onClick={this.mangoCount}
              >
                Eat Mango
              </button>
            </div>

            <div className="fruitContainer">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="Image"
                />
              </div>
              <button
                type="button"
                className="button"
                onClick={this.bananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
