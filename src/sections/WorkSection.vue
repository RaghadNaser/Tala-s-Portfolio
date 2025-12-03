<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const activeFilter = ref('all');
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);
const currentProject = ref(null);
const showControls = ref(true);
let hideControlsTimeout = null;

const openLightbox = (project, index) => {
    currentProject.value = project;
    currentImageIndex.value = index;
    lightboxOpen.value = true;
    showControls.value = true;
    document.body.style.overflow = 'hidden';
    startHideControlsTimer();
};

const closeLightbox = () => {
    lightboxOpen.value = false;
    showControls.value = true;
    document.body.style.overflow = '';
    if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
    }
};

const nextImage = () => {
    if (currentProject.value && currentImageIndex.value < currentProject.value.images.length - 1) {
        currentImageIndex.value++;
    }
};

const prevImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
    }
};

const startHideControlsTimer = () => {
    if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
    }
    hideControlsTimeout = setTimeout(() => {
        showControls.value = false;
    }, 3000); // Hide after 3 seconds of inactivity
};

const handleMouseMove = () => {
    if (lightboxOpen.value) {
        showControls.value = true;
        startHideControlsTimer();
    }
};

const toggleControls = () => {
    showControls.value = !showControls.value;
    if (showControls.value) {
        startHideControlsTimer();
    }
};

const handleKeydown = (e) => {
    if (!lightboxOpen.value) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
};

onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
});

