# webpack-react-es6
环境安装与配置参考步骤   

	1. node和npm是基础，node下载地址https://nodejs.org，为了能支持es6请下载4.0以上版本，新的node版本一般都集成了npm，所以不用专门安  装，安装完成以后可以用node -v和npm -v验证node与npm是否安装成功

	2. 创建项目文件testProject，如果是windows用cmd定位到项目目录下，是mac的话就在终端中定位到项目目录下

	3. 定位完成，在当前项目目录下，执行命令 npm  init   生成package.json文件

	4. 接下来开始安装node模块，先安装webpack，执行命令：npm install webpack --save-dev

	5. 然后安装webpack需要的加载器，执行命令： npm install babel-loader babel-preset-es2015 babel-preset-react --save-dev  (解析jsx和es6的语法)

	6. 安装react，执行命令： npm install react react-dom --save-dev

	7. 到此主要模块已经安装完成，接下来进行文件配置， webpack.config.js文件是必须的，文件配置内容见代码：

	8. package.json内容见代码  
                                                                                       
	9. html中引用bundle.js，可以在代码中写一些效果，然后运行npm start  就可以看到效果 （npm的start是一个特殊的脚本名称，它的特殊性表现在，在命令行中使用npm start就可以执行相关命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build ）

	10. tips： 1.  如果因为网络原因安装不成功，可以在npm install命令时添加--registry=http://registry.npm.qiwoo.org参数  （http://qnpm.qiwoo.org/help/download?sid=9015953b291768f14c980bdbe3ffaa07）   
           2.  需要用到的其他模块的安装 npm install css-loader style-loader （css样式需要的loader）     
                                    npm install url-loader （url解析需要的loader）   
                                    npm i md5 --save-dev  （md5模块安装）



    
