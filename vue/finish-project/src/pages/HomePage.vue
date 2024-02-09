<template>
	<div>
		<div class="header">
			<div class="getStarted">
				<p class="getStartedTitle">Let Your Home
					<br>Be Unique
				</p>
				<p class="getStartedText">There are many variations of the passages of
					<br>lorem Ipsum fromavailable, majority.
				</p>
				<button class="getStartedButton">Get Started<svg width="17" height="16" viewBox="0 0 19 17" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
							stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
		</div>
		<main>

			<div class="followProjects">
				<p class="followProjectsTitle">Follow Our Projects</p>
				<p class="followProjectsText">It is a long established fact that a reader will be distracted by the of readable
					<br>content of page lookings at its layouts points.
				</p>
				<div class="followProjectCatalog">
					<div class="followProjectCatalogCard">
						<img src="@/assets/product1.png" alt="product" class="followProjectImg">
						<div class="followProjectSubtitle">
							<div class="subtitleContainer">
								<p class="subtitleContainerTitle">Modern Kitchan</p>
								<p class="subtitleContainerText">Decor / Artchitecture</p>
							</div>
							<a href="#"><svg class="subtitleContainerSvg" viewBox="0 0 70 70" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<circle cx="35" cy="35" r="35" fill="#F4F0EC" />
									<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</div>
					</div>
					<div class="followProjectCatalogCard">
						<img src="@/assets/product2.png" alt="product" class="followProjectImg">
						<div class="followProjectSubtitle">
							<div class="subtitleContainer">
								<p class="subtitleContainerTitle">Modern Kitchan</p>
								<p class="subtitleContainerText">Decor / Artchitecture</p>
							</div>
							<a href="#"><svg class="subtitleContainerSvg" viewBox="0 0 70 70" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<circle cx="35" cy="35" r="35" fill="#F4F0EC" />
									<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</div>
					</div>
					<div class="followProjectCatalogCard">
						<img src="@/assets/product3.png" alt="product" class="followProjectImg">
						<div class="followProjectSubtitle">
							<div class="subtitleContainer">
								<p class="subtitleContainerTitle">Modern Kitchan</p>
								<p class="subtitleContainerText">Decor / Artchitecture</p>
							</div>
							<a href="#"><svg class="subtitleContainerSvg" viewBox="0 0 70 70" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<circle cx="35" cy="35" r="35" fill="#F4F0EC" />
									<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</div>
					</div>
					<div class="followProjectCatalogCard">
						<img src="@/assets/product4.png" alt="product" class="followProjectImg">
						<div class="followProjectSubtitle">
							<div class="subtitleContainer">
								<p class="subtitleContainerTitle">Modern Kitchan</p>
								<p class="subtitleContainerText">Decor / Artchitecture</p>
							</div>
							<a href="#"><svg class="subtitleContainerSvg" viewBox="0 0 70 70" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<circle cx="35" cy="35" r="35" fill="#F4F0EC" />
									<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg></a>
						</div>
					</div>
				</div>
			</div>
		</main>
		<div class="statisticsContainer">
			<div class="statisticsCard">
				<div class="statisticsCardSubtitle">
					<p class="statisticsSubtitleTitle">
						12
					</p>
					<p class="statisticsSubtitleText">
						Years Of Experiance
					</p>
				</div>
				<img class="statisticsSubtitleImg" src="@/assets/Line.png" alt="">
			</div>
			<div class="statisticsCard">
				<div class="statisticsCardSubtitle">
					<p class="statisticsSubtitleTitle">
						85
					</p>
					<p class="statisticsSubtitleText">
						Success Project
					</p>
				</div>
				<img class="statisticsSubtitleImg" src="@/assets/Line.png" alt="">
			</div>
			<div class="statisticsCard">
				<div class="statisticsCardSubtitle">
					<p class="statisticsSubtitleTitle">
						15
					</p>
					<p class="statisticsSubtitleText">
						Active Project
					</p>
				</div>
				<img class="statisticsSubtitleImg" src="@/assets/Line.png" alt="">
			</div>
			<div class="statisticsCard">
				<div class="statisticsCardSubtitle">
					<p class="statisticsSubtitleTitle">
						95
					</p>
					<p class="statisticsSubtitleText">
						Happy CUstomers
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'HomePage',
	components: {
	},
};
</script>

<style>
.header {
	margin: 40px 320px 0 320px;
}

.getStarted {
	width: 100%;
	height: 400px;
	border-radius: 25px;
	background-image: url('@/assets/header_photo.png');
	background-size: 100%;
	background-repeat: no-repeat;
	margin: 0;
	margin-bottom: 50px;
}

.getStartedTitle {
	padding: 120px 0 0 30px;
	color: #292F36;
	font-family: 'DM Serif Display';
	font-size: 35px;
	font-style: normal;
	font-weight: 400;
	line-height: 125%;
	margin-bottom: 0;
}

