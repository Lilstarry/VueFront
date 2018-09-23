<template>
    <div class="col-xs-12 col-md-4 col-lg-2 col-xl-1">
        <div v-on:click="open()" class="instance">
            <img src="@/assets/images/Catalog.png" alt="catalog icon" class="w-100">
            <span>{{info.title}}</span>
        </div>
        <div class="hidden">
            <div class="remover">
                 <img src="@/assets/images/Delete.png" @click="deleteRequest()" alt="delete icon" class="w-25">
            </div>
            <div class="editor">
                <img src="@/assets/images/Edit.png" v-on:click="edit()" alt="edit icon" class="w-25">
            </div>
        </div>
    </div>
</template>

<script>
import directory from "../services/folders"
export default {
    props: ["info"],
    name: "folderInstance",
    methods: {
        deleteRequest(){
            directory.delete(this.info.id)
                .then(response => {
                    if(this.$route.params.id) this.$store.dispatch("getFolders", this.$route.params.id);
                    else this.$store.dispatch("getRoot");
                })
                .catch(error => {
                    console.log("Delete catalog error");
                });
        },
        edit: () => {
            console.log("Editing");
        },
        open() {
            this.$router.push(`/folder/${this.info.id}`);
            this.$store.dispatch("getFolders", this.$route.params.id);
        }
    }
}
</script>

<style>
.col-md-4:hover .instance {
    opacity: 0.3;
  }

.col-md-4:hover .hidden {
    opacity: 1;
  }

.hidden {
    opacity: 0;
    position: relative;
    transform: translate(50%, -200%)
}
</style>
