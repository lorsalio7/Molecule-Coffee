let phoneInput = document.querySelector(".order-form__phone");
let phoneCode = document.querySelector(".order-form__operator-code");
let dateOrder = document.querySelector(".order-form__date");
let timeOrder = document.querySelector(".order-form__time");

if(phoneCode) {
  phoneCode = new Cleave(phoneCode, {
    numeral: true,
    delimiter: ''
  })
}

if(phoneInput) {
  phoneInput = new Cleave(phoneInput, {
    numeral: true,
    delimiter: ''
  })
}

if(dateOrder) {
  dateOrder = new Cleave(dateOrder, {
    date: true,
    datePattern: ['d', 'm', 'Y']
  })
}

if(timeOrder) {
  timeOrder = new Cleave(timeOrder, {
    time: true,
    timePattern: ['h', 'm']
  })
}

