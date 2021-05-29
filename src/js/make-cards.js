import cardsTpl from '../teamplates/food-cards.hbs'
import cardsMenu from '../menu.json'
const menuRef = document.querySelector('.js-menu')
const cardsMurcup = cardsTpl(cardsMenu)
menuRef.insertAdjacentHTML('beforeend', cardsMurcup)