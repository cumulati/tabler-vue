export default {
    name: 't-button',
    props: {
        size: {default: false},
        outline: {default: false},
        type: {default: 'primary'}
    },
    template: `<button :class="className" @click="e => $emit('click', e)"><slot>Button</slot></button>`,
    computed: {
        className () {
            const className = {btn: true}
            className[`btn-outline-${this.type}`] = this.outline
            className[`btn-${this.type}`] = !this.outline
            className[`btn-${this.size}`] = !!this.size
            return className
        }
    }
}
