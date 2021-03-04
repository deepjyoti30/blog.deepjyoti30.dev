<template>
    <div class="post--header__container">
        <h1 class="md:text-4xl text-3xl dm-sans font-semibold text-darkblue">{{post.title}}</h1>
        <div class="more--details md:flex text-gray-500 md:mt-4 my-8 font-medium">
            <div class="author--details inline-flex items-center">
                <span class="author--name text-darkblue">{{post.author.name}}</span>
                <span class="author--username ml-3">@{{post.author.username}}</span>
            </div>
            <div class="separator md:h-5 md:w-0.5 h-0.5 w-10 bg-skyblue md:mx-2 my-2"></div>
            <div class="time--details inline-flex items-center">
                <span class="date">{{getDate}}</span>
                <span class="time ml-3">{{getTime}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
        }
    },
    computed: {
        getTime() {
            return new Date(this.post.created_at).toLocaleString("en-US", {
                hour12: true,
                hour: "numeric",
                minute: "numeric",
                timeZoneName: "short"
            });
        },
        getDate() {
            return new Date(this.post.created_at).toLocaleString("en-US", {
                dateStyle: "medium"
            });
        }
    }
}
</script>