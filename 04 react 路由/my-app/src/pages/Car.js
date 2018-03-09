import React, { Component } from 'react';

//定义一个类 继承另一个类
class Car extends Component{
    constructor(props){
        super(props)
        //数据
        this.state = {
            msg:'Car'
        }
    }

    //返回模板
    render(){
        return(
            <div className="Car">
                {this.state.msg}
            </div>
        )

    }
}
export default Car;