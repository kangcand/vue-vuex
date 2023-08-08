import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    donatur,
    clients,
    transaksi,
    users,
  },
});

export default store;