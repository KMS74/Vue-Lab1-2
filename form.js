const app = Vue.createApp({
  data() {
    return {
      isUserDataVisible: false,
      post: {
        title: "",
        content: "",
        description: "",
        category: "",
        sharedOn: [],
        series: "",
        sendImmdiatly: false,
      },
      postData: {
        categories: ["Development", "Designing", "Networking", "Testing"],
        sharedOn: ["Facebook", "Twiteer", "LinkedIn"],
        series: ["One", "Two", "Three"],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("form submitd");
      console.log(post);
    },
  },
});

app.mount("#app");
