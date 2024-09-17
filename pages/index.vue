<template>
    <main class="w-full h-full">
        <div id="Header" class="flex flex-col w-full h-screen p-3">
            <h1 id="trans-text-1" class="absolute top-0 left-0 text-[13rem] font-bold uppercase">Software</h1>
            <div class="flex flex-col w-full h-full justify-center items-center">
                <h1 class="text-8xl font-bold">DrunkTaric</h1>
                <button class="text-3xl" @click="playSound">Click me</button>
            </div>
            <h1 id="trans-text-2" class="absolute bottom-0 right-0 text-[13rem] font-bold uppercase">Engineer</h1>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            audio: null
        }
    },
    methods: {
        playSound() {
            this.audio = new Audio('/click.mp3');
            this.audio.play();
        }
    }
}
</script>