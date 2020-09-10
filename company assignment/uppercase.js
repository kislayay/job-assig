new Vue({
  el: '#app',
  data: {
    myid: ''
  },
  methods: {
    click: function() {
      console.log('clicked id=', this.myid)
    }
  }
});

div input {
  text-transform: uppercase
}

<script src="https://unpkg.com/vue@2.5.10/dist/vue.min.js"></script>
<div id="app">
  <input type="text" v-model="myid" placeholder="My ID" />
  <button type="button" @click="click">Submit</button>
</div>