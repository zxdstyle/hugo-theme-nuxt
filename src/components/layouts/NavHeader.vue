<template>
    <header class="navigation">
        <div class="container">
            <nav class="navbar">
                <a class="navbar-brand" href="/godocs/style-1">
                    <img class="img-fluid" src="https://demo.gethugothemes.com/godocs/style-1/images/logo.png" alt="Hugo documentation theme" />
                </a>
                <div class="nav-menu">
                    <ul>
                        <li><a href="https://demo.gethugothemes.com/godocs/style-1/">Home</a></li>
                        <li><a href="https://github.com/themefisher/">Github</a></li>
                        <li class="link">
                            <select class="language">
                                <option id="en" value="https://demo.gethugothemes.com/godocs/style-1/" selected="">En</option>
                                <option id="fr" value="https://demo.gethugothemes.com/godocs/style-1/fr/">Fr</option>
                            </select>
                        </li>
                    </ul>
                    <div>
                        <a href="https://demo.gethugothemes.com/godocs/style-1/changelog" class="btn btn-sm btn-outline-primary ml-lg-4">changelog</a>
                        <a href="https://demo.gethugothemes.com/godocs/style-1/contact" class="btn btn-sm btn-primary ml-4">contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "NavHeader",
}
</script>
