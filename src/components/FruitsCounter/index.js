// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangos: 0,
    bananas: 0,
  }

  onEatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  onEatBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangos, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="span-element">{mangos}</span> mangoes
            <span className="span-element">{bananas}</span> bananas
          </h1>
          <div className="inner-card">
            <div className="mango-card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onEatMango}
                className="button-element"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="bananas-card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.onEatBananas}
                className="button-element"
                type="button"
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
