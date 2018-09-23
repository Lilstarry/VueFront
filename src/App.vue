<template>
  <div>
    <Navbar/>
    <div class="Folder"><router-view/></div>
    <AuthModal/>
    <AddFolderModal/>
    <AddTextModal/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import AddFolderModal from "./components/AddFolderModal"
import AddTextModal from "./components/AddTextModal"
export default {
  name: 'App',
  components: {
    Navbar,
    AuthModal,
    AddFolderModal,
    AddTextModal
  }
}
</script>

<style>
</style>
