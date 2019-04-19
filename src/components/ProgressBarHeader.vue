<template>
	<div class="clearfix">
		<div class="float-left">
			<strong>
				<slot/>
			</strong>
		</div>
		<div class="float-right" v-if="title">
			<small class="text-muted">Complete</small>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProgressBarHeader',

	props: {
		title: { default: false }
	}
}
</script>
