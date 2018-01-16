<template>
  <div>
1111
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      pwd: null
    };
  },
  mounted(le) {
    axios({
      url: '/api/auth/login',
      method: 'POST',
      data: ''
    }).then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>
