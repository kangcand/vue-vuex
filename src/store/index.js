import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import berita from "./modules/berita";
import product from "./modules/product";
import kategori from "./modules/kategori";
import auth from "./modules/auth";
import brand from "./modules/brand";
import cart from "./modules/cart";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    donatur,
    brand,
    clients,
    transaksi,
    berita,
    product,
    kategori,
    auth,
    cart,
  },
});

export default store;
