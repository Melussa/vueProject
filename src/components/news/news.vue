<template>
	<div class="marginTop">
		<!-- 实现新闻资讯列表 -->
		<ul class="mui-table-view">
			<li v-for="(item,index) in list" :key="index" class="mui-table-view-cell mui-media">
				<router-link v-bind = "{to:'/newsInfo/' + item.id}" >
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<p v-text="item.title" class="title"></p>
						<p class='mui-ellipsis' v-text="item.zhaiyao"></p>
					</div>
					<div class="ft">
						<span>发布时间{{item.add_time | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
						<span>点击数：{{item.click}}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	// import common from '../../kits/common.js';
	export default{
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.getList();
		},
		methods:{
			//獲取API中的新聞資訊
			getList(){
				var url = this.$common.aipdomain + '/api/getnewslist';
				this.$http.get(url).then(function(response){
					//获取相应报文的数据
					if(response.body.status !== 0){
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
	.mui-table-view .mui-media-object{
		width: 80px;
		height: 80px;
		max-width: 80px;
		line-height: 80px;
	}
	.mui-table-view-cell p{
		color: #000;
	}
	.mui-table-view-cell .title{
		font-size: 18px;
	}
	.ft{
		color: #0094ff;
		font-size: 14px;
		margin-top: 1.5em;
	}
	.ft span{
		display: inline-block;
		width: 49.5%;
	}
	.ft span:nth-child(1){
		text-align: left;
	}
	.ft span:nth-child(2){
		text-align: left;
	}
</style>
