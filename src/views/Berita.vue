<template>
    <section class="py-10">
        <h1 class="mb-12 text-center font-sans text-5xl font-bold">Our Blog</h1>
        <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">

            <article v-for="news in getNews" :key="news.key"
                class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                <a href="#">
                    <img :src="news.thumb" class="h-56 w-full object-cover" alt="" />
                    <div class="flex-auto px-6 py-5">
                        <span class="mb-2 flex items-center text-sm font-semibold">
                            <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"
                                height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" />
                            </svg>
                            {{ news.tag }}</span>
                        <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{{ news.title }}</h3>
                        <p class="mb-4 text-base font-light">{{ news.desc }}</p>
                        <span
                            class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Learn
                            More</span>
                    </div>
                </a>
            </article>
        </div>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('berita', ['getNews']),
    },
    methods: {
        ...mapActions('berita', ['fetchNews']),
        getImageStyle(imageURL) {
            return {
                'background-image': `url('${imageURL}')`,
                'background-size': 'cover',
                'background-position': 'center',
            };
        },
    },
    created() {
        this.fetchNews();
    },
}
</script>

<style></style>