<template>
    <div class="index">
        <BaseComponent>
            <IntroComponent></IntroComponent>
            <ProjectComponent></ProjectComponent>
            <div class="text" id="thir">
                <n-icon>
                    <construct-outline />
                </n-icon>
                UNDER CONSTRUCTION
            </div>
        </BaseComponent>
    </div>
</template>

<script setup lang="ts">
import BaseComponent from '~~/components/BaseComponent.vue';
import { ConstructOutline } from "@vicons/ionicons5";
</script>

<style lang="scss">
.text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 60px;
    padding: 500px 100px;
}
</style>