# Blog V2

V2 of my personal blog. This version is built on NuxtJS in order to leverage Server Side Rendering to improve SEO and performance. You can check the site [here](https://blog.deepjyoti30.dev)

## Deploy locally

Just in case, you want to try the app locally, you can pull the latest image and deploy with the following command:

```console
docker run -d -p 8080:8080 ghcr.io/deepjyoti30/blog-web:latest 
```

The latest image is built everytime a merge is done in the production branch. If you want to experiment with the bleeding edge and get new features, try out [setup](#setup)

## Setup

In order to run the project locally, you need to clone the repo and run:

```console
git clone git@github.com:deepjyoti30/blog-frontend-v2 && npm i && npm run dev
```

If you want to build and serve, use the following:


```console
npm run build && npm run serve
```