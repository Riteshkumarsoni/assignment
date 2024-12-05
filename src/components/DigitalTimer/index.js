import {Component} from 'react'
import './index.css'

const initaialState = {
  isClicked: false,
  timeInMinutes: 25,
  timeInSeconds: 0,
}

class DigitalTimer extends Component {
  state = initaialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => clearInterval(this.intervalId)

  resetButtonClick = () => {
    this.clearTimeInterval()
    this.setState({isClicked: false, timeInMinutes: 25, timeInSeconds: 0})
  }

  onMinusButtonClick = () => {
    const {isClicked, timeInMinutes} = this.state
    if (timeInMinutes > 1 && !isClicked) {
      this.setState(prevState => ({timeInMinutes: prevState.timeInMinutes - 1}))
    }
  }

  onPlusButtonClick = () => {
    const {isClicked} = this.state
    if (!isClicked) {
      this.setState(prevState => ({timeInMinutes: prevState.timeInMinutes + 1}))
    }
  }

  onIncrementAndDecrement = () => {
    const {timeInMinutes} = this.state
    return (
      <div className="set-timer-limit-container">
        <p className="title-section">Set Timer limit</p>
        <div className="plus-minus-container">
          <button
            className="minus-button"
            type="button"
            onClick={this.onMinusButtonClick}
          >
            -
          </button>
          <div className="show-setTimer">
            <p className="setTime-section">{timeInMinutes}</p>
          </div>
          <button
            className="minus-button"
            type="button"
            onClick={this.onPlusButtonClick}
          >
            +
          </button>
        </div>
      </div>
    )
  }

  incrementTimeinSeconds = () => {
    const {timeInMinutes, timeInSeconds} = this.state
    const timerIsCompleted = timeInSeconds === timeInMinutes * 60
    if (timerIsCompleted) {
      this.clearTimeInterval()
      this.setState({isClicked: false})
    } else {
      this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
    }
  }

  onStartOrPauseClick = () => {
    const {isClicked, timeInMinutes, timeInSeconds} = this.state
    const isTimerComleted = timeInSeconds === timeInMinutes * 60

    if (isTimerComleted) {
      this.setState({timeInSeconds: 0})
    }
    if (isClicked) {
      this.clearTimeInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeinSeconds, 1000)
    }
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onRenderStartAndResetButton = () => {
    const {isClicked} = this.state
    const imgURL = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altValue = isClicked ? 'pause icon' : 'play icon'
    return (
      <div className="startAndReset-button">
        <button
          className="button"
          type="button"
          onClick={this.onStartOrPauseClick}
        >
          <img src={imgURL} alt={altValue} className="button-icon" />
          {isClicked ? 'Pause' : 'Start'}
        </button>

        <button
          className="button"
          type="button"
          onClick={this.resetButtonClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset icon"
            className="button-icon"
          />
          Reset
        </button>
      </div>
    )
  }

  getElapsedTimeFormat = () => {
    const {timeInMinutes, timeInSeconds} = this.state
    const totalRemainingSeconds = timeInMinutes * 60 - timeInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifedMinutes}:${stringifedSeconds}`
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="app-container">
        <h1 className="top-heading">Digital Timer</h1>
        <div className="DigitalTimer-container">
          <div className="timer-display-container">
            <div className="elapsed-timer-container">
              <h1 className="elapsed-time">{this.getElapsedTimeFormat()}</h1>
              <p className="timer-state">{isClicked ? 'Running' : 'Paused'}</p>
            </div>
          </div>

          <div>
            {this.onRenderStartAndResetButton()}
            {this.onIncrementAndDecrement()}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
