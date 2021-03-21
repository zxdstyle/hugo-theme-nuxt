<template>
    <Welcome />
    <PageBlog />
    <PageFooter />
</template>

<script>
import Welcome from "./pages/components/PageHeader.vue"
import PageFooter from "./pages/components/PageFooter.vue"
import PageBlog from "./pages/PageBlog.vue"
export default {
    name: "App",
    components: { Welcome, PageFooter, PageBlog },
}
</script>
