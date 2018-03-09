import React, { Component } from 'react';

//定义一个类 继承另一个类
class Detail extends Component{
    constructor(props){
        super(props)
        //数据
        this.state = {
            msg:'Detail',
            students:[{
                id:1,
                name:"张三"
            },{
                id:2,
                name:"李四"
            },{
                id:3,
                name:"王五"
            },{
                id:4,
                name:"赵六"
            }],
            student:{}
        }
    }

    //返回模板
    render(){
        return(
            <div className="Detail">
                {/*{this.state.msg}*/}
                <div>学生的id是:{this.state.student.id}</div>
                <div>学生的name是:{this.state.student.name}</div>
                <div>学生的....</div>
            </div>
        )

    }
    //组件挂载完成
    componentDidMount(){
        //console.log(this.props)

        //取到id
        var id = this.props.match.params.id
        var student = this.state.students.find(function (ele) {
            //console.log(ele.id)
            return ""+ele.id === id
        })
        //console.log(student)
        if(student){
            this.setState({
                student:student
            })
        }
    }
}
export default Detail;