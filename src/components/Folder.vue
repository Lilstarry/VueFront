<template>
    <div class="row text-center justify-content-center">
        <folder-instance @update="update()" v-for="(item, i) in getFolders.catalogs" :info="item" :key="i"/>
    </div>
</template>

<script>
import folderInstance from "./folderInstance"
export default {
    name: "folder",
    components: {folderInstance},
    mounted() {
        this.$store.dispatch("getFolders", this.$route.params.id);
    },
    methods: {
        update() {

        }
    },
    computed: {
        getFolders() {
            return this.$store.getters.folders;
        }
    }
}
</script>

<style>

</style>
