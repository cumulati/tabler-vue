export default {
    name: 'status-icon',
    props: {
        color: {default: 'blue'},
    },
    template: `<span :class="className"></span>`,
    computed: {
        className () {
            const className = {'status-icon': true}
            className[`bg-${this.color}`] = true
            return className
        }
    }
}
