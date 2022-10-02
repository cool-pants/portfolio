<template>
    <div class="intro" id="about-me">
        <n-grid cols="1 800:2">
            <n-grid-item class="image">
                <n-image width="300"
                    src="https://raw.githubusercontent.com/cool-pants/portfolio/master/assets/Mugshot.jpg"
                    preview-disabled />
            </n-grid-item>
            <n-grid-item>
                <n-thing>
                    <template #header>
                        About me
                    </template>
                    I am a multi-faceted individual with a knack for solving problems.
                    I am pursuing my Bachelors degree as of academic year 2022-23. A newly
                    inculcated member of the Vim-brigade.

                    <p>Things I am interested in:</p>

                    <n-list>
                        <n-list-item v-for="fav in favs" :key="fav.id">
                            <template #prefix>
                                <dotmark-component />
                            </template>
                            {{ fav.key }}
                        </n-list-item>

                    </n-list>
                </n-thing>
            </n-grid-item>
        </n-grid>
    </div>
</template>
  
<script lang="ts" setup>
import DotmarkComponent from "./SVG/DotmarkComponent.vue"

const favs = [
    {
        id: 1,
        key: "Programming"
    },
    {
        id: 2,
        key: "Reading and Fiction"
    },
    {
        id: 3,
        key: "Playing Video Games"
    },
    {
        id: 4,
        key: "Music"
    },
    {
        id: 5,
        key: "Novel Technologies"
    }
]

</script>

<style lang="scss">
.intro {
    padding: 30px 100px;
    font-weight: 700 !important;
}

.image {
    display: flex;
    justify-content: center;
}

.n-thing-header__title,
.n-thing-main__content,
.n-list-item__main {
    font-weight: 700 !important;
    color: #666666 !important;
}

.n-list-item {
    padding: 0px 30px !important;
}

p,
.n-list-item__prefix {
    font-weight: 800;
    color: #555;
}
</style>