import {api} from "./api";

export default {
    delete: (id) => {
        return api().delete("messages/" + id);
    },

    edit: (id, text, directory, subject) => {
        return api().put("messages/" + id, JSON.stringify({text, directory, subject}));
    },

    create: (text, CatalogId, subject) => {
        return api().post("messages",  JSON.stringify({text, CatalogId, subject}));
    },

    get: (id) => {
        return api().get("messages/" + id);
    }
}