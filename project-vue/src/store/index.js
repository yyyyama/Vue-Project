import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//mock数据
const shopList = [
	{
		id: 123,
		count: 2,
	},
	{
		id: 456,
		count: 3
	}
]

//定义store
//vuex中的状态是响应的

let store = new Vuex.Store({
	//定义应用的单一状态书,用一个对象就包含了全部的应用层级转态
	state: {
		shopList		//定义一个状态
	},

	//getter(派发的状态): 抽离操作转态的逻辑,可被多组件使用
	getters : {
		totals(state){
			//reduce 数组的方法
			//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值,0表示和初始值为0.
			return state.shopList.reduce((n,item) => n + item.count,0)
		}
	},

	//要使改变状态可被记录,必须要commit一个mutation; mutation必须是同步更新转态.
	mutations: {
		//只要提交mutation就有记录,如果mutation中有异步操作,记录的还是之前的值
		updatedCountById(state,payload) {	//改变state状态
			
			/*setTimeout(() => {
				let item = state.shopList.find(item => item.id == payload.id)
				item.count += 1;
			},3000);*/

			let item = state.shopList.find(item => item.id == payload.id);
			item.count += 1;
			
		},
		reduceCountById(state,payload) {
			let item = state.shopList.find(item => item.id == payload.id)
			console.log(payload)
			if(item.count <= 0 ){
				alert('数量不能少于0');
				return false;
			}
			item.count -=1;
		}
	},
	actions: {
		updateCountAction(store, parmas) {
			//异步操作放在这里
			setTimeout(() => {
				store.commit('updatedCountById', parmas)
			},1000)
		}
	}
})

export default store