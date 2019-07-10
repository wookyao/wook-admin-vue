<template>
	<div ref='wrapper' class="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
	name: 'ScrollView',
	props: {
		probeType: {
			type: Number,
			default: 1
		},
		click: {
			type: Boolean,
			default: true
		},
		bounce: {
			type: Boolean,
			default: true
		},
		torefresh: {
			type: String,
			default: ''
    },
    wheel: {
      type: Boolean,
      default: true
		},
		scrollX: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
		this.$nextTick(()=> {
			this._initScroll()
		})
	},
	methods: {
		_initScroll() {
			if(!this.$refs.wrapper) return;
			let opts = {
				probeType: this.probeType,
				click: this.click,
        bounce: this.bounce,
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false // 1.8.0 新增
        },
			}

			if (this.scrollX) {
				opts = {
					...opts,
					scrollX: true,
					scrollY: false
				}
			}

			this.scroll = new BScroll(this.$refs.wrapper, opts)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
	},
	watch: {
		torefresh() {
			setTimeout(()=> {
				this.refresh()
			}, 2000)
		}
	}
}
</script>

<style scoped lang="scss">
.wrapper {
	overflow: hidden;
	height: 100%;
}
</style>
