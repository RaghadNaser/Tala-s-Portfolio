<script setup>
import { ref, onMounted } from 'vue';

const words = ref(['UI Designer', 'UX Designer', 'Creative Thinker', 'Problem Solver']);
const currentWord = ref(0);
const displayText = ref('');
const isDeleting = ref(false);
const charIndex = ref(0);

onMounted(() => {
    typeWriter();
});

const typeWriter = () => {
    const current = words.value[currentWord.value];
    
    if (isDeleting.value) {
        displayText.value = current.substring(0, charIndex.value - 1);
        charIndex.value--;
    } else {
        displayText.value = current.substring(0, charIndex.value + 1);
        charIndex.value++;
    }
    
    let typeSpeed = isDeleting.value ? 50 : 100;
    
    if (!isDeleting.value && charIndex.value === current.length) {
        typeSpeed = 2000;
        isDeleting.value = true;
    } else if (isDeleting.value && charIndex.value === 0) {
        isDeleting.value = false;
        currentWord.value = (currentWord.value + 1) % words.value.length;
    }
    
    setTimeout(typeWriter, typeSpeed);
};
</script>

<template>
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <!-- Aurora Background -->
        <div class="aurora"></div>
        
        <!-- Cyberpunk Grid -->
        <div class="absolute inset-0 cyber-grid opacity-20"></div>
        
        <!-- Electromagnetic Field -->
        <div class="absolute inset-0 electromagnetic-field"></div>
        
        <!-- Plasma Field -->
        <div class="absolute inset-0 plasma-field"></div>
        
        <!-- Quantum Dots -->
        <div class="quantum-dot" style="top: 10%; left: 20%; animation-delay: 0s;"></div>
        <div class="quantum-dot" style="top: 30%; left: 70%; animation-delay: 2s;"></div>
        <div class="quantum-dot" style="top: 70%; left: 15%; animation-delay: 4s;"></div>
        <div class="quantum-dot" style="top: 50%; left: 85%; animation-delay: 6s;"></div>
        <div class="quantum-dot" style="top: 80%; left: 50%; animation-delay: 8s;"></div>
        
        <!-- Interactive Background -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Constellation Stars -->
            <div class="constellation" style="top: 10%; left: 15%; animation-delay: 0s;"></div>
            <div class="constellation" style="top: 20%; left: 80%; animation-delay: 1s;"></div>
            <div class="constellation" style="top: 60%; left: 10%; animation-delay: 2s;"></div>
            <div class="constellation" style="top: 80%; left: 70%; animation-delay: 3s;"></div>
            <div class="constellation" style="top: 30%; left: 60%; animation-delay: 0.5s;"></div>
            <div class="constellation" style="top: 70%; left: 40%; animation-delay: 1.5s;"></div>
            
            <!-- Geometric Shapes -->
            <div class="geometric-bg top-16 left-16">
                <div class="geometric-triangle"></div>
            </div>
            <div class="geometric-bg top-32 right-20" style="animation-delay: 5s;">
                <div class="geometric-hexagon"></div>
            </div>
            <div class="geometric-bg bottom-20 left-1/4" style="animation-delay: 10s;">
                <div class="geometric-triangle"></div>
            </div>
            
            <!-- DNA Helix Elements -->
            <div class="dna-helix top-1/4 left-8" style="animation-delay: 0s;"></div>
            <div class="dna-helix top-3/4 right-12" style="animation-delay: 1s; animation-direction: reverse;"></div>
            
            <!-- Morphing Shapes -->
            <div class="absolute top-10 left-10 w-32 h-32 morphing-shape opacity-30 parallax-element"></div>
            <div class="absolute top-1/4 right-1/4 w-48 h-48 morphing-shape opacity-20 parallax-element"></div>
            <div class="absolute bottom-1/4 left-1/3 w-24 h-24 morphing-shape opacity-40 parallax-element"></div>
            
            <!-- Liquid Background Elements -->
            <div class="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 liquid-bg blur-3xl"></div>
            <div class="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-800/20 to-pink-600/20 liquid-bg blur-3xl" style="animation-delay: 10s;"></div>
            
            <!-- Rotating Elements -->
            <div class="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full rotate-slow parallax-element constellation"></div>
            <div class="absolute bottom-32 left-20 w-1 h-1 bg-blue-400 rounded-full rotate-slow parallax-element constellation" style="animation-duration: 15s;"></div>
            <div class="absolute top-1/2 right-10 w-3 h-3 bg-pink-400 rounded-full rotate-slow parallax-element constellation" style="animation-duration: 25s;"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Content -->
                <div class="hero-animation space-y-8">
                    <div class="space-y-6">
                        <h2 class="professional-subtitle text-reveal">Hello, I'm</h2>
                        <h1 class="text-5xl lg:text-7xl font-['Playfair_Display'] leading-tight professional-title">
                            <span>Tala</span>
                            <span class="block text-reveal">Sinno</span>
                        </h1>
                        <div class="text-2xl lg:text-3xl h-12">
                            <span class="professional-text">A </span>
                            <span class="text-gradient-animated font-semibold typing-animation">{{ displayText }}</span>
                        </div>
                    </div>
                    
                    <p class="professional-text text-lg leading-relaxed max-w-lg professional-card p-6 rounded-xl">
                        I craft intuitive digital experiences that blend aesthetics with functionality. 
                        Passionate about creating designs that not only look beautiful but solve real problems for users.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 pt-6">
                        <a href="#work" v-smooth-scroll class="btn-primary text-center no-underline">
                            View My Work
                        </a>
                        <a href="#contact" v-smooth-scroll class="btn-secondary text-center no-underline">
                            Get In Touch
                        </a>
                    </div>

                    <!-- Social Links -->
                    <div class="flex space-x-6 pt-8">
                        <a href="#" class="text-gray-400 hover:text-purple-400 transition duration-300 hover-scale">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-purple-400 transition duration-300 hover-scale">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-purple-400 transition duration-300 hover-scale">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.744-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.998 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-purple-400 transition duration-300 hover-scale">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.178 4.716-1.282 1.282-2.858 2.009-4.715 2.178-.344.03-.693.046-1.043.046-.351 0-.699-.016-1.043-.046-1.858-.169-3.433-.896-4.716-2.178C2.591 11.593 1.864 10.018 1.696 8.16c-.03-.344-.046-.692-.046-1.043 0-.351.016-.699.046-1.043.168-1.857.895-3.433 2.177-4.715C5.155 0.077 6.731-.65 8.588-.818 8.932-.848 9.28-.864 9.631-.864c.351 0 .699.016 1.043.046 1.857.168 3.433.895 4.715 2.177 1.282 1.282 2.009 2.858 2.178 4.715.03.344.046.692.046 1.043 0 .351-.016.699-.046 1.043z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Creative Visual -->
                <div class="relative lg:order-last order-first">
                    <div class="relative z-10 parallax-element">
                        <!-- Professional Profile Circle -->
                        <div class="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative professional-profile-container">
                            <!-- Outer Glow Ring -->
                            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[3px] animate-spin-slow">
                                <div class="w-full h-full bg-gray-900 rounded-full"></div>
                            </div>
                            
                            <!-- Inner Border Ring -->
                            <div class="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 p-[2px] animate-spin-reverse">
                                <div class="w-full h-full bg-gray-900 rounded-full"></div>
                            </div>
                            
                            <!-- Soft Glow Effect -->
                            <div class="absolute inset-0 rounded-full opacity-30 blur-2xl bg-gradient-to-r from-purple-600/50 via-blue-600/50 to-pink-600/50 animate-pulse-glow"></div>
                            
                            <!-- Main Profile Image Container -->
                            <div class="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl professional-image-frame">
                                <!-- Image with Perfect Circular Crop -->
                                <img 
                                    src="/images/profile/tala-profile.jpg" 
                                    alt="Tala Sinno Profile" 
                                    class="w-full h-full object-cover professional-profile-image"
                                />
                                
                                <!-- Subtle Overlay for Depth -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full"></div>
                                
                                <!-- Inner Shadow for Professional Look -->
                                <div class="absolute inset-0 rounded-full shadow-inner-custom"></div>
                            </div>
                            
                            <!-- Multiple Orbiting Systems -->
                            <div class="absolute inset-0 rotate-slow" style="animation-duration: 30s;">
                                <div class="absolute top-0 left-1/2 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2 constellation"></div>
                            </div>
                            <div class="absolute inset-0 rotate-slow" style="animation-duration: 45s; animation-direction: reverse;">
                                <div class="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 constellation" style="animation-delay: 1s;"></div>
                            </div>
                            <div class="absolute inset-0 rotate-slow" style="animation-duration: 35s;">
                                <div class="absolute left-0 top-1/2 w-2 h-2 bg-pink-400 rounded-full transform -translate-y-1/2 constellation" style="animation-delay: 2s;"></div>
                            </div>
                            <div class="absolute inset-0 rotate-slow" style="animation-duration: 40s; animation-direction: reverse;">
                                <div class="absolute right-0 top-1/2 w-5 h-5 bg-cyan-400 rounded-full transform -translate-y-1/2 constellation" style="animation-delay: 0.5s;"></div>
                            </div>
                        </div>
                        
                        <!-- Advanced Floating Elements -->
                        <div class="absolute -top-10 -right-10 w-20 h-20 interactive-element crystal-effect rounded-xl flex items-center justify-center float-animation magnetic" style="animation-delay: 0.5s;">
                            <svg class="w-8 h-8 text-gradient-animated rotate-slow" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        
                        <div class="absolute -bottom-10 -left-10 w-16 h-16 interactive-element neumorphism rounded-lg flex items-center justify-center float-animation magnetic morphing-shape" style="animation-delay: 1s;">
                            <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                            </svg>
                        </div>
                        
                        <div class="absolute top-1/2 -right-16 w-12 h-12 interactive-element crystal-effect rounded-full flex items-center justify-center float-animation magnetic constellation" style="animation-delay: 1.5s;">
                            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                        </div>
                        
                        <div class="absolute top-20 -left-8 w-8 h-8 interactive-element crystal-effect rounded-full flex items-center justify-center float-animation magnetic constellation" style="animation-delay: 2s;">
                            <div class="w-1 h-1 bg-blue-400 rounded-full"></div>
                        </div>
                        
                        <!-- Code Symbol with Holographic Effect -->
                        <div class="absolute bottom-20 -right-8 w-14 h-14 interactive-element holographic rounded-lg flex items-center justify-center float-animation magnetic" style="animation-delay: 2.5s;">
                            <svg class="w-5 h-5 text-gradient-animated" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 3C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5H4V19H8C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H8ZM16 3C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21H12C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19H16V5H12C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3H16Z"/>
                            </svg>
                        </div>
                        
                        <!-- Design Tools Icons -->
                        <div class="absolute top-1/4 left-0 w-10 h-10 interactive-element crystal-effect rounded-full flex items-center justify-center float-animation magnetic" style="animation-delay: 3s;">
                            <span class="text-gradient-animated text-xs font-bold">Fi</span>
                        </div>
                        
                        <div class="absolute bottom-1/3 left-4 w-12 h-12 interactive-element neumorphism rounded-full flex items-center justify-center float-animation magnetic" style="animation-delay: 3.5s;">
                            <span class="text-gradient-animated text-xs font-bold">Ps</span>
                        </div>
                        
                        <div class="absolute top-16 right-4 w-9 h-9 interactive-element holographic rounded-full flex items-center justify-center float-animation magnetic" style="animation-delay: 4s;">
                            <span class="text-purple-400 text-xs font-bold">Ai</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
</template>