import React from "react"

class Box extends React.Component {
  render () {
    let slider = null

    if (this.props.unit === "L") {
    } 
    
    else {
    slider = <input type="range" min={this.props.min} max={this.props.max} onChange={this.props.onChange} />
    }
  
    return (     
      <div className="box col-sm-3 col-6">
        <span class="material-icons"  style={{fontSize:100, color:this.props.color}}>{this.props.icon}</span>
        <p>{this.props.unit}{this.props.value}</p>
        {slider} 
      </div>
    )
  }
}

export default Box 