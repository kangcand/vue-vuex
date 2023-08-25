<template>
    <div class="container mx-auto p-4">
        <h2 class="text-2xl font-semibold mb-4">Profile Page</h2>
        <div v-if="user">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("auth", ["getUser"]),
        user() {
            return this.getUser;
        },
    },
    methods: {
        ...mapActions("auth", ["getUserInfo"]),
    },
    async mounted() {
        // Fetch user information
        const user = await this.getUserInfo();

        // If user information is retrieved, update the store
        if (user) {
            this.$store.commit("auth/SET_USER", user);
        }
    },
};
</script>
