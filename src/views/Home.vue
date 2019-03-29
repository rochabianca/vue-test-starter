<template>
  <div data-test="home-component" class="home">
    <span data-test="count-display">{{ count }}</span>
    <button @click="increment" data-test="increment-button">+</button>
    <button @click="decrement" data-test="decrement-button">-</button>
    <span data-test="feedback-message">{{ feedback }}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      count: 0,
      feedback: null
    };
  },
  methods: {
    increment() {
      this.count++;
      if (this.feedback && this.feedback.length > 0) this.feedback = null;
    },
    decrement() {
      this.count !== 0
        ? this.count--
        : (this.feedback = "You can't decrement zero!");
    }
  }
};
</script>
