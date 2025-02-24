<template>
    我是首页
    <div>store: count is {{ count }}</div>
    <div>store: doubleCount is {{ doubleCount }}</div>
    <button @click="increment">增加</button>
    <button @click="reset">重置</button>
    {{ a }}
</template>
<script setup lang="ts">
import { useCounterStore } from '@/store'
import { computed } from 'vue'

defineOptions({ name: 'HomeView' })

const useCounter = useCounterStore()

const count = computed(() => useCounter.count)
const doubleCount = computed(() => useCounter.doubleCount)

const increment = () => {
    useCounter.increment()
}

const a: number = 1
const reset = () => {
    useCounter.$reset()
}
</script>
<style scoped lang="scss"></style>
