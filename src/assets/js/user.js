import { api } from "./shared";

export default {
    getRole: () => {
        return api().get("accounts");
    }
}