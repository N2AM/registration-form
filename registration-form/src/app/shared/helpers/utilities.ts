export class Utilities {
  Constructor() {}

  getUserToken() {
    if (localStorage.getItem("TOKEN")) {
      return localStorage.getItem("TOKEN");
    } else {
      return " ";
    }
  }
}
