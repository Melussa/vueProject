/**
 * Created by melissa on 2017/8/11.
 */
//01 导入vue核心 包
//凡是用npm安装的包，引入的时候不需要写相对路径，只需要写包名即可
import Vue from 'vue';
//导入app.vue中的vue对象
import app from './app.vue';
//用vue对象进行解析渲染
//

//02 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
//将VueRouter对象绑定到vue对象上
Vue.use(vueRouter);
//导入路由规则对应的组件对象
import home from './components/Home/home.vue';
import shoCar from './components/shoPro/shoCar.vue';
import member from './components/Member/member.vue';
import search from './components/Search/search.vue';
import news from './components/news/news.vue';

//03 定义路由规则
var router = new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{
			path:'/',
			redirect:'/home'
		},
		{
			path:'/home',
			component:home
		},
		{
			path:'/shoCar',
			component:shoCar
		},
		{
			path:'/member',
			component:member
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/news',
			component:news
		}
		
	]
})

//07 将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象
//就可以进行ajax请求了
import veuResource from 'vue-resource';

Vue.use(veuResource);

//04 使用mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css'
//注册mint-ui
import mintui from 'mint-ui';
//在vue中全局使用mint-ui
Vue.use(mintui);//将当前的对象绑定到vue的原型中
//，就可以保证所有的组件都可以被使用

//05 注册MUI 的css样式
import '../static/MUI/css/mui.css';

//06 导入当前系统的全局样式
import '../static/css/site.css';

import moment from 'moment';
//08 定义一个全局过滤器实现日期格式化
Vue.filter('datafmt',function(input,tmfstring){
	//使用momentJS日期格式化库实现日期格式化功能
	return moment(input).format(tmfstring);
})
new Vue({
    el:'#App',

    //使用路由对象实例(注意：如果在定义路由规则的时候写的名字不是router
    //那么在这里使用es6语法的时候必须要写成router：定义路由规则的名字)
    router,

    //render:function(create){
    //  return   create(app);
    //}//es5语法
    render:c=>c(app)//es6语法
})
