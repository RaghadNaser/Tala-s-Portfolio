<script setup>
const services = [
    {
        title: 'UI Design',
        description: 'Creating visually stunning and intuitive interfaces that captivate users and enhance their experience.',
        features: ['Visual Design', 'Design Systems', 'Responsive Design', 'Brand Integration'],
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`
    },
    {
        title: 'UX Research',
        description: 'Deep user research and analysis to understand needs, behaviors, and pain points for better solutions.',
        features: ['User Interviews', 'Usability Testing', 'Journey Mapping', 'Persona Development'],
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>`
    },
    {
        title: 'Prototyping',
        description: 'Interactive prototypes that bring ideas to life and validate concepts before development.',
        features: ['Interactive Prototypes', 'Micro-interactions', 'Animation Design', 'User Flow Testing'],
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>`
    },
    {
        title: 'Design Strategy',
        description: 'Strategic design thinking to align user needs with business goals and create meaningful solutions.',
        features: ['Design Thinking', 'Product Strategy', 'Competitive Analysis', 'Design Workshops'],
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 11H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zm2-8H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 19H5V5h14v14z"/>
        </svg>`
    }
];

const process = [
    {
        step: '01',
        title: 'Discover',
        description: 'Understanding the problem, users, and business goals through research and analysis.'
    },
    {
        step: '02',
        title: 'Define',
        description: 'Synthesizing insights to define clear problems and opportunities for design solutions.'
    },
    {
        step: '03',
        title: 'Design',
        description: 'Creating and iterating on design solutions through ideation, sketching, and prototyping.'
    },
    {
        step: '04',
        title: 'Deliver',
        description: 'Finalizing designs, creating specifications, and ensuring smooth handoff to development.'
    }
];
</script>

<template>
    <section id="services" class="section-padding relative">
        <!-- Background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Header -->
            <div class="text-center space-y-4 mb-16">
                <h3 class="professional-subtitle text-reveal parallax-element">Services</h3>
                <h2 class="text-4xl lg:text-5xl font-['Playfair_Display'] leading-tight professional-title parallax-element">
                    What I <span class="text-gradient-animated">Offer</span>
                </h2>
                <p class="professional-text text-lg max-w-2xl mx-auto professional-card p-6 rounded-xl">
                    Comprehensive design services to help your business create meaningful digital experiences 
                    that users love and remember.
                </p>
            </div>

            <!-- Services Grid -->
            <div class="grid md:grid-cols-2 gap-8 mb-20">
                <div v-for="(service, index) in services" :key="service.title" 
                     class="service-card h-80">
                    <div class="service-card-inner">
                        <!-- Front of card -->
                        <div class="service-card-front">
                            <div class="flex items-start space-x-4 mb-6">
                                <div class="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center text-white flex-shrink-0 constellation">
                                    <div class="w-6 h-6" v-html="service.icon"></div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-xl font-bold text-gradient-animated mb-2">{{ service.title }}</h4>
                                    <p class="text-gray-400 leading-relaxed">{{ service.description }}</p>
                                </div>
                            </div>
                            
                            <div class="space-y-2">
                                <div v-for="feature in service.features" :key="feature" 
                                     class="flex items-center space-x-3 text-gray-300">
                                    <div class="w-2 h-2 bg-purple-400 rounded-full constellation"></div>
                                    <span>{{ feature }}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <!-- Design Process -->
            <div class="text-center space-y-4 mb-12">
                <h3 class="text-purple-400 text-lg font-medium tracking-wide">Process</h3>
                <h2 class="text-3xl lg:text-4xl font-bold font-['Playfair_Display'] text-white">
                    My Design <span class="gradient-text">Process</span>
                </h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(step, index) in process" :key="step.step" 
                     class="text-center space-y-4">
                    <div class="relative">
                        <div class="w-16 h-16 gradient-purple rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                            {{ step.step }}
                        </div>
                        <!-- Connection line (except for last item) -->
                        <div v-if="index < process.length - 1" 
                             class="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent transform translate-x-8">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <h4 class="text-xl font-bold text-white">{{ step.title }}</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">{{ step.description }}</p>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center mt-16">
                <div class="gradient-card rounded-2xl p-8 max-w-2xl mx-auto">
                    <h3 class="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
                    <p class="text-gray-400 mb-6">
                        Let's collaborate to create something amazing together. 
                        I'd love to hear about your project and discuss how we can bring your vision to life.
                    </p>
                    <a href="#contact" v-smooth-scroll 
                       class="gradient-purple px-8 py-4 rounded-full text-white font-semibold hover-scale inline-block">
                        Start a Project
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
