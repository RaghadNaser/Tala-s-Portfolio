<script setup>
    import { ref, onMounted } from 'vue';

    let mobileNav = ref(false);
    let scrolled = ref(false);

    let toggleMobileNav = () => {
        mobileNav.value = !mobileNav.value
    }

    onMounted(() => {
        window.addEventListener('scroll', () => {
            scrolled.value = window.scrollY > 50;
        });
    });
</script>

<template>
    <!-- Navbar Start -->
    <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'blur-bg' : 'bg-transparent']">
        <div class="container mx-auto px-6">
            <header class="flex justify-between py-6 items-center">
                <div class="hero-animation">
                    <a href="#" class="text-2xl font-bold gradient-text font-['Playfair_Display']">
                        Tala Sinno
                    </a>
                </div>
                
                <div class="flex justify-end flex-col md:flex-row">
                    <!-- Menu Toggler -->
                    <button @click="toggleMobileNav()" type="button" class="flex md:hidden focus:outline-none text-white">
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>

                    <!-- Desktop Menu -->
                    <ul class="space-x-8 font-medium items-center hidden md:flex">
                        <li class="text-white hover:text-purple-400 transition duration-300 relative group magnetic">
                            <a href="#about" v-smooth-scroll class="interactive-element">About</a>
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-purple transition-all duration-300 group-hover:w-full glow-pulse"></span>
                        </li>
                        <li class="text-white hover:text-purple-400 transition duration-300 relative group magnetic">
                            <a href="#services" v-smooth-scroll class="interactive-element">Services</a>
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-purple transition-all duration-300 group-hover:w-full glow-pulse"></span>
                        </li>
                        <li class="text-white hover:text-purple-400 transition duration-300 relative group magnetic">
                            <a href="#work" v-smooth-scroll class="interactive-element">Work</a>
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-purple transition-all duration-300 group-hover:w-full glow-pulse"></span>
                        </li>
                        <li>
                            <a href="#contact" v-smooth-scroll class="magnetic interactive-element gradient-purple px-6 py-3 rounded-full text-white font-medium relative overflow-hidden group">
                                <span class="relative z-10">Let's Connect</span>
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            <!-- Mobile Menu Start-->
            <div v-show="mobileNav" class="absolute px-6 py-12 block z-40 top-0 left-0 w-full h-screen blur-bg">
                <div class="flex justify-between items-center">
                    <a href="#" class="text-2xl font-bold gradient-text font-['Playfair_Display']">
                        Tala Sinno
                    </a>
                    <button @click="toggleMobileNav()" type="button" class="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-white" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <ul class="text-white text-lg items-center flex flex-col mt-20 space-y-8">
                    <li class="hover:text-purple-400 transition duration-300">
                        <a @click="toggleMobileNav()" href="#about" v-smooth-scroll>About</a>
                    </li>
                    <li class="hover:text-purple-400 transition duration-300">
                        <a @click="toggleMobileNav()" href="#services" v-smooth-scroll>Services</a>
                    </li>
                    <li class="hover:text-purple-400 transition duration-300">
                        <a @click="toggleMobileNav()" href="#work" v-smooth-scroll>Work</a>
                    </li>
                    <li class="gradient-purple px-6 py-3 rounded-full text-white mt-8">
                        <a @click="toggleMobileNav()" href="#contact" v-smooth-scroll>Let's Connect</a>
                    </li>
                </ul>
            </div>
            <!-- Mobile Menu End-->
        </div>
    </nav>
    <!-- Navbar End -->
</template>