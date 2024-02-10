<template>
	<div>
		<div class="mainPageImgContainer">
			<img src="@/assets/projectDetails_banner.jpg" alt="article banner" class="mainPageImg">
		</div>

		<div class="project-details-container">
			<div class="details-text">
				<h3>Minimal Look Bedrooms</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam
					sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
					fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.<br><br>

					In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis
					nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit,
					in
					viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
			</div>
			<div class="img-container">
				<img :src="curentImg" alt="image">
				<span class="zoom">
					<a :href="curentImg" target="_blank"><img src="@/assets/zoom-icon.png" alt=""></a>
				</span>
			</div>
			<div class="control-container">
				<svg @click="changeImg(image.path)" v-for="image in images" :key="image.id" width="800px" height="800px"
					viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
						stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProjectDetails',

	data() {
		return {
			curentImg: require('@/assets/projectdetailsslider1.png'),
			images: [
				{ id: 1, path: require('@/assets/projectdetailsslider1.png') },
				{ id: 2, path: require('@/assets/details_article5.jpg') },
				{ id: 3, path: require('@/assets/details_article3.jpg') },
			],
		};
	},

	mounted() {

	},

	methods: {
		changeImg(thisImage) {
			console.log(thisImage);
			this.curentImg = thisImage;
		}
	},
};
</script>

<style>
.project-details-container {
	margin: 40px 320px 60px 320px;
}

.details-text {
	margin-left: 110px;
	margin-right: 110px;
	margin-bottom: 40px;
}

.project-details-container h3 {
	font-family: 'DM Serif Display';
	font-size: 30px;
}

.project-details-container p {
	font-family: 'Jost';
	font-size: 13px;
	color: #4D5053;
}

.project-details-container img {
	height: 400px;
	border-radius: 25px;
	margin-bottom: 30px;
}

.img-container {
	position: relative;
}

.zoom {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.zoom img {
	width: 100px;
	height: 100px;
}

.control-container {
	display: flex;
	gap: 10px;
	justify-content: center;
}

.control-container svg {
	width: 15px;
	height: 15px;
	cursor: pointer;
}

.control-container svg:hover path {
	stroke: #cca277;
}

@media (min-width: 1750px) {
	.project-details-container {
		margin: 40px 360px 90px 360px;
	}

	.details-text {
		margin-left: 190px;
		margin-right: 190px;
		margin-bottom: 60px;
	}

	.project-details-container h3 {
		font-family: 'DM Serif Display';
		font-size: 50px;
		margin-bottom: 0;
	}

	.project-details-container p {
		font-family: 'Jost';
		font-size: 22px;
		color: #4D5053;
	}

	.project-details-container img {
		height: 800px;
		border-radius: 25px;
		margin-bottom: 30px;
	}

	.zoom {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.zoom img {
		width: 132px;
		height: 132px;
	}

	.control-container {
		gap: 10px;
	}

	.control-container svg {
		width: 25px;
		height: 25px;
	}
}
</style>