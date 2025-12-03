<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    email: '',
    company: '',
    project: 'ui-design',
    budget: '',
    message: ''
});

const isSubmitting = ref(false);

const submitForm = async () => {
    isSubmitting.value = true;
    // Simulate form submission
    setTimeout(() => {
        isSubmitting.value = false;
        // Reset form or show success message
        console.log('Form submitted:', form.value);
    }, 2000);
};

const contactInfo = [
    {
        title: 'Email',
        value: 'hello@talasinno.com',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>`
    },
    {
        title: 'Location',
        value: 'Available Worldwide',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>`
    },
    {
        title: 'Response Time',
        value: 'Within 24 hours',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
        </svg>`
    }
];

const socialLinks = [
    {
        name: 'LinkedIn',
        url: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>`
    },
    {
        name: 'Dribbble',
        url: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.178 4.716-1.282 1.282-2.858 2.009-4.715 2.178-.344.03-.693.046-1.043.046-.351 0-.699-.016-1.043-.046-1.858-.169-3.433-.896-4.716-2.178C2.591 11.593 1.864 10.018 1.696 8.16c-.03-.344-.046-.692-.046-1.043 0-.351.016-.699.046-1.043.168-1.857.895-3.433 2.177-4.715C5.155 0.077 6.731-.65 8.588-.818 8.932-.848 9.28-.864 9.631-.864c.351 0 .699.016 1.043.046 1.857.168 3.433.895 4.715 2.177 1.282 1.282 2.009 2.858 2.178 4.715.03.344.046.692.046 1.043 0 .351-.016.699-.046 1.043z"/>
        </svg>`
    },
    {
        name: 'Behance',
        url: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.665-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>`
    }
];
</script>

<template>
    <section id="contact" class="section-padding relative prism-effect">
        <!-- Background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            
            <!-- Quantum Dots for Contact Section -->
            <div class="quantum-dot" style="top: 20%; left: 10%; animation-delay: 1s;"></div>
            <div class="quantum-dot" style="top: 60%; left: 90%; animation-delay: 3s;"></div>
            <div class="quantum-dot" style="top: 80%; left: 30%; animation-delay: 5s;"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Header -->
            <div class="text-center space-y-4 mb-16">
                <h3 class="professional-subtitle text-reveal parallax-element">Contact</h3>
                <h2 class="text-4xl lg:text-5xl font-['Playfair_Display'] leading-tight professional-title parallax-element">
                    Let's Create Something <span class="text-gradient-animated">Amazing</span>
                </h2>
                <p class="professional-text text-lg max-w-2xl mx-auto professional-card p-6 rounded-xl">
                    Ready to bring your vision to life? I'd love to hear about your project 
                    and explore how we can work together.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-16">
                <!-- Contact Form -->
                <div class="space-y-8">
                    <div class="gradient-card rounded-2xl p-8">
                        <h3 class="text-2xl font-bold text-white mb-6">Send me a message</h3>
                        
                        <form @submit.prevent="submitForm" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-gradient-animated text-sm font-medium">Name *</label>
                                    <input v-model="form.name" type="text" required placeholder="Your full name"
                                           class="form-input w-full">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-gradient-animated text-sm font-medium">Email *</label>
                                    <input v-model="form.email" type="email" required placeholder="your.email@example.com"
                                           class="form-input w-full">
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="text-gradient-animated text-sm font-medium">Company</label>
                                <input v-model="form.company" type="text" placeholder="Your company name"
                                       class="form-input w-full">
                            </div>

                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-gradient-animated text-sm font-medium">Project Type</label>
                                    <select v-model="form.project" class="form-input w-full">
                                        <option value="ui-design">UI Design</option>
                                        <option value="ux-research">UX Research</option>
                                        <option value="prototyping">Prototyping</option>
                                        <option value="full-project">Complete Project</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-gradient-animated text-sm font-medium">Budget Range</label>
                                    <select v-model="form.budget" class="form-input w-full">
                                        <option value="">Select Budget</option>
                                        <option value="5k-10k">$5k - $10k</option>
                                        <option value="10k-25k">$10k - $25k</option>
                                        <option value="25k-50k">$25k - $50k</option>
                                        <option value="50k+">$50k+</option>
                                    </select>
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="text-gradient-animated text-sm font-medium">Project Details *</label>
                                <textarea v-model="form.message" required rows="5" placeholder="Tell me about your project, goals, and timeline..."
                                          class="form-input w-full resize-vertical"></textarea>
                            </div>

                            <button type="submit" :disabled="isSubmitting"
                                    class="w-full magnetic interactive-element gradient-purple px-8 py-4 rounded-full text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group ripple">
                                <span v-if="!isSubmitting" class="relative z-10">Send Message</span>
                                <span v-else class="flex items-center justify-center space-x-2 relative z-10">
                                    <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Sending...</span>
                                </span>
                                <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    <!-- Contact Details -->
                    <div class="space-y-6">
                        <div v-for="info in contactInfo" :key="info.title" 
                             class="flex items-start space-x-4 p-6 gradient-card rounded-xl">
                            <div class="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                <div class="w-6 h-6" v-html="info.icon"></div>
                            </div>
                            <div class="space-y-1">
                                <h4 class="text-white font-semibold">{{ info.title }}</h4>
                                <p class="text-gray-400">{{ info.value }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="gradient-card rounded-2xl p-8">
                        <h3 class="text-xl font-bold text-white mb-6">Follow My Work</h3>
                        <div class="space-y-4">
                            <a v-for="social in socialLinks" :key="social.name" :href="social.url"
                               class="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group">
                                <div class="w-10 h-10 bg-gray-700 group-hover:bg-purple-600 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300">
                                    <div class="w-5 h-5" v-html="social.icon"></div>
                                </div>
                                <div class="text-gray-300 group-hover:text-white transition-colors">{{ social.name }}</div>
                            </a>
                        </div>
                    </div>

                    <!-- Availability -->
                    <div class="gradient-card rounded-2xl p-8 text-center">
                        <div class="space-y-4">
                            <div class="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto">
                                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-xl font-bold text-white">Available for New Projects</h3>
                                <p class="text-gray-400">
                                    I'm currently accepting new projects for Q2 2024. 
                                    Let's discuss your timeline and requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
