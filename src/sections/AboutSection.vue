<script setup>
const skills = [
    { name: 'UI Design', level: 95 },
    { name: 'UX Research', level: 90 },
    { name: 'Prototyping', level: 92 },
    { name: 'User Testing', level: 88 },
    { name: 'Design Systems', level: 94 },
    { name: 'Interaction Design', level: 91 }
];

const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Sketch', icon: '✏️' },
    { name: 'Adobe XD', icon: '💎' },
    { name: 'Framer', icon: '🚀' },
    { name: 'Principle', icon: '⚡' },
    { name: 'InVision', icon: '👁️' }
];
</script>

<template>
    <section id="about" class="section-padding relative">
        <!-- Subtle Background -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Content -->
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h3 class="professional-subtitle text-reveal parallax-element">About Me</h3>
                        <h2 class="text-4xl lg:text-5xl font-['Playfair_Display'] leading-tight professional-title parallax-element">
                            Crafting Digital <span class="text-gradient-animated">Experiences</span>
                        </h2>
                    </div>
                    
                    <div class="space-y-6">
                        <p class="professional-text text-lg leading-relaxed">
                            I'm a passionate UI/UX Designer with over 2 years of experience creating digital solutions 
                            that prioritize user needs while achieving business goals. My approach combines analytical 
                            thinking with creative problem-solving.
                        </p>
                        <p class="professional-text text-lg leading-relaxed">
                            I believe great design is invisible – it feels natural, intuitive, and effortless. 
                            Every pixel has a purpose, and every interaction tells a story that guides users 
                            toward their goals seamlessly.
                        </p>
                        <p class="professional-text text-lg leading-relaxed">
                            When I'm not designing, you'll find me exploring the latest design trends, 
                            learning new tools, or mentoring aspiring designers in the community.
                        </p>
                    </div>

                    <!-- Skills -->
                    <div class="space-y-6">
                        <h4 class="text-xl font-semibold text-gradient-animated section-header">Skills & Expertise</h4>
                        <div class="space-y-6">
                            <div v-for="skill in skills" :key="skill.name" class="space-y-3">
                                <div class="flex justify-between text-sm">
                                    <span class="text-white font-medium">{{ skill.name }}</span>
                                    <span class="text-gradient-animated font-bold">{{ skill.level }}%</span>
                                </div>
                                <div class="skill-bar h-3 rounded-full relative overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-purple-500 to-blue-500" 
                                         :style="{ width: skill.level + '%' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Visual Content -->
                <div class="relative">
                    <div class="professional-card rounded-3xl p-8 space-y-8">
                  

                        <!-- Tools -->
                        <div class="space-y-4">
                            <h4 class="text-lg font-semibold text-center text-gradient-animated">Favorite Tools</h4>
                            <div class="grid grid-cols-3 gap-4">
                                <div v-for="tool in tools" :key="tool.name" 
                                     class="tool-card flex flex-col items-center space-y-3 p-6 rounded-xl">
                                    <div class="text-3xl">{{ tool.icon }}</div>
                                    <div class="text-sm text-white font-medium text-center">{{ tool.name }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- Call to Action -->
                        <div class="text-center pt-6">
                            <a href="#contact" v-smooth-scroll class="btn-primary no-underline">
                                Let's Work Together
                            </a>
                        </div>
                    </div>

                    <!-- Static Decorative elements -->
                    <div class="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl"></div>
                    <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-blue-600/10 to-purple-600/10 rounded-full blur-2xl"></div>
                </div>
            </div>
        </div>
    </section>
</template>
