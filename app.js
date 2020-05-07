let amount = ['singleRoll', 'doubleRoll', 'tripleRoll', 'quadRoll', 'pentRoll', 'sextRoll']

//#region DICE CALCULATORS
function dieCalc1() {
  let elem = document.getElementById("die1")
  let result = ""
  let rng = Math.random()
  if (rng < 1 / 6) {
    result = 'die-1.png'
  } else if (rng < (1 / 6) * 2) {
    result = 'die-2.png'
  } else if (rng < (1 / 6) * 3) {
    result = 'die-3.png'
  } else if (rng < (1 / 6) * 4) {
    result = 'die-4.png'
  } else if (rng < (1 / 6) * 5) {
    result = 'die-5.png'
  } else if (rng < (1 / 6) * 6) {
    result = 'die-6.png'
  }
  elem.innerHTML = `<img src="${result}" alt="error loading image">`
}

function dieCalc2() {
  let elem = document.getElementById("die2")
  let result = ""
  let rng = Math.random()
  if (rng < 1 / 6) {
    result = 'die-1.png'
  } else if (rng < (1 / 6) * 2) {
    result = 'die-2.png'
  } else if (rng < (1 / 6) * 3) {
    result = 'die-3.png'
  } else if (rng < (1 / 6) * 4) {
    result = 'die-4.png'
  } else if (rng < (1 / 6) * 5) {
    result = 'die-5.png'
  } else if (rng < (1 / 6) * 6) {
    result = 'die-6.png'
  }
  elem.innerHTML = `<img src="${result}" alt="error loading image">`
}

function dieCalc3() {
  let elem = document.getElementById("die3")
  let result = ""
  let rng = Math.random()
  if (rng < 1 / 6) {
    result = 'die-1.png'
  } else if (rng < (1 / 6) * 2) {
    result = 'die-2.png'
  } else if (rng < (1 / 6) * 3) {
    result = 'die-3.png'
  } else if (rng < (1 / 6) * 4) {
    result = 'die-4.png'
  } else if (rng < (1 / 6) * 5) {
    result = 'die-5.png'
  } else if (rng < (1 / 6) * 6) {
    result = 'die-6.png'
  }
  elem.innerHTML = `<img src="${result}" alt="error loading image">`
}

function dieCalc4() {
  let elem = document.getElementById("die4")
  let result = ""
  let rng = Math.random()
  if (rng < 1 / 6) {
    result = 'die-1.png'
  } else if (rng < (1 / 6) * 2) {
    result = 'die-2.png'
  } else if (rng < (1 / 6) * 3) {
    result = 'die-3.png'
  } else if (rng < (1 / 6) * 4) {
    result = 'die-4.png'
  } else if (rng < (1 / 6) * 5) {
    result = 'die-5.png'
  } else if (rng < (1 / 6) * 6) {
    result = 'die-6.png'
  }
  elem.innerHTML = `<img src="${result}" alt="error loading image">`
}

function dieCalc5() {
  let elem = document.getElementById("die5")
  let result = ""
  let rng = Math.random()
  if (rng < 1 / 6) {
    result = 'die-1.png'
  } else if (rng < (1 / 6) * 2) {
    result = 'die-2.png'
  } else if (rng < (1 / 6) * 3) {
    result = 'die-3.png'
  } else if (rng < (1 / 6) * 4) {
    result = 'die-4.png'
  } else if (rng < (1 / 6) * 5) {
    result = 'die-5.png'
  } else if (rng < (1 / 6) * 6) {
    result = 'die-6.png'
  }
  elem.innerHTML = `<img src="${result}" alt="error loading image">`
}

function dieCalc6() {
  let elem = document.getElementById("die6")
  let result = ""
  let rng = Math.random()
  if (rng < 1 / 6) {
    result = 'die-1.png'
  } else if (rng < (1 / 6) * 2) {
    result = 'die-2.png'
  } else if (rng < (1 / 6) * 3) {
    result = 'die-3.png'
  } else if (rng < (1 / 6) * 4) {
    result = 'die-4.png'
  } else if (rng < (1 / 6) * 5) {
    result = 'die-5.png'
  } else if (rng < (1 / 6) * 6) {
    result = 'die-6.png'
  }
  elem.innerHTML = `<img src="${result}" alt="error loading image">`
}
//#endregion


