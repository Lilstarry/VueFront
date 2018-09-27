<template>
    <div class="row text-center justify-content-center">
        <folder-instance @update="update()" v-for="(item, i) in getFolders.catalogs" :info="item" :key="i"/>
        <file-instance @update="update()" v-for="(item, i) in getFiles.messages" :info="item" :key="i"/>
    </div>
</template>

<script>
import folderInstance from "./folderInstance"
import fileInstance from "./fileInstance"
export default {
    name: "folder",
    components: {folderInstance, fileInstance},
    updated() {
        this.$store.dispatch("getFolders", this.$route.params.id);
        this.$store.dispatch("getFiles", this.$route.params.id);
    },
    methods: {
        update() {}
    },
    computed: {
        getFolders() { return this.$store.getters.folders; },
        getFiles() { return this.$store.getters.files; }
    }
}
</script>

<style>

</style>
