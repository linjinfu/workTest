<template>
  <div id="app">
    <!-- <number-input></number-input> -->
    <china-Map />
  </div>
</template>

<script>
// import NumberInput from "./components/NumberInputComponent"
import ChinaMap from './components/ChinaMapComponent'

export default {
  name: 'App',
  components: {
    // NumberInput,
    ChinaMap
  }
}
</script>

<style>
@import "./style/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
