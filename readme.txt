yarn + webpack + babel + react ＝》 前端简单框架

yarn: 模块管理工具。
	yarn是google，facebook，exponent和Tilde开发的一种新的JavaScript软件包管理器。目的在于解决npm面临的问题：
		1. 安装包不够快／连续。npm安装包是顺序进行的；yarn是并行方式
		2. npm的包版本管理有安全隐患，npm允许安装包执行代码。
		3. yarn引入lock文件，对包的版本进行锁定式的管理。npm可以通过命令shrinkwrap来实现。
	yarn和npm的异同，参照文章：http://www.jianshu.com/p/2db9f278494a

webpack：模块打包机：
		分析项目的结构，找到JavaScript模块以及其他的一些浏览器不能直接运行的扩展语言（Scss, TypeScript等），并将其打包为合适的格式以供浏览器使用。

		webpack和Grunt和Gulp的异同：
			Gulp和Grunt是一种能够优化前端开发流程的工具（不大懂～似乎平时接触不到）
				Gulp和Grunt的工作方式：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤。这个工具之后可以自动替你完成这些任务。
			WebPack是一种模块化的解决方案。
				WebPack的工作方式：把你的项目当作一个整体，通过一个给定的主文件（比如：index.js），WebPack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包一个浏览器可识别的JavaScript文件。

babel：编译器。将es6转为es5

react: 前端UI开发框架，facebook开发的一款js库。
	flux + facebook ＝》 以某种方式组织代码，使其更加可预测
		flux是一个系统架构，用于推进应用中的数据单项流动。


构建过程，参照文章https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

大致过程：
// yarn的安装和配置
1. 安装yarn
	brew update
	brew install yarn
2. mkdir hello-world-react
	cd hello-world-react
	yarn init
	yarn init初始化，创建package.json

// webpack的安装和配置
3. yarn add webpack webpack-dev-server path
	效果，创建了yarn.lock文件。
	webpack-dev-server，效果，浏览器实时监测代码的修改，并自动刷新修改后的结果。
4. touch webpack.config.js
	配置webpack.config
	/*
	    ./webpack.config.js
	*/
	const path = require('path');
	module.exports = {
	  entry: './client/index.js',
	  output: {
	    path: path.resolve('dist'),
	    filename: 'index_bundle.js'
	  },
	  module: {
	    loaders: [
	      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
	      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
	    ]
	  }
	}

// babel的配置
5. yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
6. touch .babelrc
	配置babel：
		/* 
		    ./.babelrc
		*/  
		{
		    "presets":[
		        "es2015", "react"
		    ]
		}

// 前端文件初始化
7.  > mkdir client
	> cd client
	> touch index.js
	> touch index.html
	> cd .. 


// 添加包对html文件进行管理
8. yarn add html-webpack-plugin
	修改webpack的配置文件
	/* 
	    ./webpack.config.js
	*/
	const path = require('path');

	const HtmlWebpackPlugin = require('html-webpack-plugin');
	const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	  template: './client/index.html',
	  filename: 'index.html',
	  inject: 'body'
	})

	module.exports = {

	...

	module: {
	    loaders: [
	        ...
	    ]
	},
	// add this line
	plugins: [HtmlWebpackPluginConfig]
	}

9. 测试：
	index.js文件：
	/*
	    ./client/index.js
	    which is the webpack entry file
	*/
	console.log('Hey guys and ladies!!')
	index.html文件：
	/*
	    ./client/index.html
	    basic html skeleton
	*/
	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title>React App Setup</title>
	  </head>
	  <body>
	    <div id="root">

	    </div>
	  </body>
	</html>
控制台：yarn start
浏览器：localhost:8080

10 添加react的测试：
	yarn add react react-dom
	> cd client
	> mkdir components 
	> cd components
	> touch App.jsx
	> cd ../..

文件内容：
/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}

/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
