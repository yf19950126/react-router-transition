import React, { Component } from 'react';
import './App.css';

//引入插件
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
class App extends Component {
  constructor(props){
    super(props)
    //数据
    this.state={
      seen:true
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={
          	()=>{
          		this.setState({
          			seen:!this.state.seen
          		})
          	}
          }>切换按钮</button>
          {/*CSSTransitionGroup组件  包住要做的动画
          	transitionName  动画名称
          	transitionEnterTimeout 动画进入时间
          	transitionLeaveTimeout  动画离开时间
          	transitionAppear  是否出现动画
          	transitionAppearTimeout  出现动画的时间*/}
        </div>
        <CSSTransitionGroup transitionName="fade"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={500}
         transitionAppear={true}
         transitionAppearTimeout={500}>
          {
            this.state.seen&&<div className="box">
              seen为真的时候可以看到
            </div>
          }
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
