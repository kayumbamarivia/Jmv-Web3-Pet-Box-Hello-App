App = {
  web3Provider: null,
  contracts: {},
  account: null,

  init: async function () {
    return await App.initWeb3();
  },

  initWeb3: async function () {
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        await window.ethereum.enable();
      } catch (error) {
        console.error("User denied account access")
      }
    }
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function () {
    $.getJSON('Hello.json', function (data) {
      var YourNewContractArtifact = data;
      App.contracts.YourNewContract = TruffleContract(YourNewContractArtifact);
      App.contracts.YourNewContract.setProvider(App.web3Provider);
      return App.displayGreeting();
    });

    return App.bindEvents();
  },

  bindEvents: function () {
  },

  displayGreeting: function () {
    var yourNewContractInstance;
  
    App.contracts.YourNewContract.deployed().then(function (instance) {
      yourNewContractInstance = instance;
  
      return yourNewContractInstance.getGreeting.call();
    }).then(function (greeting) {
      $("#greeting").text(greeting);
    }).catch(function (err) {
      console.log(err.message);
    });
  }
  
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
