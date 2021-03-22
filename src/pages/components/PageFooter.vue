<template>
    <footer class="page-footer">
        <div class="container mx-auto px-4 px-4">
            <section id="subscribe-to-newsletter">
                <h2>
                    <span>Nuxt<span class="text-nuxt-lightgreen">JS</span></span> 电子报刊
                </h2>
                <p>将最新的 Nuxt 新闻发送到您的收件箱，这由 NuxtJS 团队策划。</p>
                <form data-cy="newsletter" class="flex flex-row justify-center mb-2">
                    <div>
                        <label for="news-email" class="hidden">邮箱</label>
                        <input id="news-email" type="email" required="required" placeholder="邮箱" aria-label="Newsletter" />
                    </div>
                    <input type="submit" name="subscribe" value="订阅" class="" />
                </form>
            </section>
        </div>
        <div class="footer-menu">
            <div class="container mx-auto px-4">
                <div class="menu-body">
                    <nav>
                        <h3>发现</h3>
                        <ul>
                            <li><a href="/team">我们团队</a></li>
                            <li><a href="/design">设计套件</a></li>
                            <li><a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener noreferrer">联系我们</a></li>
                        </ul>
                    </nav>
                    <nav class="sm:text-center">
                        <h3>关于</h3>
                        <ul>
                            <li><a href="/resources">资源</a></li>
                            <li>
                                <a href="https://discord.nuxtjs.org" target="_blank" rel="noopener noreferrer">与我们聊天</a>
                            </li>
                            <li>
                                <a href="https://github.com/nuxt/nuxtjs.org/blob/main/content/en/_archives/guide/contribution-guide.md" target="_blank" rel="noopener noreferrer">
                                    贡献指南
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav class="sm:text-right">
                        <h3>支持</h3>
                        <ul>
                            <li><a href="/shop">我们的杂货店</a></li>
                            <li><a href="/sponsor-nuxtjs">赞助与捐赠</a></li>
                            <li><a href="/support">培训与咨询</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="operate">
                <div class="operate-box">
                    <div class="flex-1 flex">
                        <button class="theme-mode" id="themeBtn">
                            <span class="relative mr-2 overflow-hidden inline-block w-5 h-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="hidden w-5 h-5 absolute" id="dark-btn">
                                    <path
                                        fill="currentColor"
                                        d="M20.3542 15.3542L21.2821 15.7271C21.4314 15.3554 21.3446 14.9304 21.0613 14.6471C20.778 14.3639 20.353 14.277 19.9813 14.4264L20.3542 15.3542ZM8.64581 3.64587L9.57369 4.01876C9.72307 3.64704 9.6362 3.22204 9.35292 2.93877C9.06964 2.65549 8.64465 2.56861 8.27293 2.718L8.64581 3.64587ZM19.9813 14.4264C19.0613 14.7961 18.0557 15.0001 17 15.0001V17.0001C18.3155 17.0001 19.5739 16.7455 20.7271 16.2821L19.9813 14.4264ZM17 15.0001C12.5817 15.0001 9 11.4183 9 7.00006H7C7 12.5229 11.4772 17.0001 17 17.0001V15.0001ZM9 7.00006C9 5.94438 9.20396 4.93879 9.57369 4.01876L7.71794 3.27299C7.25452 4.42612 7 5.6846 7 7.00006H9ZM4 12.0001C4 8.6372 6.07526 5.75664 9.0187 4.57375L8.27293 2.718C4.59771 4.19496 2 7.79294 2 12.0001H4ZM12 20.0001C7.58172 20.0001 4 16.4183 4 12.0001H2C2 17.5229 6.47715 22.0001 12 22.0001V20.0001ZM19.4263 14.9814C18.2434 17.9248 15.3629 20.0001 12 20.0001V22.0001C16.2071 22.0001 19.8051 19.4024 21.2821 15.7271L19.4263 14.9814Z"
                                    ></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="hidden w-5 h-5 absolute" id="light-btn">
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604M18.364 5.63609L17.6569 6.3432M6.3432 17.6569L5.63609 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                    ></path>
                                </svg>
                            </span>
                            <span class="inline-block font-medium mr-1">Light</span>
                        </button>
                    </div>
                    <div class="flex-1 text-center hidden sm:block">
                        <a href="https://url.netlify.com/B1Mh093Iv" target="_blank" rel="noopener" class="inline-block">
                            <!--                            <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" alt="Deploys by Netlify" class="h-10" />-->
                        </a>
                    </div>
                    <div class="flex-1 text-right">
                        <div value="zh" class="inline-block transition-colors duration-300 ease-linear bg-gray-200 rounded-full nui-select text-nuxt-gray dark:bg-dark-surface dark:text-dark-onSurfaceSecondary">
                            <div class="flex items-center content-center px-4">
                                <div class="-mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-current">
                                        <path
                                            fill-rule="nonzero"
                                            d="M8 0C3.58064516 0 0 3.58064516 0 8c0 4.4193548 3.58064516 8 8 8 4.4193548 0 8-3.5806452 8-8 0-4.41935484-3.5806452-8-8-8zm6.2322581 4.90322581h-2.6612904c-.2903225-1.43225807-.7774193-2.65161291-1.3935483-3.51935484 1.7741935.58709677 3.232258 1.86774193 4.0548387 3.51935484zM10.8387097 8c0 .73870968-.0516129 1.42580645-.1387097 2.0645161H5.3C5.21290323 9.42580645 5.16129032 8.73870968 5.16129032 8c0-.73870968.05161291-1.42580645.13870968-2.06451613h5.4c.0870968.63870968.1387097 1.32580645.1387097 2.06451613zM8 1.03225806c.86774194 0 1.98064516 1.42258065 2.5193548 3.87096775H5.48064516C6.01935484 2.45483871 7.13225806 1.03225806 8 1.03225806zm-2.17741935.35161291c-.61290323.86451613-1.10322581 2.08387097-1.39354839 3.51935484H1.76774194C2.59032258 3.2516129 4.0483871 1.97096774 5.82258065 1.38387097zM1.03225806 8c0-.71935484.10967742-1.41290323.31290323-2.06451613h2.91935484C4.18064516 6.59677419 4.12903226 7.28387097 4.12903226 8c0 .71612903.04838709 1.40322581.13548387 2.0645161H1.34516129C1.14193548 9.41290323 1.03225806 8.71935484 1.03225806 8zm.73548388 3.0967742h2.66129032c.29032258 1.4322581.77741935 2.6516129 1.39354839 3.5193548-1.77419355-.5870967-3.23225807-1.8677419-4.05483871-3.5193548zM8 14.9677419c-.86774194 0-1.98064516-1.4225806-2.51935484-3.8709677h5.03870964C9.98064516 13.5451613 8.86774194 14.9677419 8 14.9677419zm2.1774194-.3516129c.6129032-.8645161 1.1032258-2.0838709 1.3935483-3.5193548h2.6612904c-.8225807 1.6516129-2.2806452 2.9322581-4.0548387 3.5193548zm1.5580645-4.5516129c.0838709-.66129029.1354838-1.34838707.1354838-2.0645161s-.0483871-1.40322581-.1354838-2.06451613h2.9193548c.2032258.6516129.3129032 1.34516129.3129032 2.06451613 0 .71935484-.1096774 1.41290323-.3129032 2.0645161h-2.9193548z"
                                        ></path>
                                    </svg>
                                </div>
                                <select aria-label="Select language" value="zh" class="z-10 h-10 pl-6 pr-8 font-medium bg-transparent appearance-none cursor-pointer focus:outline-none">
                                    <option value="en" class="dark:text-dark-surface"> English </option>
                                    <option value="fr" class="dark:text-dark-surface"> Français </option>
                                    <option value="zh" class="dark:text-dark-surface"> 简体中文 </option>
                                    <option value="ja" class="dark:text-dark-surface"> 日本語 </option>
                                    <option value="ko" class="dark:text-dark-surface"> 한국어 </option>
                                    <option value="ru" class="dark:text-dark-surface"> Русский </option>
                                    <option value="id" class="dark:text-dark-surface"> Indonesian </option>
                                    <option value="pt" class="dark:text-dark-surface"> Português </option>
                                    <option value="es" class="dark:text-dark-surface">Español</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" class="fill-current -ml-4">
                                    <path
                                        fill-rule="evenodd"
                                        d="M6.35416667 7.825L.1875 1.70833333C-.00833333 1.5125-.00833333 1.19583333.1875 1l.825-.825c.19583333-.19583333.5125-.19583333.70833333 0l4.9875 4.9375L11.6958333.175c.1958334-.19583333.5125-.19583333.7083334 0l.825.825c.1958333.19583333.1958333.5125 0 .70833333L7.0625 7.825c-.19583333.19583333-.5125.19583333-.70833333 0z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "PageFooter",
}
</script>

