<template>
  <div data-test="home-component" class="home">
    <span data-test="count-display">{{ count }}</span>
    <button @click="increment" data-test="increment-button">+</button>
    <button @click="decrement" data-test="decrement-button">-</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count !== 0) this.count--;
    }
  }
};
</script>
