<template>
  <section id="home-section" class="hero">
    <div class="home-slider owl-carousel">
      <div class="slider-item">
        <div class="overlay"></div>
        <div class="container-fluid px-md-0">
          <div
            class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
            data-scrollax-parent="true"
          >
            <div class="one-third order-md-last img" style="background-image: url(/images/bg1.png)">
              <div class="overlay"></div>
              <div class="overlay-1"></div>
            </div>
            <div
              class="one-forth d-flex align-items-center ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div class="text">
                <span class="subheading">Hello! This is Jiten</span>
                <h1 class="mb-4 mt-3">
                  I write <span>Python</span> that's both <span>Powerful &amp; Pythonic</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item">
        <div class="overlay"></div>
        <div class="container-fluid px-md-0">
          <div
            class="row d-flex no-gutters slider-text align-items-end justify-content-end"
            data-scrollax-parent="true"
          >
            <div class="one-third order-md-last img" style="background-image: url(/images/bg2.jpg)">
              <div class="overlay"></div>
              <div class="overlay-1"></div>
            </div>
            <div
              class="one-forth d-flex align-items-center ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <div class="text">
                <span class="subheading">New skills? Challenge accepted!</span>
                <h1 class="mb-4 mt-3">Always up for a <span>learning adventure</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  mounted() {
    console.log('HomeSection mounted')
    // Debug check for jQuery and plugins
    console.log('jQuery available:', typeof window.$ !== 'undefined')
    console.log('Owl Carousel available:', typeof window.$.fn?.owlCarousel !== 'undefined')

    setTimeout(() => {
      if (window.$ && window.$.fn.owlCarousel) {
        $('.home-slider').owlCarousel({
          loop: true,
          autoplay: true,
          margin: 0,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          nav: false,
          autoplayHoverPause: false,
          items: 1,
          navText: [
            "<span class='ion-md-arrow-back'></span>",
            "<span class='ion-chevron-right'></span>",
          ],
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        })
        console.log('Owl Carousel initialized successfully')
      } else {
        console.warn('Owl Carousel is not available')
      }
    }, 500) // Increased delay for DOM to be fully rendered
  },
}
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
