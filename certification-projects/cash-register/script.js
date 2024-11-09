document.addEventListener("DOMContentLoaded", function () {
  let price = 1.87;
  let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ];

  const cash = document.getElementById("cash");
  const changeDue = document.getElementById("change-due");
  const purchaseBtn = document.getElementById("purchase-btn");
  const priceScreen = document.getElementById("price-screen");
  const cidContainer = document.getElementById("cidContainer");

  function renderPrice() {
    priceScreen.innerText = "Price: $" + price.toFixed(2);
  }

  function renderCid() {
    cidContainer.innerHTML = cid
      .map((e) => {
        return `<p>${e[0]}: ${e[1].toFixed(2)}</p>`;
      })
      .join("");
  }
  function renderChangeDue(status, change = []) {
    changeDue.innerHTML = "Status: " + status;

    change.length > 0
      ? (changeDue.innerHTML += `<div>Change Due: ${change
          ?.map((e) => `<div><b>${e[0]}</b>:${e[1]}</div> `)
          .join("")}</div>`)
      : "";
  }

  function handleChangeReturn(change) {
    let cidCopy = [
      ...cid.map((e) => [e[0], Math.round(Number(e[1]) * 100)]),
    ].reverse();

    let values = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    let changeGiven = [];

    for (let i = 0; i < values.length; i++) {
      let availableQuantity = cidCopy[i][1];
      let unitsToUse = Math.min(
        parseInt(change / values[i]) * values[i],
        availableQuantity
      );

      if (unitsToUse > 0) {
        changeGiven.push([cidCopy[i][0], (unitsToUse / 100).toFixed(2)]);
        change -= unitsToUse;
        cid[values.length - i - 1][1] -= unitsToUse / 100;
      }

      if (change === 0) break;
      console.log(changeGiven);
    }

    renderCid();

    return changeGiven;
  }

  function validateCash() {
    const cashValueInCents = Math.round(Number(cash.value) * 100);
    const priceValueInCents = Math.round(price * 100);
    cash.value = "";

    let totalCid = 0;
    let change = 0;

    cid.forEach((e) => (totalCid += Number(e[1]) * 100));
    console.log("totalCid", totalCid);

    change = cashValueInCents - priceValueInCents;

    if (cashValueInCents < priceValueInCents) {
      alert("Customer does not have enough money to purchase the item");
    } else if (cash == price) {
      changeDue.innerText = "No change due - customer paid with exact cash";
    } else {
      if (totalCid > change) {
        renderChangeDue("OPEN", handleChangeReturn(change));
      } else {
        renderChangeDue("INSUFFICIENT_FUNDS");
      }
    }
  }

  purchaseBtn.addEventListener("click", validateCash);

  renderPrice();
  renderCid(cid);
});
