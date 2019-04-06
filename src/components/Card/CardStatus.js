export default {
    name: 'card-status',
    props: {
        color: {default: 'blue'},
        left: {default: false, type: Boolean},
    },
    template: `<div :class="className"><slot/></div>`,
    computed: {
        className () {
            const className = {'card-status': true}
            className[`bg-${this.color}`] = true
            className['card-status-left'] = this.left !== false
            return className
        }
    }
}
