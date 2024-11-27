<template>
  <Carousel3D :cardsData= fetchedCardsData />
</template>

<script>
import Carousel3D from "./components/carousel3D.vue";

export default {
  name: "App",
  components: {
    Carousel3D,
  },
  data() {
    return {
      fetchedCardsData: [
        { linkText: "show more", linkURL: "when-clicked-go-to-this-URL", imageURL: "https://png.pngtree.com/background/20230519/original/pngtree-dark-purple-flowers-at-night-wallpaper-on-mobile-picture-image_2650266.jpg" },
        { linkText: "show more", linkURL: "when-clicked-go-to-this-URL", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENLPPZgeUYWwD4wKfjT2rdN8tf1kw2zT4dQ&s" },
        { linkText: "show more", linkURL: "when-clicked-go-to-this-URL", imageURL: "https://wallpapers.com/images/featured/purple-sunset-4vdctecz52uxuo4v.jpg" },
        { linkText: "show more", linkURL: "when-clicked-go-to-this-URL", imageURL: "https://media.istockphoto.com/id/1405835459/photo/blue-and-pink-colorful-clouds-of-smoke-and-shiny-glitter-powder-particles-bursts-background.jpg?s=612x612&w=0&k=20&c=Ga8d-z9yHCu3yObFD1nEM6yDECsVH45vUe456324NhA=" },
        { linkText: "show more", linkURL: "when-clicked-go-to-this-URL", imageURL: "https://www.freevector.com/uploads/vector/preview/9500/FreeVector-Purple-Waves-Dots-Background.jpg" },
        { linkText: "show more", linkURL: "when-clicked-go-to-this-URL", imageURL: "https://wallpapers.com/images/featured/black-and-purple-background-ncacwppi5dvfsax4.jpg" },
      ],
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --num-of-cards: 6;
  --slider-width: 250px;
}

html,
body,
h1,
h2,
h3,
h4,
p,
ul {
  margin: 0;
}

ul {
  list-style: none;
  padding-left: 0;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

button,
input {
  outline: none;
}

button {
  border: none;
  background-color: #fff;
}

html, body{
  height: 100%;
}

body {
  font-family: "poppins", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  line-height: normal;
  font-style: normal;
  width: 100%;
  background: #330e66;
  background: linear-gradient(#330e66, #ebdcff, #330e66);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
