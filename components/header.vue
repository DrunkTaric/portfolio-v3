<template>
    <header id="Header" class="flex flex-col w-full h-screen p-3 overflow-x-hidden">
        <div class="absolute w-full flex top-0 left-0 space-x-16">
            <h1 ref="trans-text-1" class="text-[13rem] font-bold uppercase opacity-0">Software</h1>
            <div class="w-full h-full flex flex-col justify-center items-center mt-auto mb-auto ">
                <h1 ref="trans-text-3" class="text-[5rem] font-caveat opacity-0">7 years of experience</h1>
                <h1 ref="trans-text-4" class="text-[2.5rem] font-caveat opacity-0">Gold League Player</h1>
            </div>
        </div>
        <div class="flex flex-col w-full h-full justify-center items-center">
            <h1 class="text-8xl font-bold">DrunkTaric</h1>
            <button ref="clickme-button" class="text-3xl">Click me</button>
        </div>
        <div class="absolute w-full flex bottom-0 right-0 space-x-16">
            <div class="w-full h-full flex flex-col justify-center items-center mt-auto mb-auto ">
                <h1 ref="trans-text-5" class="text-[5rem] font-caveat opacity-0">This website made with ❤️</h1>
            </div>
            <h1 ref="trans-text-2" class="text-[13rem] font-bold uppercase opacity-0">Engineer</h1>
        </div>
    </header>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'

let clicked = false
const header_text_1 = useTemplateRef('trans-text-1')
const header_text_2 = useTemplateRef('trans-text-2')
const header_text_3 = useTemplateRef('trans-text-3')
const header_text_4 = useTemplateRef('trans-text-4')
const header_text_5 = useTemplateRef('trans-text-5')
const clickme_button = useTemplateRef('clickme-button')

const clickme_button_animate = useMotion(clickme_button, { initial: { opacity: 1 } })
const header_text_1_animate = useMotion(header_text_1, { initial: { display: "none", opacity: 0, x: -1100 } })
const header_text_2_animate = useMotion(header_text_2, { initial: { display: "none", opacity: 0, x: 1100 } })
const header_text_3_animate = useMotion(header_text_3, { initial: { opacity: 0 } })
const header_text_4_animate = useMotion(header_text_4, { initial: { opacity: 0 } })
const header_text_5_animate = useMotion(header_text_5, { initial: { opacity: 0 } })

onMounted(() => {

    document.onscroll = async () => {
    }
    
    clickme_button.value.onclick = () => {
        if (clicked) return
        clicked = true
        header_text_1_animate.apply({ x: 0, display: "block", opacity: 1, transition: { duration: 250 } })
        header_text_2_animate.apply({ x: 0, display: "block", opacity: 1, transition: { duration: 250 } }).then(async () => {
            await header_text_3_animate.apply({ opacity: 1, transition: { duration: 500, delay: 200 } })
            await header_text_4_animate.apply({ opacity: 1, transition: { duration: 500 } })
            await header_text_5_animate.apply({ opacity: 1, transition: { duration: 500 } })
            await clickme_button_animate.apply({ opacity: 0, disabled: true, transition: { duration: 300 }})
        })
        let click_sfx = new Audio('/click.mp3');
        click_sfx.play();
        click_sfx.onended = () => {
            let music = new Audio('/music.mp3')
            music.play()
            music.loop = true
            music.volume = 0.1
        }
    }
})

</script>