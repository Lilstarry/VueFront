<template>
    <section class="addText-modals-wrapper">
        <div class="modal fade" id="addTextModal" tabindex="-1" role="dialog" >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="TextModalLabel">Add file</h4>
                        <button class="close" type="button" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <form>
                                <div class="form-group">
                                    <label for="InputTitle">Enter file's title</label>
                                    <input type="title" class="form-control" id="InputTextTitle" placeholder="Title" required>
                                </div>
                                <button @click="createFile()" type="submit" class="btn btn-primary" id="btn-createText" data-dismiss="modal">Create</button>
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
import message from "../services/files";
export default {
    name: 'AddTextModal',
    data: () => ({
        fileTitle: ""
    }),
    methods: {
        // async createFile() {
        //     const createResult = message.create("", this.$route.params.id, this.folderTitle)
        //     .then(response => {
        //         console.log("xyRce");
        //         this.$route.dispatch("user/LOAD_FILES", this.$route.params.id);
        //     })
        //     .catch(error => {
        //         console.log("New file error");
        //     })
        // }
    }
}
</script>

<style>
</style>