<style lang="scss">
.page-footer {
    @apply z-10 relative pb-16 lg:pb-0 lg:block;

    #subscribe-to-newsletter {
        @apply px-3 py-8 -mx-4 text-center rounded-t-lg lg:mx-0;

        & > h2 {
            @apply mb-2 text-3xl font-medium transition-colors duration-300 ease-linear text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary;
        }
        & > p {
            @apply mb-6 transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary;
        }
        & > form {
            input#news-email {
                @apply w-48 px-4 py-3 font-medium border border-r-0 rounded rounded-r-none outline-none md:w-64 bg-light-elevatedSurface text-light-onSurfacePrimary focus:border-primary-base;
            }
            input[name="subscribe"] {
                @apply inline-block px-4 py-2 text-sm text-base font-medium text-white uppercase rounded rounded-l-none shadow cursor-pointer bg-primary-base hover:bg-primary-light hover:shadow-md;
            }
        }
    }

    .footer-menu {
        @apply bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear;

        .menu-body {
            @apply flex flex-col sm:flex-row text-center sm:text-left items-center content-center justify-between pt-10 sm:py-10;

            & > nav {
                @apply flex-1 w-full sm:w-auto mb-8 sm:mb-0;

                h3 {
                    @apply font-bold uppercase text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-lg pb-4 transition-colors duration-300 ease-linear;
                }

                ul {
                    @apply text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear;

                    li {
                        @apply py-2;

                        a {
                            @apply hover:text-nuxt-lightgreen;
                        }
                    }
                }
            }
        }
    }

    .operate {
        @apply lg:border-t border-light-border dark:border-dark-border transition-colors duration-300 ease-linear;

        .operate-box {
            @apply container mx-auto px-4 flex flex-row items-center content-center justify-between py-4;

            .theme-mode {
                @apply relative overflow-hidden px-4 flex items-center bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary rounded-full h-10 outline-none text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear;
            }
        }
    }
}
</style>
