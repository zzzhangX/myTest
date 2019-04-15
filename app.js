/**
 * Created by zhang on 2018/10/17.
 */
//express搭建服务器
const express=require("express");//加载express

const logger=require("morgan");

const favicon=require("serve-favicon");

const app=express();//执行express全局函数，返回express的服务器对象


//日志模块
app.use(logger("dev"));//调用日志模块，开发模式

//设置静态路径资源
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/public/html"));

//小图标
app.use(favicon(__dirname+"/public/images/favicon.ico"));


app.set("port",8888);//设置端口
app.listen(8888,()=>{
    console.log("服务器已启动"+app.get("port"));
});

