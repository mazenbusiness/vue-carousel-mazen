<template>

  <div class="container">
    <div v-hammer:pan.horizontal="swipeHandler" class="carousel-container" v-bind:style="{
          width: measureWidth + 'px' ,
        }"> 
      <div
        class="carousel-3D"
        v-bind:style="{
          '-webkit-transform': 'rotateY(' + currentDegree + 'deg)',
          '-moz-transform': 'rotateY(' + currentDegree + 'deg)',
          '-o-transform': 'rotateY(' + currentDegree + 'deg)',
          transform: 'rotateY(' + currentDegree + 'deg)',
          transition: 'transform ease-in-out ' + rotationSpeed + 's',
        }"
      >
        <CarouselCard
          v-for="(card, index) in cardsData"
          :key="index"
          :linkText="card.linkText"
          :linkURL="card.linkURL"
          :imageURL="card.imageURL"
          :rotationDegrees="(index * 360) / cardsData.length"
          :cardWidth = "measureWidth"
        />
      </div>
    </div>
    <div class="carousel-buttons">
      <button class="carousel-btn" v-if='isArabic' v-on:click="rotate('prev')">&#129030;</button>
      <button class="carousel-btn"  v-else v-on:click="rotate('prev')">&#129028;</button>
      <button class="carousel-btn" v-if='isArabic' v-on:click="rotate('next')">&#129028;</button>
      <button class="carousel-btn" v-else v-on:click="rotate('next')">&#129030;</button>
    </div>
  </div>

</template>

<script>
import CarouselCard from "./carouselCard.vue";

export default {
  name: "carousel3D",
  components: {
    CarouselCard,
  },
  props: {
    cardsData: Array,
  },
  data() {
    return {
      // for rotation the carousel when swipe or clicking arrows by this degrees
      currentDegree: 0,
      // when swiping rotation must happens immediately (0sec). when clicking arrows (1sec)
      rotationSpeed: 1,
    };
  },
  computed: {
      // for calculate carousel and card width especially when we have more than 6 cards (less or equal 6 it is 250px)
      //  2* 3.1416 * 256 the circle length --- 0.5 is a little gap
    measureWidth() {
      return this.cardsData.length > 6 ? ((2* 3.1416 * 256) /  this.cardsData.length ) - ((this.cardsData.length  -1) * 0.5) : 250
    },
    isArabic() {
      return  document.querySelector("HTML").getAttribute("dir") === "rtl";
    },
  },
  methods: {
    // rotation method when clicking on arrows based on cards number
    rotate: function (direction) {
      if ((direction === "prev" && !this.isArabic ) || ( direction === "next" && this.isArabic ) )  {
        this.currentDegree = this.currentDegree + 360 / this.cardsData.length;
        this.rotationSpeed = 1;
        
      } else {
        this.currentDegree = this.currentDegree - 360 / this.cardsData.length;
        this.rotationSpeed = 1;
      }
    },
    // rotation method when swiping based on swiping direction (which we get from the Hammer library)
    // when we move the mouse by 90px we rotate the carousel 1 degree
    swipeHandler (ev) {
      if(ev.type === "panright"){
        this.currentDegree = this.currentDegree + ev.distance/90;
        this.rotationSpeed = 0;
        }
        if(ev.type === "panleft")
        this.currentDegree = this.currentDegree - ev.distance/90;
        this.rotationSpeed = 0;
        }

  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
}

.carousel-container {
  margin: 90px auto 150px;
  width: var(--slider-width);
  height: 200px;
  position: relative;
  cursor: grab;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotateX(-7deg);
}

.carousel-3D {
  height: 100%;
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
}

.carousel-buttons {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 740px;
  margin-inline: auto;
  padding-inline: 20px;
  pointer-events: none;
}

.carousel-btn {
  background: linear-gradient(180deg, #fff 0%, #c0a3de 100%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  pointer-events: all;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #48038f;
}
</style>
