import axios from "axios";

const cart = {
  namespaced: true,
  state: {
    cartData: [],
  },
  getters: {
    getCart: (state) => state.cartData,
  },
  actions: {
    async fetchCart({ commit }) {
      try {
        const dataCart = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts",
          {
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(dataCart.data);
        commit("SET_CART", dataCart.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CART(state, cart) {
      state.cartData = cart;
    },
  },
};

export default cart;
