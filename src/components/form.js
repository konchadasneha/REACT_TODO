import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleSubmit = e => {
    if (this.state.value === '') {
      alert('输入框为必填项');
      return false;
    }
    this.props.addList(this.state.value, new Date().getTime());
    this.refs.form.reset();
    this.setState({value: ''});
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <form ref="form" className="center">
        <input type="text" onChange={this.handleChange}/>
        <button type="button" onClick={this.handleSubmit}>submit</button>
      </form>
    )
  }
}

export default Form;