const projects = [
    {
        id: 1,
        title: 'Basketball Training Platform',
        category: 'mobile',
        description: 'Complete basketball training solution with session planning, performance tracking, and intuitive dashboard for athletes.',
        images: [
            '/images/basketball/Dashboard-1.png',
            '/images/basketball/home.png',
            '/images/basketball/Get Started-1.png',
            '/images/basketball/Settings-1.png',
            '/images/basketball/history.png'
        ],
        mainImage: '/images/basketball/Dashboard-1.png',
        prototypeLink: 'https://www.figma.com/proto/wmCnJtTSa43GRSsENIhO10/Untitled?page-id=0%3A1&node-id=1-334&viewport=430%2C118%2C0.15&t=WpHOqJkYAbaUPBES-1&scaling=scale-down-width&content-scaling=fixed',
        tags: ['Mobile App', 'Sports', 'UI/UX', 'Figma'],
        year: '2024',
        featured: true
    },
    {
        id: 2,
        title: 'MTS GPS Landing Page',
        category: 'web',
        description: 'Professional GPS tracking platform with real-time monitoring, fleet management, and advanced analytics dashboard for businesses.',
        images: [
            '/images/gps/Desktop - 00.png',
            '/images/gps/Desktop - 222.png',
            '/images/gps/Desktop - 71.png',
            '/images/gps/Desktop - 711.png'
        ],
        mainImage: '/images/gps/Desktop - 00.png',
        prototypeLink: 'https://www.figma.com/proto/fUr0L7KyqHXQztlZsa6GrZ/MTS-GPS-Landing-Page?page-id=0%3A1&node-id=11-138&viewport=500%2C146%2C0.11&t=OVnzbFmkhKEmktlH-1&scaling=scale-down-width&content-scaling=fixed',
        tags: ['Web Design', 'GPS Tracking', 'Landing Page', 'Figma'],
        year: '2024',
        featured: true
    },
    {
        id: 3,
        title: 'Maestrosoft Website',
        category: 'web',
        description: 'Complete corporate website for Maestrosoft with modern design, services showcase, and professional company presentation.',
        images: [
            '/images/maestrosoft/home (2).png',
            '/images/maestrosoft/about us.png',
            '/images/maestrosoft/services.png',
            '/images/maestrosoft/about us77.png'
        ],
        mainImage: '/images/maestrosoft/home (2).png',
        prototypeLink: 'https://www.figma.com/proto/V1JkeBQ7XiUXvfleEc2xTa/Maestrosoft?page-id=0%3A1&node-id=1-291&viewport=492%2C337%2C0.14&t=Kqs3UZQqpKMmyb5i-1&scaling=scale-down-width&content-scaling=fixed',
        tags: ['Web Design', 'Corporate Website', 'Business', 'Figma'],
        year: '2024',
        featured: true
    },
    {
        id: 4,
        title: 'MTS ISP Portfolio',
        category: 'web',
        description: 'Professional internet service provider website with modern design, service packages, coverage areas, and customer portal integration.',
        images: [
            '/images/MTSISP/Desktop - 17.png',
            '/images/MTSISP/Desktop - 173.png',
            '/images/MTSISP/Desktop - 175.png',
            '/images/MTSISP/Desktop - 18.png',
            '/images/MTSISP/Desktop - 19.png'
        ],
        mainImage: '/images/MTSISP/Desktop - 17.png',
        prototypeLink: 'https://www.figma.com/proto/eKVZydTquRiG3gSYad4cFd/MTS-ISP-Portfolio?page-id=0%3A1&node-id=0-2871&viewport=68%2C305%2C0.12&t=1JYjeOBXNr1bfiny-1&scaling=scale-down-width&content-scaling=fixed',
        tags: ['Web Design', 'ISP Website', 'Internet Services', 'Figma'],
        year: '2024',
        featured: true
    },
    {
        id: 5,
        title: 'MTS TV Mobile App',
        category: 'mobile',
        description: 'Complete TV streaming mobile application with live channels, on-demand content, user profiles, and premium subscription features.',
        images: [
            '/images/MTSTV/photo_4_2025-10-21_11-12-36.jpg',
            '/images/MTSTV/photo_3_2025-10-21_11-12-36.jpg',
            '/images/MTSTV/photo_2_2025-10-21_11-12-36.jpg',
            '/images/MTSTV/photo_1_2025-10-21_11-12-36.jpg',
            '/images/MTSTV/photo_2025-10-21_11-12-29.jpg'
        ],
        mainImage: '/images/MTSTV/photo_4_2025-10-21_11-12-36.jpg',
        prototypeLink: 'https://www.figma.com/proto/hsmVp8V7LPYyEBV8LdNcF8/MTS-TV-Portfolio?page-id=0%3A1&node-id=1-1294&viewport=391%2C58%2C0.14&t=H0Vq7ZWYGvLi7u4Q-1&scaling=min-zoom&content-scaling=fixed',
        tags: ['Mobile App', 'TV Streaming', 'Entertainment', 'Figma'],
        year: '2024',
        featured: true
    },
    {
        id: 6,
        title: 'E-commerce Mobile App',
        category: 'mobile',
        description: 'A comprehensive shopping experience with intuitive navigation and seamless checkout process.',
        image: '/images/project-1.jpg',
        tags: ['UI Design', 'UX Research', 'Mobile'],
        year: '2024',
        featured: true
    },
    {
        id: 7,
        title: 'SaaS Dashboard Design',
        category: 'web',
        description: 'Clean and modern dashboard for data visualization and business intelligence.',
        image: '/images/project-2.jpg',
        tags: ['UI Design', 'Data Viz', 'Dashboard'],
        year: '2023',
        featured: true
    },
    {
        id: 8,
        title: 'Healthcare App UX',
        category: 'mobile',
        description: 'User-centered design for a telemedicine platform focusing on accessibility.',
        image: '/images/project-3.jpg',
        tags: ['UX Research', 'Healthcare', 'Accessibility'],
        year: '2024',
        featured: false
    },
    {
        id: 9,
        title: 'Brand Identity System',
        category: 'branding',
        description: 'Complete brand identity including logo, guidelines, and digital assets.',
        image: '/images/project-4.jpg',
        tags: ['Branding', 'Identity', 'Guidelines'],
        year: '2023',
        featured: false
    },
    {
        id: 10,
        title: 'Financial Web Platform',
        category: 'web',
        description: 'Secure and intuitive platform for personal financial management.',
        image: '/images/project-5.jpg',
        tags: ['Web Design', 'FinTech', 'Security'],
        year: '2024',
        featured: true
    },
    {
        id: 11,
        title: 'Educational App Design',
        category: 'mobile',
        description: 'Gamified learning experience for children with interactive elements.',
        image: '/images/project-6.jpg',
        tags: ['Education', 'Gamification', 'Kids'],
        year: '2023',
        featured: false
    }
];

