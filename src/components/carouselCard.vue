<template>
  <div class="slide" v-bind:style="{ transform: 'rotateY(' + rotationDegrees  + 'deg) translateZ(250px)', width: cardWidth + 'px' }">
    <div class="card-content">
      <img :src="imageURL" alt="" />
      <a :href="linkURL" class="text">{{linkText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "carouselCard",
  props: {
    linkText: String,
    imageURL: String,
    linkURL: String,
    rotationDegrees: Number,
    cardWidth: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide {
  display: block;
  position: absolute;
  background: #000;
  width: 250px;
  height: 200px;
  line-height: 200px;
  font-size: 5em;
  text-align: center;
  color: #FFF;
  opacity: 0.95;
  border-radius: 10px;
  transition: all 0.8s;
  -webkit-box-reflect: below 1px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
}

.slide:hover{
  opacity: 1;
}

.card-content{
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
  font-size: 18px;
  color: #fff;
  overflow: hidden;
  line-height: initial;
  border-radius: inherit;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.card-content:hover img{
  scale: 1.1;
}

.card-content img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: all 0.8s;
}

.card-content a{
  display: inline;
  font-size: 18px;
  color: #fff;
  backdrop-filter: blur(4px);
  padding: 10px;
  width: 100%;
  text-align: start;
}
</style>
