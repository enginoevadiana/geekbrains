<template>
	<div class="slider">
		<h1>Slider</h1>
		<div class="bigImage">
			<img :src="curentImg" alt="">
		</div>
		<div class="miniImages">
			<img @click="changeImg(image)" v-for="image in images" :key="image" :src="image" alt="">
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			curentImg: 'https://amazingfacts.ru/wp-content/uploads/2023/09/1-1.jpg',
			images: [
				'https://amazingfacts.ru/wp-content/uploads/2023/09/1-1.jpg',
				'https://gas-kvas.com/uploads/posts/2023-02/1675445844_gas-kvas-com-p-fonovii-risunok-rizhii-kot-28.jpg',
				'https://get.wallhere.com/photo/cat-winter-whiskers-wild-cat-fauna-mammal-vertebrate-close-up-cat-like-mammal-small-to-medium-sized-cats-tabby-cat-domestic-short-haired-cat-rusty-spotted-cat-european-shorthair-1598x1064-px-529898.jpg'
			]
		}
	},
	methods: {
		changeImg(thisImage) {
			this.curentImg = thisImage;
		}
	}
}
</script>

<style>
.bigImage img {
	width: 500px;
	margin-bottom: 30px;
}

.miniImages {
	display: flex;
	justify-content: center;
	gap: 30px;
}

.miniImages img {
	width: 200px;
}
</style>

<!-- Создайте компонент галереи изображений, который будет отображать одно большое изображение и под ним будут находиться три мини изображения. При клике на любое мини изображение оно должно отображаться вместо большого. -->