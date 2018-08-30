<template>
	<div>
		<h2>购物车计数</h2>
		<div :key="item.id" v-for="item in shopList">
			<button @click="reduce(item.id)">-</button>
			<span>{{item.count}}</span>
			<button @click="add(item.id)">+</button>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			shopList(){
				return this.$store.state.shopList;
			}
		},
		methods: {
			add(id) {
				/*this.$store.commit('updatedCountById', {
					id
				})*/
				this.$store.dispatch('updateCountAction',{
					id
				})
			},
			reduce(id) {
				this.$store.commit('reduceCountById', {
					id
				})
			}
		}
	}
</script>