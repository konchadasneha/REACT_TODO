import React, { Component }  from 'react';
const styles = {
  mar_b: {
    marginBottom: '10px',
    borderBottom: '1px solid #ccc',
    padding: '10px'
  },
  span: {
    marginRight: '20px'
  },
  btn: {
    background: '#fff',
    border: '1px solid #ccc',
    padding: '6px 20px',
    cursor: 'pointer'
  }
}
class List extends Component {

  delete = (index, e) => {
    this.props.deleteList(index);
  }
  checkState = (index, e) => {
    this.props.checkListState(index);
  }
  render() {
    const status = this.props.status;
    const dataList = this.props.data;
    const createList = (item, i) => {
      return (
        <li key={item.id} style={styles.mar_b}>
          <span style={styles.span}>{i+1}</span>
          <span style={styles.span} className={item.complete=== 0 ? 'cursor-color' : 'line'} onClick={this.checkState.bind(this, i)}>{item.title}</span>
          <span style={styles.span}>{item.complete === 0 ? '未完成' : '已完成'}</span>
          <span style={styles.span}>{item.id}</span>
          <button style={styles.btn} onClick={this.delete.bind(this, i)}>删除</button>
        </li>
      )
    }
    let iList = null;
    let iListDom = null;
    if (status === '0') {
      iList = dataList
    } else if (status === '1') {
      iList = dataList.filter((item, i) => {
        return item.complete === 1
      })
    } else {
      iList = dataList.filter((item, i) => {
        return item.complete === 0
      })
    }
    iListDom = iList && iList.map((item, i) => createList(item, i))
    return (
      <ul>
        {iListDom}
      </ul>
    )
  }
}

export default List