let dino = document.querySelector('.dino__img')
let cactus = document.querySelector('.dino__cactus--img1')
let cactus2 = document.querySelector('.dino__cactus--img2')
let cactus3 = document.querySelector('.dino__cactus--img3')
let cactus4 = document.querySelector('.dino__cactus--img4')
let scoreElement = document.querySelector('.score')
let cloud2 = document.querySelector('.cloud__dino2')
let cloud3 = document.querySelector('.cloud__dino3')
let cloud4 = document.querySelector('.cloud__dino4')

let score = 0
// Оновлюємо рахунок кожну секунду
let checkscore = setInterval(() => {
	score += 1 // Збільшуємо рахунок на 1
	scoreElement.innerHTML = score // Оновлюємо текст у HTML елементі
}, 1000)

let screenWidth = window.innerWidth // Ширина экрана
let screenHeight = window.innerHeight // Высота экрана

setInterval(() => {
	cloud2.classList.add('cloud__animation')
}, 3000)

setInterval(() => {
	cloud3.classList.add('cloud__animation')
}, 6000)
setInterval(() => {
	cloud4.classList.add('cloud__animation')
}, 10000)

setTimeout(() => {
	cactus2.classList.add('cactus')
}, 2000)

setTimeout(() => {
	cactus3.classList.add('cactus')
}, 3000)

setTimeout(() => {
	cactus4.classList.add('cactus')
}, 4000)

document.addEventListener('keydown', function (event) {
	jump()
})

function jump() {
	if (dino.classList != 'jump') {
		dino.classList.add('dino__jump')
	}
	setTimeout(() => {
		dino.classList.remove('dino__jump')
	}, 600)
}

let alive = setInterval(() => {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
	let cactusleft = parseInt(
		window.getComputedStyle(cactus).getPropertyValue('left')
	)
	let cactusleft2 = parseInt(
		window.getComputedStyle(cactus2).getPropertyValue('left')
	)
	let cactusleft3 = parseInt(
		window.getComputedStyle(cactus3).getPropertyValue('left')
	)
	let cactusleft4 = parseInt(
		window.getComputedStyle(cactus4).getPropertyValue('left')
	)

	if (cactusleft < 100 && cactusleft > 0 && Math.abs(dinoTop) <= 30) {
		alert('game over')
		window.location.href = 'index.html' // Вказуєте шлях до сторінки
	}
	if (cactusleft2 < 100 && cactusleft2 > 0 && Math.abs(dinoTop) <= 30) {
		alert('game over')
		window.location.href = 'index.html' // Вказуєте шлях до сторінки
	}
	if (cactusleft3 < 100 && cactusleft3 > 0 && Math.abs(dinoTop) <= 30) {
		alert('game over')
		window.location.href = 'index.html' // Вказуєте шлях до сторінки
	}
	if (cactusleft4 < 100 && cactusleft4 > 0 && Math.abs(dinoTop) <= 30) {
		alert('game over')
		window.location.href = 'index.html' // Вказуєте шлях до сторінки
	}
}, 90)

//Skins
let skinsSwitch = document.querySelector('.dino--img--skins')
let takesSkins = localStorage.getItem('userSkins')
if (takesSkins == 'OG1') {
	skinsSwitch.src = 'skins/original dino/Dino Animation.gif'
} else if (takesSkins == 'CD2') {
	skinsSwitch.src = 'skins/cool dino/Dino_cool.gif'
} else if (takesSkins == 'FD3') {
	skinsSwitch.src = 'skins/flower dino/Dino_flower.gif'
} else if (takesSkins == 'PD4') {
	skinsSwitch.src = 'skins/piviozavr dino/Dino_pivozavr.gif'
} else if (takesSkins == 'RD5') {
	skinsSwitch.src = 'skins/robocop dino/Dino_robocop.gif'
} else if (takesSkins == 'SD6') {
	skinsSwitch.src = 'skins/snow dino/Dino_snow.gif'
}
