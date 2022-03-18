// меню бургер
document.querySelector('.burger-burger').onclick = function () {
	let burger = document.querySelector('.burger-burger');
	burger.classList.add('_none');
	let close = document.querySelector('.burger-close');
	close.classList.add('_active');
	let menuBody = document.querySelector('.menu-body');
	menuBody.classList.add('_active');
}

document.querySelector('.burger-close').onclick = function () {
	let burger = document.querySelector('.burger-burger');
	burger.classList.remove('_none');
	let close = document.querySelector('.burger-close');
	close.classList.remove('_active');
	let menuBody = document.querySelector('.menu-body');
	menuBody.classList.remove('_active');
}

// Добавляем товары в каталоге "Показать еще"
if (document.querySelector('.more-btn')) {
	document.querySelector('.more-btn').onclick = function () {
		let containerItems = document.querySelector('.cart-items');
		containerItems.insertAdjacentHTML(
			'beforeend',
			`<a class="cart" href="./product.html">
		<img class="p-image" src="images/product.png" alt="product">
		<p class="p-name">Подвеска</p>
		<p class="p-company">Dolce & Gabanna</p>
		<div class="price">175 000 ₽</div>
	</a>
	<a class="cart" href=" #">
		<img class="p-image" src="images/product.png" alt="product">
		<p class="p-name">Подвеска</p>
		<p class="p-company">Dolce & Gabanna</p>
		<div class="price">175 000 ₽</div>
	</a>
	<a class="cart" href=" #">
		<img class="p-image" src="images/product.png" alt="product">
		<p class="p-name">Подвеска</p>
		<p class="p-company">Dolce & Gabanna</p>
		<div class="price">175 000 ₽</div>
	</a>`
		)
	};
}
// "Читать полность" и белое замытие исчезают, 
// добавляется текст на странице продукта и каталога
if (document.querySelector('.read')) {
	document.querySelector('.read').onclick = function () {
		document.querySelector('.read').style.display = 'none';
		document.querySelector('.light').style.position = 'relative';
		let contentText = document.querySelector('.descr-read');
		contentText.insertAdjacentHTML(
			'beforeend',
			`Lrat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas
		dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus
		id.
		Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
		Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et
		augue.
		Sed
		dignissim amet ut vitae at ornare sed.`
		)
	}
}
// Картинки переключение
let secondaryImg = document.querySelectorAll('.secondary-img');
let mainImg = document.querySelector('.main-img');

for (let i = 0; i < secondaryImg.length; i++) {
	secondaryImg[i].onclick = function () {
		let src = secondaryImg[i].src;
		mainImg.src = src;
	}
}


