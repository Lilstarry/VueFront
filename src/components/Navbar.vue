<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <img src="@/assets/images/Home-folder.png" width="40" height="40" alt="home-folder" id="btn-home" v-on:click="goToHome()">
                </li>
                <li class="nav-item active">
                    <img src="@/assets/images/Pre-folder.png" width="40" height="40" alt="pre-folder" id="btn-pre" v-on:click="goPreFolder()">
                </li>
                <li class="nav-item active">
                    <img src="@/assets/images/Add-folder.png" width="40" height="40" alt="add-folder" data-toggle="modal" data-target="#addFolderModal">
                </li>
                <li class="nav-item active">
                    <img src="@/assets/images/Add-text.png" width="40" height="40" alt="add-text" data-toggle="modal" data-target="#addTextModal">
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item active" >
                    <a href="#" class="nav-link"  data-toggle="modal" data-target="#loginModal">Log in</a>
                </li>
                <li class="nav-item active">
                    <a href="#" class="nav-link" data-toggle="modal" data-target="#registerModal">Register</a>
                </li>
            </ul>
        </div> 
    </nav>
</template>

<script>

    export default {
        name: 'Navbar',
        methods: {
            goToHome() {
                this.$router.push('/');
            },
            goPreFolder() {
                if(this.$route.params.id) {
                    this.$router.go(-1);
                    if(this.$route.params.id) this.$store.dispatch("getFolders", this.$route.params.id);
                    else this.$store.dispatch("getRoot");
                } 
            }
        }
    }
</script>