export default {
    name: 'card-status',
    props: {
        color: {default: 'blue'}
    },
    template: `<div :class="className"><slot/></div>`,
    computed: {
        className () {
            const className = {'card-status': true}
            className[`bg-${this.color}`] = true
            return className
        }
    }
}
