<template>
    <div class="post--header__container">
        <h1 class="text-3xl dm-sans font-medium text-darkblue">{{post.title}}</h1>
        <div class="more--details flex text-gray-500 mt-4 font-medium">
            <div class="author--details inline-flex items-center">
                <span class="author--name text-darkblue">{{post.author.name}}</span>
                <span class="author--username ml-3">@{{post.author.username}}</span>
            </div>
            <div class="separator h-5 w-0.5 bg-skyblue mx-2"></div>
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