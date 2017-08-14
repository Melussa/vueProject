 <template>
	<div class="marginTop">
		<div class="title">	
			<h4 v-text="info.title"></h4>
			<p>{{info.add_time | datafmt('YYYY-MM-DD')}}   {{info.click}}</p>
		</div>
		<div id="content" text-html="info.content">	</div>
	</div>
 </template>
<script>
	export default{
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
				alert(1);
				var url = 'http://www.lovegf.cn:8899/api/getnew/' + this.id;
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
	.title,#content{
		padding: 5px;	
		box-sizing: border-box;
	}
	.title h4{
		color: #0094ff;
	}
	.title p{
		color: rgba(0, 0, 0, .5);
	}

</style>