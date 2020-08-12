<template>
  <div>
    <el-input v-model="inputValue" placeholder="请输入数字"  @keypress.native="numberInput"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    numberInput:function(e){
      // e.value = /[^\\d\\.]/.test(e.value)
      e.returnValue=/\d/.test(e.key)
      console.log(e);
    }
  }
};
</script>
<style>
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>