<template>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="text-center">
            <span class="font-bold text-4xl">All Brands</span>
        </div>
        <div class="grid grid-cols-4 gap-3 mt-8 gap-x-6 gap-y-12 sm:grid-cols-2">

            <div v-for="brands in getBrands.data.slice(0, 8)" :key="brands.id">
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        :src="brands.logo" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ brands.name }}
                        </h5>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
      
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters('brand', ['getBrands']),
    },
    methods: {
        ...mapActions('brand', ['fetchBrands'])
    },
    created() {
        this.fetchBrands();
    },
}
</script>