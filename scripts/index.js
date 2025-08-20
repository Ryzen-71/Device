const isEscapeKey = (evt) => evt.key === 'Escape';

// Открытие и закрытие  поповера
let basketLink = document.querySelector(".navigation-link-basket");
let userPopover = document.querySelector(".popover")

function openPopover() {
  userPopover.classList.add('popover-is-visible');
}

function closePopover() {
  userPopover.classList.remove('popover-is-visible');
}

basketLink.addEventListener('click', () => {
  openPopover()
})

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt))  {
    evt.preventDefault();
    closePopover()
  }
});

document.addEventListener('click', function(event) {
  if (event.target == userPopover) {
    closePopover()
  }
});

// Открытие и закрытие модального окна
let windowModalDelivery = document.querySelector(".modal-container");
let deliveryServiceLink = document.querySelector(".catalog-link-service-delivery");
let buttonModalClose = document.querySelector(".modal-close-button");

function openModalWindow() {
  windowModalDelivery.classList.add('modal-container-open')
}

deliveryServiceLink.addEventListener('click', () => {
  openModalWindow()
})

function closeModalWindow() {
  windowModalDelivery.classList.remove('modal-container-open')
}

buttonModalClose.addEventListener('click', () => {
  closeModalWindow()
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt))  {
    evt.preventDefault();
    closeModalWindow()
  }
});

  // Если клик был вне модального окна, закрываем его
document.addEventListener('click', function(event) {
  if (event.target == windowModalDelivery) {
     closeModalWindow()
  }
});

// Переключение кнопок в слайдере
let bannerPaginationButton = document.querySelector(".banner-pagination-button");
// let bannerPaginationList = document.querySelector("#bannerPaginationList");

document.getElementById('bannerPaginationList').addEventListener('click', event => {
  if (event.target.className ==="banner-pagination-button") {
    event.target.classList.add('banner-pagination-button-current');

  } else {
    event.target.classList.remove('banner-pagination-button-current');
  }
});

// Переключение кнопок в блоке services-company

let serviceCompanyButton = document.querySelector(".services-company-button")
let servicesCompany = document.querySelector("#servicesCompany")

document.getElementById('servicesCompany').addEventListener('click' ,event => {
  if (event.target.className === 'services-company-button button') {
            event.target.classList.add('services-company-button-current');
  } else {
    event.target.classList.remove('services-company-button-current');
  }
} );
