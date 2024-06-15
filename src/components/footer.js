import React, { Component }  from 'react';
const styles = {
  active: {
    background: 'yellowgreen',
    color: '#fff'
  }
}
class Foot extends Component {
  setStatus = e => {
    this.props.setStatus(e.target.getAttribute('data-value'))
  }
  render() {
    if (!this.props.show) return ''
    return (
      <div className="center">
        <button data-value="0" style={this.props.currentStatus === '0' ? styles.active : {}} onClick={this.setStatus}>全部</button>
        <button data-value="1" style={this.props.currentStatus === '1' ? styles.active : {}} onClick={this.setStatus}>已完成</button>
        <button data-value="2" style={this.props.currentStatus === '2' ? styles.active : {}} onClick={this.setStatus}>未完成</button>
      </div>
    )
  }
}

export default Foot