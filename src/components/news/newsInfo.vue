 <template>
	<div class="marginTop">
		<!-- 实现新闻详情 -->
		<div class="title">	
			<h4 v-text="info.title"></h4>
			<p>{{info.add_time | datafmt('YYYY-MM-DD')}}   {{info.click}}</p>
		</div>
		<div id="content" v-html="info.content"></div>
		<!-- 使用评论组件 -->
		<comment :id='id'></comment>
	</div>
 </template>
<script>
	//01 导入评论组件
	import comment from '../subCom/comment.vue';

	export default{
		components:{
			// 注册平路组件
			comment
		},
		data(){
			return {
				id:0,//传入的id值
				info:{}
			};
		},
		created(){
			this.id = this.$route.params.id;
			this.getNew();
		},
		methods:{
			getNew:function(){
				var url = this.$common.aipdomain + '/api/getnew/' + this.id;
				this.$http.get(url).then(function(response){
					if(response.body.status !== 0){
						Toast(response.body.message);
						return;
					}
					this.info = response.body.message[0];
				})
			}
		}

	}
</script>

<style scoped>
	.marginTop{
		padding: 15px;	
		box-sizing: border-box;
	}
	/* #content p {
		color: #000 !important;
	} */
	.title h4{
		color: #0094ff;
	}
	.title p{
		color: rgba(0, 0, 0, .5);
	}
</style>