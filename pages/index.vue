<template>
    <div class="index">
        <BaseComponent>
            <IntroComponent></IntroComponent>
            <ProjectComponent></ProjectComponent>
            <div class="text" id="thir">Hello 3</div>
        </BaseComponent>
    </div>
</template>

<script setup lang="ts">
import BaseComponent from '~~/components/BaseComponent.vue';
</script>

<style lang="scss">
.text {
    padding: 500px 100px;
}
</style>