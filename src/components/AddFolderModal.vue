<template>
    <section class="addFolder-modals-wrapper">
        <div class="modal fade" id="addFolderModal" tabindex="-1" role="dialog" >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="FolderModalLabel">Add folder</h4>
                        <button class="close" type="button" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <form>
                                <div class="form-group">
                                    <label for="InputTitle">Enter folder's title</label>
                                    <input v-model="folderTitle" type="title" class="form-control" id="InputFolderTitle" placeholder="Title" required>
                                </div>
                                <button @click="createFolder()" type="submit" class="btn btn-primary" id="btn-createFolder" data-dismiss="modal">Create</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import directory from "../services/folders";
export default {
    name: 'AddFolderModal',
    data: () => ({
        folderTitle: ""
    }),
    methods: {
        async createFolder() {
            const createResult = await directory.create(this.folderTitle, this.$route.params.id)
                .then(response => {
                    if(this.$route.params.id) this.$store.dispatch("getFolders", this.$route.params.id);
                    else this.$store.dispatch("getRoot");
                })
                .catch(error => {
                    console.log("New folder error");
                })
        }
    }

}

</script>

<style>
</style>
