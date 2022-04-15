
const axios = require('axios');
const Max = require('max-api');
// getUrl =
  // 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=6&interval=daily';

let myResponse;
const baseUrl = 'https://api.coingecko.com/api/v3/coins'
Max.post('Loaded script');
//
Max.addHandler('get', (coin,days) => {
  axios
    .get(`${baseUrl}/${coin}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then(function (response) {
      // myResponse = JSON.stringify(response.data);
      let prices = response.data.prices.map((price) => {
        return price[1] ;
      });
	  Max.post(prices);
      Max.outlet(prices);

	

    })
    .catch(function (error) {
      Max.post('error:');
	  Max.post(error)
    })
    .then(function () {
      Max.post('END');
    });
});

// node tester (in console)
// const nodeTester = (coin) => {
//   axios
//     .get(`${baseUrl}/${coin}/market_chart?vs_currency=usd&days=6&interval=daily`)
//     .then(function (response) {
//       myResponse = JSON.stringify(response.data);
//       let prices = response.data.prices.map((price) => {
//         return Math.round(price[1] * 100) / 100
//
//       });
//       console.log(prices);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .then(function () {});
// };

///
// nodeTester()

// const axios = require('axios');
// const Max = require('max-api');
// getUrl =
//   'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=6&interval=daily';
// let myResponse;
// Max.post('Loaded the script');

// Max.addHandler('get', () => {
//   axios
//     .get(getUrl)
//     .then(function (response) {
//       // myResponse = JSON.stringify(response.data);
//       let prices = response.data.prices.map((price) => {
//         return price[1];
//       });
//       Max.post(prices);
//       Max.outlet(prices);
//     })
//     .catch(function (error) {
//       Max.post('error');
//     })
//     .then(function () {
//       Max.post('END');
//     });
// });

// // node tester (in console)
// const nodeTester = () => {
//   axios
//     .get(getUrl)
//     .then(function (response) {
//       myResponse = JSON.stringify(response.data);
//       let prices = response.data.prices.map((price) => {
//         return price[1];
//       });
//       console.log(prices);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .then(function () {});
// };

///


// const axios = require('axios');
// const Max = require('max-api');
// getUrl =
//   'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=6&interval=daily';
// let myResponse;
// Max.post('Loaded the script');

// Max.addHandler('get', () => {
//   axios
//     .get(getUrl)
//     .then(function (response) {
//       // myResponse = JSON.stringify(response.data);
//       let prices = response.data.prices.map((price) => {
//         return price[1];
//       });
//       Max.post(prices);
//       Max.outlet(prices);
//     })
//     .catch(function (error) {
//       Max.post('error');
//     })
//     .then(function () {
//       Max.post('END');
//     });
// });

// // node tester (in console)
// const nodeTester = () => {
//   axios
//     .get(getUrl)
//     .then(function (response) {
//       myResponse = JSON.stringify(response.data);
//       let prices = response.data.prices.map((price) => {
//         return price[1];
//       });
//       console.log(prices);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .then(function () {});
// };

// ///
