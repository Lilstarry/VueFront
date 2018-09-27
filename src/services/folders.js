import {api} from "./api";

export default {
    delete: (id) => {
        return api().delete(`catalogs/${id}`);
    },

    edit: (id, title, directory) => {
        return api().put(`catalogs/${id}`, JSON.stringify({title, directory}));
    },

    create: (title, directory) => {
        return api().post("catalogs", JSON.stringify({title, parentCatalogId: directory}));
    },

    getFolders: (id) => {
        return api().get(`catalogs/getcatalog/${id}`);
    },

    getRoot: () => {
        return api().get("catalogs/getroots");
    },

    getFiles: (id) => {
        return api().get(`catalogs/getmessages/${id}`);
    }
}
