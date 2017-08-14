   <template>
		<div class="marginTop">
			<!-- 01 提交平路数据到服务器的结构 -->
			<div id="postcontent">
				<h3 class="titleSend">发表评论</h3>
				<hr>
				<textarea placeholder="请输入您要评论的内容" cols="5" rows="10" v-model = "postcontent"></textarea>
				<div class="btn">
					<button type="button" class="mui-btn mui-btn-primary" @click = "addComment">提交评论</button>
				</div>
			</div>
			<!-- 02 显示评论列表 -->
			<div id="list">
				<div class="title">评论详情</div>
				<ul class="mui-table-view">
					 <li class="mui-table-view-cell" v-for="(item,index) in list" :key="index">
					 	<p>第{{index + 1}}楼</p>
					 	<p class="content" v-text='item.content'></p>
					 	<p>
					 		<span class="userName" v-text="item.user_name"></span>
					 		<span class="addTime">{{item.add_time | datafmt('YYYY-MM-DD : HH-mm-ss')}}</span>
					 	</p>
					 </li>
				</ul>
			</div>

		</div>
   </template>
	<script>
		import {Toast} from 'mint-ui';
		export default{
			data(){
				return {
					postcontent:'',//用来获取用户填写的评论内容,
					list:[]
				}
			},
			created(){
				this.getcomment();
			},
			props:['id'],
			methods:{
				//提交评论数据
				addComment:function(){
					var url = this.$common.aipdomain +
					 '/api/postcomment/' + this.id;
					 this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function(response){
					 	if(this.postcontent == ''){
					 		return;
					 	}
					 	response.body.content = this.postcontent;
					 	Toast(response.body.message);
					 	this.postcontent = '';
					 	this.getcomment();
					 }) 
				},
				getcomment:function(pageindex){
					pageindex = pageindex || 1;//如果没有值就默认为1
					var url = this.$common.aipdomain + '/api/getcomments/' + this.id + '?' + 'pageindex=' + pageindex;
					this.$http.get(url).then(function(response){
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
		h3.titleSend{
			margin-bottom: 15px;
		}
		textarea{
			height: 100px;
			margin-bottom: 5px;
		}
		.btn{
			text-align: right;
		}
		.title{
			margin-top: 20px;
			background-color: rgba(0, 0, 0, .1);
			line-height: 40px;
		}
		#list .content{
			font-size: 20px;
			color: #000;
			line-height: 40px;	
		}
		#list .userName,
		#list .addTime{
			display: inline-block;
			width: 49.5%;
			box-sizing: border-box;
		}
		#list .userName{
			text-align: left;
		}
		#list .addTime{
			text-align: right;
		}
	</style>