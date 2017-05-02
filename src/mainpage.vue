<template>
	<div>
        <home></home>
        <bulletin></bulletin>
        <about></about>
        <deal></deal>
        <products></products>
        <why></why>
        <knowledge></knowledge>
        <process></process>
        <contact></contact>
	</div>
</template>

<script>
    import home from './components/home.vue'
    import bulletin from './components/bulletin.vue'
    import about from './components/about.vue'
    import deal from './components/deal.vue'
    import products from './components/products.vue'
    import why from './components/why.vue'
    import knowledge from './components/knowledge.vue'
    import process from './components/process.vue'
    import contact from './components/contact.vue'

    export default {
        data () {
            return {
            }
        },
        
        components: {
            home,
            bulletin,
            about,
            deal,
            products,
            why,
            knowledge,
            process,
            contact
        }
    }
</script>
