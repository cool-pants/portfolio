<template>
    <n-page-header>
        <template #title>
            Mainak Sengupta
        </template>
        <template #avatar>
            <n-avatar src="@/assets/coolpants.png" />
        </template>
    </n-page-header>
</template>
<script setup lang="ts">
import { NPageHeader, NAvatar } from 'naive-ui'
</script>
<style lang="scss">
.n-page-header {
    padding-top: 5px;
    padding-left: 5px;
}
</style>