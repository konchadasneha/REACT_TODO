import React, { Component } from 'react';
import Form from './components/form'
import List from './components/list'
import Foot from './components/footer'
import './App.css';

class App extends Component {
  state = {
    status: '0', // 0 全部 1 已完成 2 未完成
    data: this.props.data || [{
      title: 'test',
      id: 1,
      complete: 0
    }]
  }
  addList = (title, id) => {
    const data = this.state.data.concat({
      title,
      id,
      complete: 0
    });
    this.setState({data, status: '0'})
  }
  deleteList = index => {
    const data = this.state.data.slice();
    data.splice(index, 1);
    this.setState({data})
  }
  checkListState = index => {
    const data = this.state.data.slice();
    data[index].complete = 1;
    this.setState({data});
  }
  setStatus = status => {
    this.setState({
      status
    })
  }
  render() {
    return (
      <div className="App">
        <Form addList={this.addList}/>
        <List status={this.state.status} deleteList={this.deleteList} data={this.state.data} checkListState={this.checkListState}/>
        <Foot setStatus={this.setStatus} currentStatus={this.state.status} show={!!this.state.data.length}/>
      </div>
    );
  }
}

export default App;
