<template>
  <div data-test="home-component" class="home">
    <div class="home-display">
      <div class="home-title">Welcome to The Magical Counter</div>
      <span data-test="count-display">{{ count }}</span>
      <div class="feedback-message" data-test="feedback-message">
        {{ feedback }}
      </div>
    </div>
    <div class="home-buttons">
      <button
        class="home-button decrement"
        @click="decrement"
        data-test="decrement-button"
      >
        <span>-</span>
      </button>
      <button
        class="home-button increment"
        @click="increment"
        data-test="increment-button"
      >
        <span>+</span>
      </button>
    </div>
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

<style lang="scss">
// colors
$bg: #eef0f0;
$display: #98c865;
$text: #425463;
$button-bg: #fa6b5b;
$button-color: #eef0f0;

body {
  margin: 0;
  background: #acd1de;
}
.home {
  display: inline-block;
  background: $bg;
  border-radius: 20px;
  margin-top: 10%;
  color: $text;
  padding: 10px;
  font-family: "VT323", monospace;
  .home-display {
    width: 300px;
    height: 200px;
    border-radius: 20px;
    margin: 0 auto;
    background: $display;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      font-size: 128px;
    }
  }
  .home-title {
    margin: 5px;
  }
  .home-buttons {
    width: 300px;
    text-align: center;
    margin: 20px auto;
  }
  .home-button {
    background: $button-bg;
    color: $button-color;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 45px;
    cursor: pointer;
    font-size: 45px;
    &.increment {
      span {
        position: relative;
        left: 1px;
      }
    }
    &.decrement {
      span {
        position: relative;
        top: -1px;
      }
    }
  }
  .feedback-message {
    margin: 5px;
    min-height: 20px;
  }
}
</style>
