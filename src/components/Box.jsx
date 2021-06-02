import React from "react"

class Box extends React.Component {
  render () {
    return (
      <div className="box col-sm-3 col-6">
        <span class="material-icons"  style={{fontSize:100, color:this.props.color}}>{this.props.icon}</span>
        <p>{this.props.unit}{this.props.value}</p>
      </div>
    )
  }
}

export default Box 