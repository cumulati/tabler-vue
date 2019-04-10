export default {
    name: 'r-link',
    props: {
        to: {default: true},

        btn: {default: false, type: Boolean},
        size: {default: false, type: String},
        outline: {default: false, type: Boolean},
        type: {default: 'primary'},
    },
    template: `<router-link :class="className" :to="to"><slot>Link</slot></router-link>`,
    computed: {
        className () {
            const className = {}

            if (this.btn !== false) {
                className['btn'] = true
                className[`btn-outline-${this.type}`] = this.outline
                className[`btn-${this.type}`] = !this.outline
                className[`btn-${this.size}`] = !!this.size
            }

            return className
        }
    }
}
