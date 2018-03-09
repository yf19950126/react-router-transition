import React, { Component } from 'react';

//定义一个类 继承另一个类
class Goods extends Component{
    constructor(props){
        super(props)
        //数据
        this.state = {
            msg:'Goods'
        }
    }

    //返回模板
    render(){
        return(
            <div className="Goods">
                {this.state.msg}
            </div>
        )

    }
}
export default Goods;