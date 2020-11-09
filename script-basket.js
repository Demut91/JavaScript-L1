class Product {
	taste = ''
	img = ''
	price = ''
	addedToBasket = false
	_amount = 0
	adding () {
		this.addedToBasket = true
		this._amount++
	}

	removing () {
		this._amount--
	}

	constructor (taste, img, price) {
		this.img = img
		this.taste = taste
		this.price = price
	}

 	getRender () {
   	 	const { taste, price, img } = this
   		const place = document.querySelector('.container2')
   	 	const wrapper = document.createElement('div')
    	wrapper.classList.add('product')
   	 	place.appendChild(wrapper)
    	wrapper.innerHTML = `
    	<h4>Конфеты Ozera "${taste}"</h4>
        <img src="../img/${img}" alt="sweetphoto" width=200 px> <br>
        <h4>Цена: ${price} рублей</h4><br>`

        const btn1 = document.createElement('div')
    	wrapper.appendChild(btn1)
    	wrapper.appendChild(this.buttonRender())
    	btn1.classList.add('button')
    	btn1.innerHTML = 'Подробнее'
	}

	buttonRender () {
    	const btn2 = document.createElement('div')
    	btn2.classList.add('button')
    	btn2.innerHTML = 'В корзину'

    	btn2.addEventListener('click', () => {
    		const myBasket = new Cart()
    		myBasket.adding(this)
    		myBasket.render()

    	})
    	return btn2

	}



	minusRender () {
    	const btn3 = document.createElement('button')
    	btn3.classList.add('minus')
    	btn3.innerHTML = '-'

    	btn3.addEventListener('click', () => {
    		const myBasket = new Cart()
    		myBasket.removing(this)
    		myBasket.render()

    	})
    	return btn3

	}
}

const ozera1 = new Product('Вкус успешного дня', 'day.png', 214)
ozera1.getRender()
const ozera2 = new Product('Вкус радостного утра', 'morning.png', 235)
ozera2.getRender()
const ozera3 = new Product('Вкус страстной ночи', 'night.png', 260)
ozera3.getRender()

//класс корзины
//
//
class Cart {
	constructor () {
    	if (Cart._instance) {
      		return Cart._instance
    	}
	Cart._instance = this
  	}

	list = []                                    //пустой массив товаров-объектов
	sum = 0
	adding (product) {
		product.adding()                             //выполнение метода для товара
		this.sum = this.sum + product.price          //подсчет суммы корзины
		if (this.list.indexOf(product) < 0) {        //проверяем, не добавлен ли уже товар
			this.list.push(product)                  //добавляем товар в корзину
			}
		}
	removing (product) {
		product.removing()
		this.sum = this.sum - product.price
		// if (product._amount == 0) {

		//	}
		}


	render () {
		const table = document.querySelector('table')


    	if (!table) {
    	  return
    	}
		table.innerHTML = ''

			this.list.forEach(product => {
			const tablerow = document.createElement('tr')       //добаление строки
			table.appendChild(tablerow)

			const title = document.createElement('td')          //первая ячейка строки
			title.innerText = product.taste
			tablerow.appendChild(title)

			const amount = document.createElement('td')         //строка с количеством
			amount.innerText = product._amount
			tablerow.appendChild(amount)
			amount.appendChild(product.minusRender())

			const price = document.createElement('td')           //строка с ценой
			price.innerText = product.price * product._amount
			tablerow.appendChild(price)


		})
	const checkout = document.createElement('tr')
	table.appendChild(checkout)

	const cellCheckout = document.createElement('td')
	checkout.appendChild(cellCheckout)

	cellCheckout.setAttribute('colspan', 2)
	cellCheckout.innerText = 'ИТОГО:'

	const summa = document.createElement('td')
	checkout.appendChild(summa)
	summa.innerText = this.sum
	}
}

