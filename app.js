// Constructor function for Drinks
function Drink (name, sugar, ice) {
  this.name = name
  this.sugar = sugar
  this.ice = ice
}

// Price methods: get price according to the drink
Drink.prototype.price = function() {
  switch (this.name) {
    case 'Black Tea':
    case 'Oolong Tea':
    case 'Baozong Tea':
    case 'Green Tea':
      return 30
    case 'Bubble Milk Tea':
    case 'Lemon Green Tea':
      return 50
    case 'Black Tea Latte':
    case 'Matcha Latte':
      return 55
    default:
      alert('No this drink.')
  }
}

// Constructor function for Alpha Pos System
function AlphaPos() { }
AlphaPos.prototype.getCheckedValue = function (inputName) {
  let selectedOption = ''
  document.querySelectorAll(`[name="${inputName}"]`).forEach(function (item) {
    if (item.checked) {
      selectedOption = item.value
    }
  })
  return selectedOption
}

// new the alphaPos Instance
const alphaPos = new AlphaPos()

// Add-order event listener
const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click', () => {
  // 1. acquire selected options
  const drinkName = alphaPos.getCheckedValue('drink')
  const ice = alphaPos.getCheckedValue('ice')
  const sugar = alphaPos.getCheckedValue('sugar')
  // 2. alert if nothing is checked
  if (!drinkName) {
    alert('Please choose at least one item.')
    return
  }
  // 3. new drink instance and get the price
  const drink = new Drink(drinkName, sugar, ice)
  console.log(drink)
  console.log(drink.price())
  // 4. generate order on the left side
  alphaPos.addDrink(drink)
})

// Insert drink instance into order list
const orderLists = document.querySelector('[data-order-lists]')
AlphaPos.prototype.addDrink = function (drink) {
  let orderListsCard = `
  <div class="card mb-3">
    <div class="card-body pt-3 pr-3">
      <div class="text-right">
        <span data-alpha-pos="delete-drink">×</span>
      </div>
      <h6 class="card-title mb-1">${drink.name}</h6>
      <div class="card-text">${drink.ice}</div>
      <div class="card-text">${drink.sugar}</div>
    </div>
    <div class="card-footer text-right py-2">
      <div class="card-text text-muted">$ <span data-drink-price>${drink.price()}</span></div>
    </div>
  </div>
  `
  orderLists.insertAdjacentHTML('afterbegin', orderListsCard)
}



// Acquire all chosen drinks, ice, and sugar
let allDrinksOptions = document.querySelectorAll('input[name="drink"]')
allDrinksOptions.forEach(function(option) {
  if (option.checked) {
    console.log(`${option.value}: ${option.checked}`)
  }
})

let allIceOptions = document.querySelectorAll('input[name="ice"]')
allIceOptions.forEach(function(option) {
  if (option.checked) {
    console.log(`${option.value}: ${option.checked}`)
  }
})

let allSugarOptions = document.querySelectorAll('input[name="sugar"]')
allSugarOptions.forEach(function (option) {
  if (option.checked) {
    console.log(`${option.value}: ${option.checked}`)
  }
})