.getStartedText {
	padding: 0 0 0 30px;
	color: #4D5053;
	font-family: 'Jost';
	font-size: 13px;
	font-weight: 400;
}

.getStartedButton {
	padding: 12px 22px 12px 22px;
	margin-left: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	border-radius: 10px;
	background: #292F36;
	box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
	color: white;
	text-align: center;
	font-size: 12px;
	font-family: 'Jost';
	font-weight: 600;
}

main {
	margin: 0px 320px 0 320px;
}

.followProjectCatalog {
	margin-bottom: 50px;
}


.followProjectsTitle {
	color: #292F36;
	text-align: center;
	font-family: 'DM Serif Display';
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: 125%;
	letter-spacing: 1px;
	margin-bottom: 5px;
}

.followProjectsText {
	color: #4D5053;
	text-align: center;
	font-family: 'Jost';
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	/* 33px */
	letter-spacing: 0.22px;
	margin-top: 0;
	margin-bottom: 50px;
}

.followProjectCatalog {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 50px;
}

.followProjectCatalogCard {
	margin-bottom: 0px;
	margin-top: 0px;
}

.followProjectImg {
	width: 100%;
}

.followProjectSubtitle {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.subtitleContainerTitle {
	color: #292F36;
	font-family: 'DM Serif Display';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 125%;
	/* 31.25px */
	letter-spacing: 0.5px;
	margin-bottom: 0;
}

.subtitleContainerText {
	color: #4D5053;
	font-family: 'Jost';
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	letter-spacing: 0.22px;
	margin-top: 0;
}

.subtitleContainerSvg {
	width: 47px;
	height: 47px;
}

.statisticsContainer {
	padding: 120px 320px;
	box-sizing: border-box;
	background-color: #F4F0EC;
	height: 300px;
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 65px;
}

.statisticsCard {
	display: flex;
	align-items: center;

}

.statisticsCardSubtitle {
	margin-right: 54px;
	text-align: center;
}

.statisticsSubtitleTitle {
	color: #CDA274;
	font-family: 'DM Serif Display';
	font-size: 54px;
	font-style: normal;
	font-weight: 400;
	margin-bottom: 0;
	margin-top: 0;
}

.statisticsSubtitleText {
	color: #4D5053;
	font-family: 'Jost';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	margin-top: 0;
}

@media (min-width: 1750px) {

	.header {
		margin: 40px 360px 0 360px;
	}

	.getStarted {
		width: 100%;
		height: 750px;
		margin-bottom: 80px;
	}

	.getStartedTitle {
		padding: 240px 0 0 60px;
		font-size: 60px;
		margin-bottom: 0;
	}

	.getStartedText {
		padding: 0 0 0 60px;
		font-size: 20px;
	}

	.getStartedButton {
		padding: 18px 40px 18px 40px;
		margin-left: 60px;
		gap: 5px;
		border-radius: 18px;
		font-size: 18px;
	}

	main {
		margin: 0px 320px 0 320px;
	}

	.followProjectCatalog {
		margin-bottom: 96px;
	}


	.followProjectsTitle {
		color: #292F36;
		text-align: center;
		font-family: 'DM Serif Display';
		font-size: 50px;
		font-style: normal;
		font-weight: 400;
		line-height: 125%;
		/* 62.5px */
		letter-spacing: 1px;
		margin-bottom: 5px;
	}

	.followProjectsText {
		color: #4D5053;
		text-align: center;
		font-family: 'Jost';
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		/* 33px */
		letter-spacing: 0.22px;
		margin-top: 0;
		margin-bottom: 70px;
	}

	.followProjectCatalog {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
	}

	.followProjectCatalogCard {
		margin-bottom: 0px;
		margin-top: 0px;
	}

	.followProjectImg {
		width: 100%;
	}

	.followProjectSubtitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.subtitleContainerTitle {
		color: #292F36;
		font-family: 'DM Serif Display';
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 0.5px;
		margin-bottom: 0;
	}

	.subtitleContainerText {
		color: #4D5053;
		font-family: 'Jost';
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: 0.22px;
		margin-top: 0;
	}

	.subtitleContainerSvg {
		width: 70px;
		height: 70px;
	}

	.statisticsContainer {
		padding: 120px 320px;
		box-sizing: border-box;
		background-color: #F4F0EC;
		height: 457px;
		margin-bottom: 96px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 65px;
	}

	.statisticsCard {
		display: flex;
		align-items: center;

	}

	.statisticsCardSubtitle {
		margin-right: 54px;
		text-align: center;
	}

	.statisticsSubtitleTitle {
		color: #CDA274;
		font-family: 'DM Serif Display';
		font-size: 85px;
		font-style: normal;
		font-weight: 400;
		margin-bottom: 0;
		margin-top: 0;
	}

	.statisticsSubtitleText {
		color: #4D5053;
		font-family: 'Jost';
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		margin-top: 0;
	}
}
</style>