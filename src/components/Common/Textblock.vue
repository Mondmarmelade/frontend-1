<template>
    <section class="w-full">
        <h1 class="text-xl font-bold">{{ title }}</h1>
        <Markdown class="markdown-body" :source="content" :breaks="true" />
    </section>
</template>
<script setup lang="ts">
import Markdown from 'vue3-markdown-it'

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '',
    },
})
</script>
<style lang="scss">
// Simple markdown css
.markdown-body {
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
}
.markdown-body > h1 {
    font-weight: bold;

    font-size: 2.5rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
}
.markdown-body > h2 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
}
.markdown-body > h3 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
}
.markdown-body > h4 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
}
.markdown-body > h5 {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
}
.markdown-body > h6 {
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
}
.markdown-body > p {
    margin: 0;
    padding: 0;
}
.markdown-body > ul {
    margin: 0;
    padding: 0;
}
.markdown-body > ul > li {
    margin: 0;
    padding: 0;
}
.markdown-body > ol {
    margin: 0;
    padding: 0;
}
</style>