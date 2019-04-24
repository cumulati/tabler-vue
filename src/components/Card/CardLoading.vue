<template>
	<card-body>
		<div class="dimmer active">
			<div class="loader"></div>
				<div class="dimmer-content">
					<slot/>
				</div>
			</div>
	</card-body>
</template>

<script>
	import CardBody from "./CardBody.vue";

    export default {
		name: "card-loading",
		components: {
			CardBody
		}
    }
</script>

<style scoped>

</style>
