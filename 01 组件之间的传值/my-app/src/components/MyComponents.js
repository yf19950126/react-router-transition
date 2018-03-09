import React, { Component } from 'react';

//定义一个类 继承另一个类
class MyComponent extends Component{
    constructor(props){
        super(props);
        //父组件的所有属性都会放在this.props对象里
        console.log(this.props)
        //this.props.children里面是组件内部标签组成的数组
        //数据
        this.state = {
            msg:'德玛西亚！！！！',
            //班级内人数
            numbers: this.props.numbers || 0
        }
    }

    //返回模板
    render(){
        return(
            <div className="MyComponent">
                <h1>{this.props.title}</h1>
                <h2>{this.props.children}</h2>
                {/*<h2>{this.props.children ? this.props.children[0] : ""}</h2>*/}
                <div>
                    班内人数:<span>{this.state.numbers}</span>
                </div>
                <div>
                    <button onClick={
                        ()=>{
                            this.props.change(1)
                            this.setState({
                                numbers:this.state.numbers +1,
                            })
                        }
                    }>增加1人</button>
                    <button onClick={
                        ()=>{
                            if(this.state.numbers > 0){
                                this.props.change(-1)
                                this.setState({
                                    numbers:this.state.numbers -1
                                })
                            }
                        }
                    }>减少1人</button>
                </div>
                <input type="text" ref="text" defaultValue="1111"/>
            </div>
        )
    }
    //挂载之前
    componentWillMount(){
        console.log("组件挂载之前")
        //可以获取数据和修改数据，但是不能获取模板
        console.log(this.state.numbers)
        this.setState({
            numbers:0
        })
        //ajax请求可以写在里面
    }
    //挂载完成
    componentDidMount(){
        console.log("组件挂载完成")
        console.log(this.props)
        // this.setState({
        //     numbers:this.props.numbers || 0
        // })
        //可以访问页面组件内容
        console.log(this.refs.text.value)
    }
    //组件更新之前
    componentWillUpdate(){
        console.log("组件更新之前")
    }
    //组件更新完成
    componentDidUpdate(){
        console.log("组件更新完成")
    }
    //组件卸载之前
    componentWillUnMount() {
        console.log("组件卸载之前")
    }
    //组件卸载完成
    componentDidUnMount(){
        console.log("组件卸载完成")
    }
}
export default MyComponent;