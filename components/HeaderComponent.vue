<template>
    <n-page-header>
        <template #title>
            Mainak Sengupta
        </template>
        <template #avatar>
            <n-avatar color="#fff"
                src="https://raw.githubusercontent.com/cool-pants/portfolio/7fe043f2a954903a28c249d6673b4826da21e920/assets/coolpants.svg" />
        </template>
    </n-page-header>
</template>
<script setup lang="ts">
import { NPageHeader, NAvatar } from 'naive-ui'
</script>
<style lang="scss">
.n-page-header {
    position: fixed;
    z-index: 1;
    background-color: white;
    width: 100%;
    padding-top: 5px;
    padding-left: 5px;
}
</style>