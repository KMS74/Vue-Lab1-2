import { toast } from "https://cdn.jsdelivr.net/npm/vue3-toastify@0.1.4/+esm";

const app = Vue.createApp({
  data() {
    return {
      books: books,
      wishlist: [],
      showBooks: true,
    };
  },

  methods: {
    notify(message, type) {
      switch (type) {
        case "success":
          toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
        case "error":
          toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
          });
          break;

        case "warn":
          toast.warn(message, {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
      }
    },
    showWishList() {
      this.showBooks = !this.showBooks;
    },
    addToWhishlist(book) {
      if (this.wishlist.find((item) => item.isbn13 === book.isbn13)) {
        this.notify(`${book.title} is already added to your wishlist`, "warn");
        return;
      }
      this.wishlist.push(book);
      this.notify(`${book.title} added to your wishlist`, "success");
    },
    removeFromWhishlist(book) {
      this.wishlist = this.wishlist.filter(
        (item) => item.isbn13 !== book.isbn13
      );
      this.notify(`${book.title} removed from your wishlist`, "error");
    },
    currencyFormatter(value) {
      console.log("currencyFormatter called");
      // ar-SA
      return Intl.NumberFormat("en-US", {
        style: "currency",
        // SAR
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(value);
    },
  },
  computed: {},
});

app.mount("#app");
