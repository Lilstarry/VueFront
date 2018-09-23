import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import directory from "../services/folders";
import Root from "../components/Root"
Vue.use(Vuex);

const state = {
    folders: [],
    files: [],
    currentFolderId: null,
    root: [],
}

const getters= {
    root: state => {
        return state.root;
    },
    folders: state => {
        return state.folders
    },
    files: state => {
        return state.files
    }
}

const actions= {
    getRoot: async(context) => {
        const getRootResult = await directory.getRoot()
            .then(response => {
                context.state.root = response.data;
            })
            .catch(error => {
                console.log("Failed to load root");
            });
    },
    getFolders: async(context, payload) => {
        const getFoldersResult = await directory.getFolders(payload)
            .then(response => {
                context.state.folders = response.data;
            })
            .catch(error => {
                console.log("Failed to get folders");
            });
    },
    getFiles: async(context, payload) => {
        const getFoldersResult = await directory.getFiles()
            .then(response => {
                console.log("Got folders");
            })
            .catch(error => {
                console.log("Failed to get folders");
            });
    }
}

const mutations= {

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})
