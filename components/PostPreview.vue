<template>
    <nuxt-link :to="{path: post.slug, name: 'post', params: {parent: post, post: post.slug}}" class="post--preview__container py-2 mb-4 block">
        <div class="date__container mb-2 text-gray-700 dm-sans font-medium">
            {{getDate}}
        </div>
        <h1 class="text-2xl dm-sans font-bold text-darkblue">
            {{post.title}}
        </h1>
        <div class="extended--details mt-2 text-gray-700">
            {{post.read_time.text}}
        </div>
        <p class="desc text-gray-600 mt-2">{{post.description}}</p>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        post: {
            type: Object
        }
    },
    computed: {
        getTags() {
            // Parse the tags to make them readable
            let tags = this.post.tags.tags_list.slice(0, 5);
            tags.forEach((el, index) => tags[index] = `#${el}`);
            return tags.join(", ");
        },
        getDate() {
            return new Date(this.post.updated_at).toLocaleString("en-US", {
                dateStyle: "medium"
            })
        }
    }
}
</script>