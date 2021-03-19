<template>
    <footer class="pt-6">
        <div class="container mx-auto">
            <div class="footer-body">
                <ul class="flex menu">
                    <li><a href="https://demo.gethugothemes.com/godocs/style-1/changelog">Changelog</a></li>
                    <li><a href="https://demo.gethugothemes.com/godocs/style-1/contact">contact</a></li>
                    <li><a href="https://github.com/themefisher/">Github</a></li>
                </ul>
                <a class="navbar-brand" href="/godocs/style-1"><img class="img-fluid" src="https://demo.gethugothemes.com/godocs/style-1/images/logo.png" alt="Hugo documentation theme"/></a>
                <ul class="flex">
                    <li class="mr-2">
                        <a class="btn btn-xs btn-primary" href="#"><i data-feather="facebook"></i></a>
                    </li>
                    <li class="mr-2">
                        <a class="btn btn-xs btn-primary" href="#"><i data-feather="mail"></i></a>
                    </li>
                    <li>
                        <a class="btn btn-xs btn-primary" href="#"><i data-feather="github"></i></a>
                    </li>
                </ul>
            </div>
            <div class="py-4 text-center">
                <small class="text-gray-500">Copyright © 2020 a hugo theme by <a href="https://themefisher.com" class="underline">themefisher</a></small>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "PageFooter",
}
</script>

<style lang="less">
footer {
    .footer-body {
        @apply flex items-center py-5 border-b border-solid border-gray-200 justify-between;

        & > ul.menu > li:not(:last-child) {
            margin-right: 2rem;
        }
    }
}
</style>
