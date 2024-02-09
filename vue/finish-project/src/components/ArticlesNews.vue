<template>
	<div>
		<div class="articlaeNews">
			<p class="articlaeNewsTitle">Articles &#38; News</p>
			<p class="articlaeNewsText">It is a long established fact that a reader will be distracted by the of readable
				<br>content of a page when lookings at its layouts the points of using.
			</p>
			<div class="articlaeNewsCatalog">
				<div class="articlaeNewsCatalogCard">
					<img src="@/assets/news1.png" alt="product" class="articlaeNewsImg">
					<p class="articlaeNewsTitle2">Let’s Get Solution For Building Construction Work</p>
					<div class="articlaeNewsSubtitle">
						<p class="articlaeNewsSubtitleText">26 December,2022</p>
						<a href="#"><svg class="articlaeNewsSvg" width="35" height="35" viewBox="0 0 70 70" fill="#F4F0EC"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="35" cy="35" r="35" />
								<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg></a>
					</div>
				</div>
				<div class="articlaeNewsCatalogCard">
					<img src="@/assets/news2.png" alt="product" class="articlaeNewsImg">
					<p class="articlaeNewsTitle2">Low Cost Latest Invented Interior Designing
						Ideas.</p>
					<div class="articlaeNewsSubtitle">
						<p class="articlaeNewsSubtitleText">22 December,2022</p>
						<a href="#"><svg class="articlaeNewsSvg" width="35" height="35" viewBox="0 0 70 70" fill="#F4F0EC"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="35" cy="35" r="35" />
								<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg></a>
					</div>
				</div>
				<div class="articlaeNewsCatalogCard">
					<img src="@/assets/news3.png" alt="product" class="articlaeNewsImg">
					<p class="articlaeNewsTitle2">Best For Any Office &#38; Business Interior
						Solution</p>
					<div class="articlaeNewsSubtitle">
						<p class="articlaeNewsSubtitleText">25 December,2022</p>
						<a href="#"><svg class="articlaeNewsSvg" width="35" height="35" viewBox="0 0 70 70" fill="#F4F0EC"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="35" cy="35" r="35" />
								<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ArticlesNews',
};
</script>

<style>
.articlaeNews {
	margin: 0px 320px 50px 320px;
}

.articlaeNewsTitle {
	color: #292F36;
	text-align: center;
	font-family: 'DM Serif Display';
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	margin-bottom: 5px;
}

.articlaeNewsText {
	color: #4D5053;
	text-align: center;
	font-family: 'Jost';
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	margin-top: 0;
	margin-bottom: 30px;
}

.articlaeNewsCatalog {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 18px;
}

.articlaeNewsCatalogCard {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-top: 0px;
	padding: 16px;
	border-radius: 40px;
	border: 1px solid #E7E7E7;
	box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.articlaeNewsCatalogCard:hover {
	background: #F4F0EC;
}

.articlaeNewsCatalogCard:hover .articlaeNewsSvg {
	fill: white;
}

.articlaeNewsImg {
	width: 100%;
}

.articlaeNewsTitle2 {
	color: #292F36;
	font-family: 'DM Serif Display';
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	text-align: left;
}

.articlaeNewsSubtitle {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.articlaeNewsSubtitleText {
	color: #4D5053;
	font-family: 'Jost';
	font-size: 10px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	/* 24px */
	letter-spacing: 0.16px;
	text-transform: capitalize;
}

@media (min-width: 1750px) {
	.articlaeNews {
		margin: 0px 320px 80px 320px;
	}

	.articlaeNewsTitle {
		color: #292F36;
		text-align: center;
		font-family: 'DM Serif Display';
		font-size: 50px;
		font-style: normal;
		font-weight: 400;
		margin-bottom: 5px;
	}

	.articlaeNewsText {
		color: #4D5053;
		text-align: center;
		font-family: 'Jost';
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		margin-top: 0;
		margin-bottom: 50px;
	}

	.articlaeNewsCatalog {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 18px;
	}

	.articlaeNewsCatalogCard {
		margin-bottom: 30px;
		margin-top: 0px;
		padding: 16px;
		border-radius: 40px;
		border: 1px solid #E7E7E7;
		box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
	}

	.articlaeNewsCatalogCard:hover {
		background: #F4F0EC;
	}

	.articlaeNewsCatalogCard:hover .articlaeNewsSvg {
		fill: white;
	}

	.articlaeNewsImg {
		width: 100%;
	}

	.articlaeNewsTitle2 {
		color: #292F36;
		font-family: 'DM Serif Display';
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		text-align: left;
	}

	.articlaeNewsSubtitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.articlaeNewsSubtitleText {
		color: #4D5053;
		font-family: 'Jost';
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		/* 24px */
		letter-spacing: 0.16px;
		text-transform: capitalize;
	}

	.articlaeNewsSvg {
		width: 52px;
		height: 52px;
	}
}
</style>