const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'web', label: 'Web Design' },
    { key: 'mobile', label: 'Mobile App' },
    { key: 'branding', label: 'Branding' }
];

const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') return projects;
    if (activeFilter.value === 'featured') return projects.filter(p => p.featured);
    return projects.filter(p => p.category === activeFilter.value);
});

const setActiveFilter = (filter) => {
    activeFilter.value = filter;
};
</script>

<template>
    <section id="work" class="section-padding relative">
        <div class="container mx-auto px-6">
            <!-- Header -->
            <div class="text-center space-y-4 mb-16">
                <h3 class="professional-subtitle text-reveal parallax-element">Portfolio</h3>
                <h2 class="text-4xl lg:text-5xl font-['Playfair_Display'] leading-tight professional-title parallax-element">
                    Selected <span class="text-gradient-animated">Work</span>
                </h2>
                <p class="professional-text text-lg max-w-2xl mx-auto professional-card p-6 rounded-xl">
                    A collection of projects that showcase my approach to solving complex design challenges 
                    through user-centered solutions.
                </p>
            </div>

            <!-- Filter Tabs -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button v-for="filter in filters" :key="filter.key"
                        @click="setActiveFilter(filter.key)"
                        :class="[
                            'px-6 py-3 rounded-full font-medium transition-all duration-300 magnetic interactive-element relative overflow-hidden group',
                            activeFilter === filter.key 
                                ? 'gradient-purple text-white glow-pulse' 
                                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                        ]">
                    <span class="relative z-10">{{ filter.label }}</span>
                    <div v-if="activeFilter !== filter.key" class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </button>
            </div>

            <!-- Projects Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in filteredProjects" :key="project.id" 
                     :class="[
                         'portfolio-card rounded-2xl overflow-hidden group',
                         project.prototypeLink ? 'md:col-span-2 lg:col-span-3' : ''
                     ]">
                    
                    <!-- Featured Projects with Multiple Images -->
                    <div v-if="project.prototypeLink" class="grid lg:grid-cols-5 gap-0">
                        <!-- Images Gallery -->
                        <div class="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 lg:col-span-3">
                            <div class="space-y-4 h-full flex flex-col justify-center">
                                <!-- Main Screen - Desktop/Laptop View -->
                                <div class="relative overflow-hidden rounded-2xl group/img shadow-2xl cursor-pointer"
                                     @click="openLightbox(project, 0)">
                                    <div class="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-4">
                                        <!-- Desktop/Laptop Frame -->
                                        <div class="relative">
                                            <!-- Screen -->
                                            <div class="relative bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-gray-700">
                                                <img :src="project.images[0]" :alt="`${project.title} main screen`" 
                                                     class="w-full h-auto object-cover" />
                                                <!-- Subtle overlay on hover -->
                                                <div class="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div class="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover/img:scale-100 transition-transform duration-300">
                                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Desktop Base (for web projects) or Laptop Base (for mobile projects) -->
                                            <div v-if="project.category === 'web'" class="h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
                                            <div v-else>
                                                <div class="h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
                                                <div class="h-3 bg-gradient-to-b from-gray-800 to-gray-900 mx-auto w-3/4 rounded-b-xl shadow-lg"></div>
                                            </div>
                                        </div>
                                        <!-- Screen Badge -->
                                        <div class="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                                            {{ project.category === 'web' ? '🌐 Main Page' : '💻 Main Dashboard' }}
                                        </div>
                                    </div>
                                </div>

                                <!-- Additional Screens Grid -->
                                <div class="grid grid-cols-4 gap-3">
                                    <div v-for="idx in [1, 2, 3, 4]" :key="idx" 
                                         v-if="project.images[idx]"
                                         class="relative overflow-hidden rounded-xl group/img shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:z-10 cursor-pointer"
                                         @click="openLightbox(project, idx)">
                                        <div class="relative bg-gradient-to-br from-gray-800/60 to-gray-900/50 backdrop-blur-sm p-2">
                                            <!-- Frame with appropriate border -->
                                            <div class="relative bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-700 shadow-inner">
                                                <img :src="project.images[idx]" :alt="`${project.title} screen ${idx + 1}`" 
                                                     class="w-full h-auto max-h-[120px] object-contain" />
                                            </div>
                                            <!-- Subtle overlay on hover with zoom icon -->
                                            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                                                <div class="bg-white/20 backdrop-blur-sm rounded-full p-2 transform scale-0 group-hover/img:scale-100 transition-transform duration-300">
                                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <!-- Screen Icon Badge -->
                                            <div class="absolute bottom-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover/img:opacity-100 transition-opacity shadow-lg">
                                                {{ project.category === 'web' ? '🌐' : '📱' }} {{ idx + 1 }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Background decorations -->
                            <div class="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                            <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                        </div>

                        <!-- Project Details -->
                        <div class="p-8 lg:p-10 lg:col-span-2 flex flex-col justify-center space-y-6 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm">
                            <div class="space-y-5">
                                <!-- Icon & Year Badge -->
                                <div class="flex items-center gap-3">
                                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="text-xs text-gray-400 uppercase tracking-wider">Project Year</div>
                                        <div class="text-sm text-purple-400 font-bold">{{ project.year }}</div>
                                    </div>
                                </div>
                                
                                <!-- Title -->
                                <h3 class="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-white leading-tight">
                                    {{ project.title }}
                                </h3>
                                
                                <!-- Description -->
                                <p class="text-gray-300 text-base leading-relaxed">
                                    {{ project.description }}
                                </p>
                            </div>

                            <!-- Tags -->
                            <div class="flex flex-wrap gap-2.5">
                                <span v-for="tag in project.tags" :key="tag" 
                                      class="px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 text-sm rounded-xl font-medium backdrop-blur-sm hover:border-purple-400/50 transition-all">
                                    {{ tag }}
                                </span>
                            </div>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col gap-3 pt-4">
                                <a :href="project.prototypeLink" 
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="group/btn flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] magnetic relative overflow-hidden">
                                    <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                                    <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                                    </svg>
                                    <span class="relative z-10">View Interactive Prototype</span>
                                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </a>
                                
                                <button @click="openLightbox(project, 0)" class="flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-semibold rounded-2xl hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                    View Full Case Study
                                </button>
                            </div>

                            <!-- Project Stats -->
                            <div class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/50">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-gradient-animated">{{ project.category === 'web' ? '4+' : '20+' }}</div>
                                    <div class="text-xs text-gray-400 mt-1">Pages</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-gradient-animated">{{ project.category === 'web' ? 'Web' : 'Mobile' }}</div>
                                    <div class="text-xs text-gray-400 mt-1">Platform</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-gradient-animated">{{ project.year }}</div>
                                    <div class="text-xs text-gray-400 mt-1">Year</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Regular Projects -->
                    <template v-else>
                    <!-- Project Image Placeholder -->
                    <div class="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                        <div class="text-6xl opacity-50">🎨</div>
                        <!-- Overlay on hover -->
                        <div class="absolute inset-0 gradient-purple opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                            <div class="text-white text-center space-y-4">
                                <div class="text-lg font-semibold">View Case Study</div>
                                <div class="flex space-x-4">
                                    <button class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </button>
                                    <button class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Project Info -->
                    <div class="p-6 space-y-4">
                        <div class="flex items-start justify-between">
                            <div class="space-y-2 flex-1">
                                <h4 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {{ project.title }}
                                </h4>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    {{ project.description }}
                                </p>
                            </div>
                            <div class="text-sm text-purple-400 font-medium">{{ project.year }}</div>
                        </div>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in project.tags" :key="tag" 
                                  class="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                    </template>
                </div>
            </div>

            <!-- View More Section -->
            <div class="text-center mt-16">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold text-white">Want to See More?</h3>
                    <p class="text-gray-400 max-w-lg mx-auto">
                        These are just a few highlights from my portfolio. I'd love to show you more 
                        detailed case studies and discuss how I can help with your project.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" v-smooth-scroll 
                           class="gradient-purple px-8 py-4 rounded-full text-white font-semibold hover-scale">
                            View Full Portfolio
                        </a>
                        <a href="#contact" v-smooth-scroll 
                           class="border-2 border-purple-400 px-8 py-4 rounded-full text-white font-semibold hover:bg-purple-400 transition duration-300">
                            Discuss Your Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Lightbox/Modal -->
    <Transition name="lightbox">
        <div v-if="lightboxOpen" 
             class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl"
             @click="closeLightbox"
             @mousemove="handleMouseMove">
            
            <!-- Close Button -->
            <Transition name="fade">
                <button v-show="showControls"
                        @click="closeLightbox"
                        class="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 group">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </Transition>

            <!-- Previous Button -->
            <Transition name="fade">
                <button v-if="currentImageIndex > 0" v-show="showControls"
                        @click.stop="prevImage"
                        class="absolute left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-x-1 group">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
            </Transition>

            <!-- Next Button -->
            <Transition name="fade">
                <button v-if="currentProject && currentImageIndex < currentProject.images.length - 1" v-show="showControls"
                        @click.stop="nextImage"
                        class="absolute right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:translate-x-1 group">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </Transition>

            <!-- Toggle Controls Button (Always visible) -->
            <button @click.stop="toggleControls"
                    class="absolute top-6 left-6 z-50 bg-purple-600/80 hover:bg-purple-500 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group">
                <svg v-if="showControls" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
            </button>

            <!-- Image Container -->
            <div @click.stop class="relative max-w-7xl max-h-[90vh] w-full mx-4">
                <Transition name="slide" mode="out-in">
                    <div :key="currentImageIndex" class="relative">
                        <!-- Image -->
                        <div class="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
                            <img v-if="currentProject" 
                                 :src="currentProject.images[currentImageIndex]" 
                                 :alt="`${currentProject.title} - Screen ${currentImageIndex + 1}`"
                                 class="w-full h-auto max-h-[60vh] object-contain rounded-xl" />
                        </div>

                        <!-- Thumbnails Navigation -->
                        <Transition name="fade">
                            <div v-show="showControls" class="absolute top-8 left-8 right-8 flex gap-2 justify-center flex-wrap">
                                <button v-for="(img, idx) in currentProject?.images" :key="idx"
                                        @click.stop="currentImageIndex = idx"
                                        :class="[
                                            'relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300',
                                            currentImageIndex === idx 
                                                ? 'border-purple-500 scale-110 shadow-lg shadow-purple-500/50' 
                                                : 'border-gray-600 hover:border-gray-400 opacity-60 hover:opacity-100'
                                        ]">
                                    <img :src="img" :alt="`Thumbnail ${idx + 1}`" class="w-full h-full object-cover" />
                                </button>
                            </div>
                        </Transition>
                    </div>
                </Transition>
            </div>

            <!-- Keyboard Shortcuts Info -->
            <Transition name="fade">
                <div v-show="showControls" class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full">
                    <span class="opacity-75">Press ESC to close • Use arrow keys to navigate • Move mouse to show controls</span>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<style scoped>
/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
    transition: all 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
    opacity: 0;
}

/* Slide Transitions for Images */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

/* Fade Transitions for Controls */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
