<template>
	<div class="marginTop">
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(item ,index) in list" :key="index">
				<img :src="item.img" alt="加载失败">
		  </mt-swipe-item>
		</mt-swipe>

		<!-- 九宫格 -->
		<div class="mui-content">
		   <ul class="mui-table-view mui-grid-view mui-grid-9">
		       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		       		<router-link to="/news">
		               <span class="mui-icon mui-icon-home"></span>
		               <div class="mui-media-body">新闻资讯</div>
		        	</router-link>
		        </li>
		       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		       		<router-link to="/shareImg">
		               <span class="mui-icon mui-icon-email"></span>
		               <div class="mui-media-body">图片分享</div>
		            </router-link>
		        </li>
		       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		       		<router-link to="/buyPro">
		               <span class="mui-icon mui-icon-chatbubble"></span>
		               <div class="mui-media-body">商品购买</div>
		            </router-link>
		        </li>
		       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		       		<router-link to="/feedback">
		               <span class="mui-icon mui-icon-location"></span>
		               <div class="mui-media-body">留言反馈</div>
		            </router-link>
		        </li>
		       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		       		<router-link to="/vedio">
		               <span class="mui-icon mui-icon-search"></span>
		               <div class="mui-media-body">视频专区</div>
		            </router-link>
		        </li>
		       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		       		<router-link to="callMe">
		               <span class="mui-icon mui-icon-phone"></span>
		               <div class="mui-media-body">联系我们</div>
		            </router-link>
		        </li>
		   </ul> 
		</div>

	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	import common from '../../kits/common.js' 
	export default{
		data(){
			return {
				list:[]
			}
		},
		created:function(){
			this.getImg();
		},
		methods:{
			getImg:function(){
				var url = common.aipdomain + '/api/getlunbo';
				this.$http.get(url).then(function(response){
					if(response.body.status != 0){
						Toast(response.body.message);
						return;
					}
					this.list = response.body.message;

				})
			}
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 300px;
	}
	.mint-swipe-item img{
		width: 100% ;
		height: 100%;
	}
	.mint-swipe-item{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9{
		background-color: #fff;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: none;
	}
	.mui-grid-view.mui-grid-9{
		border: none;
	}
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: '';
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
	}
	.mui-icon-home:before{
		background-image: url('../../../static/imgs/1.png');
	}
	.mui-icon-email:before{
		background-image: url('../../../static/imgs/2.png');
	}
	.mui-icon-chatbubble:before{
		background-image: url('../../../static/imgs/3.png');
	}
	.mui-icon-location:before{
		background-image: url('../../../static/imgs/4.png');
	}
	.mui-icon-search:before{
		background-image: url('../../../static/imgs/5.png');
	}
	.mui-icon-phone:before{
		background-image: url('../../../static/imgs/6.png');
	}
</style>