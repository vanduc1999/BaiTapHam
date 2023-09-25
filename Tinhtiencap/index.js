
    function showHideConnectionInput() {
      var customerType = document.getElementById("customerType").value;
      var connectionInput = document.getElementById("connectionInput");

      if (customerType === "doanhNghiep") {
        connectionInput.style.display = "block";
      } else {
        connectionInput.style.display = "none";
      }
    }

    function calculatePrice() {
      var customerType = document.getElementById("customerType").value;
      var numConnections = parseInt(document.getElementById("numConnections").value);
      var price = 0;

      if (customerType === "doanhNghiep") {
        if (numConnections <= 10) {
          price = 75;
        } else {
          price = 75 + (numConnections - 10) * 5;
        }
      }

      document.getElementById("price").textContent = price + "$";
      document.getElementById("totalPrice").style.display = "block";
    }