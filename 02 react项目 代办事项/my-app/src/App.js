import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        //数据
        this.state={
            todoList:[{
                text:'111111111',
                date:"2018-1-1 11:11:11"
            }]
        }
    }
  render() {
    return (
      <div className="App">
          <h1>待办事项</h1>
          <ol>
              {
                  this.state.todoList.map(function (ele,ind) {
                      return <li key={ind}><span>{ele.date}</span>{ele.text}</li>
                  })
              }
          </ol>
          <div className="input-box">
              <input type="text" ref="text"/>
              <button onClick={
                  ()=>{
                      //输入的文本
                      var text = this.refs.text.value;
                      if(text.trim().length > 0){
                          // text = text.replace(/[><]/g,function (char) {
                          //     console.log(char)
                          //     if(char === ">"){
                          //         return "&gt;"
                          //     }else if(char === "<"){
                          //         return "&lt;"
                          //     }
                          // })
                          var tempObj = {
                              text,
                              date:new Date().toLocaleString()
                          }
                          console.log(tempObj)
                          //改变状态
                          this.setState({
                              todoList:[...this.state.todoList,tempObj]
                          })
                          //清空输入框
                          this.refs.text.value = ""
                      }
                  }
              }>提交</button>
          </div>
      </div>
    );
  }
}

export default App;
