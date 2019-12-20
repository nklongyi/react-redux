This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Using [AntD](https://ant.design)
Using [React-js](https://reactjs.org/) 

本项目为理解原生redux的原理所建，并非是react-redux的项目的使用手册。react-redux提供了很多方便的功能，但是其基础依然是redux核心提供的能力。

[![QLzkVA.md.jpg](https://s2.ax1x.com/2019/12/20/QLzkVA.md.jpg)](https://imgchr.com/i/QLzkVA)

按照后端的思维模式去理解：
Store：有点类似于MVC模式中的控制中心，dispatch、subscribe能力都是由store提供；
Reducers：则相当于service层，负责具体的事件处理和反馈，处理的结果return给store进行next handle，是一个纯函数，两个参数state、action，处理后返回new state。
Action：事件的定义，事件可以包含类型（required）、内容（比如赋值等）。


## 开始运行

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

执行效果如下：
[![QOS0l8.md.jpg](https://s2.ax1x.com/2019/12/20/QOS0l8.md.jpg)](https://imgchr.com/i/QOS0l8)

输入->增加，会在todolist增加内容
点击列表项会自动删除内容

如果想暴露webpack的配置，自定义配置信息，可以执行以下命令

### `yarn eject`

**Note: 自定义antd的样式引入形式和按需加载的模式**


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

