<template>
    <section class="section pb-0">
        <div class="container mx-auto">
            <div class="flex">
                <div class="w-2/3 flex flex-col justify-between">
                    <h1>Documentation Theme By Themefisher Team</h1>
                    <p>Lorem ipsum dolor amet, consetetur sadiffspscing elitr, diam nonumy invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua At.</p>
                    <form class="search-wrapper" action="/godocs/style-1/search">
                        <input id="search-by" name="s" type="search" placeholder="Search Here..." autocomplete="off" />
                    </form>
                </div>
                <div class="w-1/3 flex justify-center">
                    <img loading="lazy" src="https://demo.gethugothemes.com/godocs/style-1/images/banner.jpg" alt="illustration" style="height: 283px" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SearchSection",
}
</script>

<style lang="less">
.section {
    @apply py-20;

    .search-wrapper {
        @apply relative;

        &:focus {
            outline: none;
            border: none;
        }

        & > input {
            height: 70px;
            padding: 0.5rem 1rem;
            color: #495057;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            box-shadow: 0 15px 60px rgb(62 62 62 / 10%);
            font-size: 1.25rem;
            line-height: 1.5;
            border-radius: 0.3rem;

            @apply block w-full rounded border-0 bg-clip-padding bg-white text-base font-normal;

            &:focus,
            &:hover {
                outline: none;
                box-shadow: 0 15px 60px rgb(62 62 62 / 20%);
            }
        }
    }
}
</style>
