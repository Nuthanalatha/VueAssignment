let app = Vue.createApp({
  data() {
    return {
      colors: ["green", "red", "white", "black", "pink"],
      numbers: [145, 2222, 36, 48, 576, 609],
      things: ["pen", "book", "table", "pencile", "playwood"],
      names: [
        "Gangadharappa",
        "Latha",
        "Meghana",
        "Nuthana",
        "Manju",
        "Mohak",
        "Lathish",
        "Prema",
      ],
      fruits: ["apple", "mango", "lichi", "orange", "Banana"],
    };
  },
});

app.mount("#list");
