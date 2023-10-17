<template>
	<div>
		<div class="gallery">
			<div class="gallery__large">
				<img :src="image[current].url" :alt="image[current].alt">
			</div>
			<div class="gallery__small" v-for="(image, idx) in  images" @click="setCurrent(idx)" :key="image.url">
				{{ image }}
				<img :src="image.url" :alt="image.alt">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VueGalleryComponent',

	data() {
		return {
			images: [
				{
					url: 'https://i.kinja-img.com/gawker-media/image/upload/s--fNW66I0c--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/1865zbfzzm5uyjpg.jpg',
					alt: 'кролень сидит далеко'
				},
				{
					url: 'https://celes.club/uploads/posts/2022-10/thumbs/1666893707_16-celes-club-p-krolik-s-rogami-instagram-17.jpg',
					alt: 'кролень скульптура'
				},
				{
					url: 'https://i.etsystatic.com/6436695/r/il/661711/2787476307/il_1588xN.2787476307_kqoo.jpg',
					alt: 'кролень иллюстрация'
				}
			],
			current: 0,

		};
	},

	methods: {
		setCurrent(value) {
			this.current = value;
		}
	},
};
</script>

<style lang="css" scoped>
.gallery {
	max-width: 1200px;
	margin: 0 auto;
	padding: 5px 15px;
	border: 1px solid teal;
	border-radius: 15px;
}

.gallery__large {
	max-width: 100%;
}

.gallery__large img {
	width: 500px;
}

.gallery__small {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}

.gallery__small img {
	width: 200px;
}
</style>