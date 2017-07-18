import React from "react"


class SectionContainer extends React.Component {

  render() {

    return(
      <div style={this.props.style}>
        {this.props.children}
      </div>
    )
  }

}

SectionContainer.defaultProps = {
  style: {
    minHeight: "100vh",
    padding: "50px",
  }
}

export default SectionContainer
