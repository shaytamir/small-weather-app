export const enterPress = () => {
  document.querySelector("#where").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.getElementById("city_btn").click();
    }
    //     // console.log(e);
  });
};
