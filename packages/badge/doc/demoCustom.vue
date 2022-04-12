<template>
    <m-space :size="[0, 60]">
        <m-badge value="一张图片">
            <img src="/src/assets/logo.png" alt="">
        </m-badge>
        <m-badge value="button按钮">
            <m-button type="primary">button按钮</m-button>
        </m-badge>
    </m-space>
</template>

<style scoped>
img {
    width: 100px;
}
</style>