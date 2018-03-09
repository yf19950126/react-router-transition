import React, { Component } from 'react';
import './App.css';
//导入路由插件
//1.BrowserRouter  浏览器路由对象
//as 改名  使用as后面的名代替as 前面的名
//2.Route路由配置
//3.Link  链接组件
//4.Redirect  重定向组件
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom"
//导入组件
import Home from "./pages/Home"
import Car from "./pages/Car"
import Goods from "./pages/Goods"
import Setting from "./pages/Setting"
import Detail from "./pages/Detail"

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            {/*导航*/}
              <div className="nav">
                <ul>
                  <li><Link to="/home">首页</Link>></li>
                  <li><Link to="/goods">商品</Link>></li>
                  <li><Link to="/car">购物车</Link>></li>
                  <li><Link to="/setting">设置</Link>></li>
                </ul>
              </div>
              {/*重定向*/}
              {/*<Redirect to={{pathname:'/home',state:{form:"/"}}}></Redirect>*/}
              {/*路由加载对应的组件  配置路由
               path="/home" 地址
               component={Home}  对应的组件
               加载的组件  就放在当前Route标签所在的位置
              */}
              <Route path="/home" component={Home}></Route>
              <Route path="/goods" component={Goods}></Route>
              <Route path="/car" component={Car}></Route>
              <Route path="/setting" component={Setting}></Route>
              {/*详情页面*/}
              <Route path="/detail/:id" component={Detail}></Route>
          </div>
      </Router>
    );
  }
}

export default App;
