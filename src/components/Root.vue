<template>
    <div class="row text-center justify-content-center">
        <folder-instance @update="update()" v-for="(item, i) in rootFolder" :info="item" :key="i"/>
    </div>
</template>

<script>
import folderInstance from "./folderInstance"
export default {
    name: "root",
    components: {folderInstance},
    mounted() {
        this.$store.dispatch("getRoot");
    },
    methods: {
        update() {
            
        }
    },
    computed: {
        rootFolder() {
            return this.$store.getters.root;
        }
    }
}
</script>

<style>

</style>