function roll(num) {
  if (num == 1) {
    dieCalc1()
  } else if (num == 2) {
    dieCalc1()
    dieCalc2()
  } else if (num == 3) {
    dieCalc1()
    dieCalc2()
    dieCalc3()
  } else if (num == 4) {
    dieCalc1()
    dieCalc2()
    dieCalc3()
    dieCalc4()
  } else if (num == 5) {
    dieCalc1()
    dieCalc2()
    dieCalc3()
    dieCalc4()
    dieCalc5()
  } else if (num == 6) {
    dieCalc1()
    dieCalc2()
    dieCalc3()
    dieCalc4()
    dieCalc5()
    dieCalc6()
  }
}

//BUTTON TEMPLATES
function buttonTemplate(num) {
  let elem = document.getElementById("btnSpot")
  elem.innerHTML = `<button class="btn btn-primary" onclick="roll(${num})">
  <h2 class="m-auto">ROLL</h2>
</button>`
}

//DICE TEMPLATE HOLDER

function setDiceTemplate(num) {
  let elem3 = document.getElementById("outerDice")
  if (num == 1) {
    elem3.innerHTML = `<div class="row d-flex cstmMarginTop cstmHeight justify-content-center" id="dice">
  </div>`
  } else if (num > 1) {
    elem3.innerHTML = `<div class="row d-flex cstmMarginTop cstmHeight justify-content-even" id="dice">
    </div>`
  }
  diceTemplate(num)
}

//DICE TEMPLATE
function diceTemplate(num) {

  let elem2 = document.getElementById("dice")
  if (num == 1) {
    elem2.innerHTML = `<div class="col-4 d-flex justify-content-center " id="die1">
  </div>`

  } else if (num == 2) {
    elem2.innerHTML = `<div class="col-4 d-flex " id="die1">
  </div>
  <div class="col-4 d-flex" id="die2">
</div>`

  } else if (num == 3) {
    elem2.innerHTML = `<div class="col-4 text-center d-flex justify-content-center " id="die1">
    </div>
    <div class="col-4 text-center d-flex justify-content-center" id="die2">
    </div>
    <div class="col-4 text-center d-flex justify-content-center" id="die3">
    </div>`
  } else if (num == 4) {
    elem2.innerHTML = `<div class="col-6 text-center d-flex justify-content-center " id="die1">
    </div>
    <div class="col-6 text-center d-flex justify-content-center" id="die2">
    </div>
    <div class="col-6 text-center d-flex justify-content-center" id="die3">
    </div>
    <div class="col-6 text-center d-flex justify-content-center" id="die4">
    </div>`
  } else if (num == 5) {
    elem2.innerHTML = `<div class="col-6 text-center d-flex justify-content-center " id="die1">
    </div>
    <div class="col-6 text-center d-flex justify-content-center" id="die2">
    </div>
    <div class="col-6 text-center d-flex justify-content-center" id="die3">
    </div>
    <div class="col-6 text-center d-flex justify-content-center" id="die4">
    </div>
    </div>
    <div class="col-6 text-center d-flex justify-content-center" id="die5">
    </div>`
  } else if (num == 6) {
    elem2.innerHTML = `<div class="col-4 text-center d-flex justify-content-center " id="die1">
    </div>
    <div class="col-4 text-center d-flex justify-content-center" id="die2">
    </div>
    <div class="col-4 text-center d-flex justify-content-center" id="die3">
    </div>
    <div class="col-4 text-center d-flex justify-content-center" id="die4">
    </div>
    </div>
    div class="col-4 text-center d-flex justify-content-center" id="die5">
    </div>
    </div>
    div class="col-4 text-center d-flex justify-content-center" id="die6">
    </div>`
  }
}
//SELECTS TEMPLATES
function numDie(num) {
  if (num > 1) {
    buttonTemplate(num)
    setDiceTemplate(num)
  } else if (num == 2) {
    buttonTemplate(num)
    setDiceTemplate(num)

  }

}













// // SOURCES

// https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png

// https://www.zedge.net/find/wallpapers/magic%20the%20gathering