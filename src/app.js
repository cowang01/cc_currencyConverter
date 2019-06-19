import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      test: "Testing",
      rawCurrency: {},
      currencyValue: 0,
      money: 0
    },
    mounted(){
      this.currencyRaw();
      // this.getCurrencies();
    },
    computed: {
      newCurrency: function(){
        return (this.money * this.currencyValue).toFixed(2);
        // return value.toFixed(2);
      }
    },
    methods: {
      currencyRaw: function() {const stream = fetch ("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(data => this.rawCurrency = data)
    }//,
    // getCurrencies: function() {
    //   this.currencies = this.rawCurrency.map(currency => currency.rates)
  }
})
})
// (this.money * this.currencies);
