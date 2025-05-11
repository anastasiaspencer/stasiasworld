document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      });
  });

//   document.addEventListener("DOMContentLoaded", function () {
//     fetch("components/footer.html")
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById("footer-placeholder").innerHTML = data;
//       });
//   });