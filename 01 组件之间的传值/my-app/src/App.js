import React, { Component } from 'react';
import './App.css';
//导入组件
import  MyComponent from "./components/MyComponents"

class App extends Component {
    constructor(props){
        super(props);
        //数据
        this.state = {
            count:30
        }

        //改变this指向
        this.change = this.change.bind(this)
    }
    change(value){
        this.setState({
            count:this.state.count + value
        })
    }
    render() {
        return (
            <div className="App">
                <div>
                    学校总人数:{this.state.count}
                </div>
                <MyComponent title="H5第33期" numbers={0} change={this.change}>
                    <div>开班日期:2017年11月20日 </div>
                    <div>毕业日期:2018年3月20日</div>
                </MyComponent>
                <br/>
                <MyComponent title="H5第32期" numbers={30} change={this.change}>
                    <div>任课老师:李老师</div>
                </MyComponent>
            </div>
        );
    }
}

export default App;
