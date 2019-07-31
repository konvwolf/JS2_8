import cart from './CartComp.js'
import products from './ProdComp.js'
import error from './ErrorComp.js'
import filter from './FilterComp.js'

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json'
    },
    components: {cart, products, error, filter},
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        },
        postJson (url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        },
        putJson (url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify (data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error)
                    console.log(error)
                })
        }        
    }
})

export default app