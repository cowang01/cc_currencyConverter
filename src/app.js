import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      test: "Testing",
      rawCurrency: {},
      currencies: [],
      money: 0
    },
    mounted(){
      this.currencyRaw();
      this.getCurrencies();
    },
    methods: {
      currencyRaw: function() {const stream = fetch ("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(data => this.rawCurrency = data)
    },
    getCurrencies: function() {
      this.currencies = this.rawCurrency.map(currency => currency.rates)
    }
  }
})
})
