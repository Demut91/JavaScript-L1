class Marmalade {
	name = 'jellyBears'
	taste = ''
	price = ''
	addedToBasket = false
	_amount = 0
	adding () {
		this.addedToBasket = true
		this._amount++
	}
	constructor (taste, price) {
		this.taste = taste
		this.price = price
	}
}
const bear1 = new Marmalade('orange', 54)
const bear2 = new Marmalade('pineapple', 38)
const bear3 = new Marmalade('cherry', 42)
//класс корзины
class basket {
	list = []                                    //пустой массив товаров-объектов
	sum = 0
	adding (obj) {
		obj.adding()                             //выполнение метода для товара
		this.sum = this.sum + obj.price          //подсчет суммы корзины
		if (this.list.indexOf(obj) < 0) {        //проверяем, не добавлен ли уже товар
			this.list.push(obj)                  //добавляем товар в корзину
			}
		}
	}
const myBasket = new basket
//добавление в корзину
	myBasket.adding(bear1)
	myBasket.adding(bear1)
	myBasket.adding(bear2)
	myBasket.adding(bear3)
//список и сумма
//console.log(myBasket.list)
//console.log(myBasket.sum)

	const basketList = myBasket.list
	const table = document.querySelector('table')

	basketList.forEach(product => {
		//add new stroka
		const stroka = document.createElement('tr')
		table.appendChild(stroka)
		//add first cell to stroka
		const nazvanie = document.createElement('td')
		nazvanie.innerText = product.taste
		stroka.appendChild(nazvanie)
		//add second cell to stroka containing amount
		const amount = document.createElement('td')
		amount.innerText = product._amount
		stroka.appendChild(amount)
		//add last cell to stroka containing price
		const price = document.createElement('td')
		price.innerText = product.price
		stroka.appendChild(price)
	})
	const itogo = document.createElement('tr')
	table.appendChild(itogo)
	const cellItogo = document.createElement('td')
	itogo.appendChild(cellItogo)
	cellItogo.setAttribute('colspan', 2)
	cellItogo.innerText = 'ИТОГО:'

	const summa = document.createElement('td')
	itogo.appendChild(summa)
	summa.innerText = myBasket.sum


