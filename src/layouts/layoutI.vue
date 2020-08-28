<template>
    <section class="sectionClass">
    <aside class="asideClass"></aside>
    <router-view />
    </section>
</template>
<style scoped>
.sectionClass{
    display: flex;
}
.asideClass{
    width: 10%;
    background: red;
}
</style>