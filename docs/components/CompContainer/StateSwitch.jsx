import React from "react"
import Radium from "radium"


class StateButton extends React.Component {

  clickHandler() {
    this.props.updateFunc(this.props.title)
  }

  render() {
    let style = {
      button: {
        fontSize: "18px",
        width: `${this.props.width * 100}%`,
        float: "left",
        padding: "10px 5px",
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: this.props.color,
        border: "1px solid #3d3d3d",
        cursor: "pointer",
        transition: "background-color .4s",
        ":hover":{
          backgroundColor: this.props.bgColor
        }
      }
    }

    return (
      <div className="button" style={style.button}
        onClick={this.clickHandler.bind(this)}>
        {this.props.title}
      </div>
    )
  }

}

class StateSwitch extends React.Component {

  render() {
    const style = {
      outer: {
        fontSize: "18px",
        minHeight: "900px",
        display: "inline-block",
        verticalAlign: "top",
        width: "50%",
        boxSizing: "border-box",
        marginTop: "8px"
      },
      inner: {
        width: "60%",
        textAlign: "center",
        margin: "auto"
      }
    }

    let types = this.props.states
    let buttons = []
    let color = ""
    let bgColor = ""
    for (var i=0; i < types.length; i++) {
      if (types[i] == this.props.switch) {
        color = "#00AA00"
        bgColor = "00AA00"
      } else {
        color = "#444444"
        bgColor = "#005500"
      }
      let StyledButton = Radium(StateButton)
      buttons.push(
        <StyledButton key={i} title={types[i]} width={1/this.props.states.length}
        updateFunc={this.props.updateFunc} color={color} bgColor={bgColor}/>
      )
    }

    return(
      <div style={style.outer}>
        <div style={style.inner}>
          <div>{this.props.name}:</div>
          <div className="switch">
            {buttons}
          </div>
        </div>
      </div>
    )
  }

}

export default StateSwitch
