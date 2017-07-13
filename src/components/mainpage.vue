<template>
	<div>
        <home></home>
        <bulletin></bulletin>
        <about></about>
        <deal></deal>
        <why></why>
        <process></process>
        <contact></contact>
	</div>
</template>

<script>
    import home from './home.vue'
    import bulletin from './bulletin.vue'
    import about from './about.vue'
    import deal from './deal.vue'
    import products from './products.vue'
    import why from './why.vue'
    import knowledge from './knowledge.vue'
    import process from './process.vue'
    import contact from './contact.vue'
  
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
            why,
            process,
            contact
        }
    }
</script>