import React, { Component } from 'react';

//导入Link
import {Link} from "react-router-dom"
//定义一个类 继承另一个类
class Home extends Component{
    constructor(props){
        super(props)
        //数据
        this.state = {
            msg:'德玛西亚！！！！',
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
            }]
        }
    }

    //返回模板
    render(){
        return(
            <div className="Home">
                <ul>
                    {
                        this.state.students.map((student,index)=>{
                            return <li key={student.id}>{student.id}、
                                <Link to={"/detail/" + student.id}>{student.name}</Link>
                                </li>
                        })
                    }
                </ul>
            </div>
        )

    }
}
export default Home;