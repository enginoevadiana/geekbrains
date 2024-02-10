<template>
	<div>
		<div class="mainPageImgContainer">
			<img src="@/assets/articlesBanner.jpg" alt="article banner" class="mainPageImg">
		</div>
		<main>
			<div class="latestPost">
				<p class="articlaeNewsTitle">Latest Post</p>
				<div class="latestPostCard">
					<img src="@/assets/latestPost.png" alt="latest post" class="latestPostCardImg">
					<div class="latestPostCardText">
						<p class="latestPostCardTextTitle">Low Cost Latest Invented Interior<br>Designing Ideas</p>
						<p class="latestPostCardTextText">Lorem ipsum dolor sit amet, adipiscing Aliquam<br> eu sem vitae turpis
							dignissim maximus.posuere<br> in.Contrary to popular belief.
							<br><br>
							Lorem Ipsum is not simply random text. It has<br> roots in a piece of classica.
						</p>
						<div class="latestPostCardTextSubtitleContainer">
							<p class="latestPostCardTextSubtitle">26 December,2022</p>
							<router-link to="/blogdetails">
								<svg class="latestPostCardSvg" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
									<path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
										stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</main>

		<div class="articlaeNews">
			<p class="articlaeNewsTitle">Articles &#38; News</p>

			<ArticlesNews />
			<div class="articlaeNewsCatalog">
				<div v-for="article in articles" :key="article.id" class="articlaeNewsCatalogCard">
					<img v-bind:src="article.img" alt="product" class="articlaeNewsImg">
					<p class="articlaeNewsTitle2">{{ article.text }}</p>
					<div class="articlaeNewsSubtitle">
						<p class="articlaeNewsSubtitleText">{{ article.date }}</p>
						<a href="#"><svg class="articlaeNewsSvg" width="35" height="35" viewBox="0 0 70 70" fill="#F4F0EC"
								xmlns="http://www.w3.org/2000/svg">
								<circle cx="35" cy="35" r="35" />
								<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg></a>
					</div>
				</div>
			</div>

			<div class="pagination">
				<a href="#"><img src="@/assets/pagination/1.png" alt="pagination" class="paginationImg"></a>
				<a href="#"><img src="@/assets/pagination/2.png" alt="pagination" class="paginationImg"></a>
				<a href="#"><img src="@/assets/pagination/3.png" alt="pagination" class="paginationImg"></a>
				<a href="#"><img src="@/assets/pagination/row.png" alt="pagination" class="paginationImg"></a>
			</div>
		</div>


	</div>
</template>

<script>
import ArticlesNews from '@/components/ArticlesNews.vue';

export default {
	name: 'BlogPage',
	components: {
		ArticlesNews,
	},

	data() {
		return {
			articles: [
				{
					id: 1, text: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', img: require('@/assets/product4.jpg'),
				},
				{
					id: 2, text: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', img: require('@/assets/product5.jpg'),
				},
				{
					id: 3, text: 'Best For Any Office &#38; Business Interior Solution', date: '25 December,2022', img: require('@/assets/product6.jpg'),
				},
			]
		};
	},
};
</script>

<style>
.mainPageImgContainer {
	margin-bottom: 80px;
}

.mainPageImg {
	width: 100%;
}

.logoAndMainMenu {
	margin-bottom: 20px;
}

.articlaeNews {
	margin: 0px 320px 50px 320px;
}

.articlaeNewsTitle {
	text-align: left;
	font-size: 30px;
	color: #292F36;
	font-family: 'DM Serif Display';
	font-style: normal;
	font-weight: 400;
	margin-bottom: 5px;
}

.latestPost {
	margin-bottom: 70px;
}

.latestPostCard {
	display: flex;
	align-items: center;
	gap: 50px;
	padding: 15px;
}

.latestPostCardImg {
	width: 300px;
	border-radius: 40px;
}

.latestPostCardTextTitle {
	color: #292F36;
	font-family: DM Serif Display;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 125%;
	/* 31.25px */
	letter-spacing: 0.5px;
}

.latestPostCardTextText {
	color: #4D5053;
	font-family: Jost;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	/* 33px */
	letter-spacing: 0.22px;
}

.latestPostCardTextSubtitleContainer {
	display: flex;
	justify-content: space-between;
}

.latestPostCardTextSubtitle {
	color: #4D5053;
	font-family: Jost;
	font-size: 10px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	/* 24px */
	letter-spacing: 0.16px;
	text-transform: capitalize;
}

.latestPostCardSvg {
	width: 32px;
	height: 32px;
}

.pagination {
	display: flex;
	justify-content: center;
	gap: 8px;
}

.paginationImg {
	width: 40px;
}

@media (min-width: 1570px) {

	.mainPageImgContainer {
		margin-bottom: 120px;
	}


	.mainPageImg {
		width: 100%;
	}

	.logoAndMainMenu {
		margin-bottom: 20px;
	}

	.articlaeNewsTitle {
		text-align: left;
		font-size: 45px;
	}

	.latestPost {
		margin-bottom: 120px;
	}

	.latestPostCard {
		display: flex;
		align-items: center;
		gap: 50px;
		padding: 15px;
	}

	.latestPostCardImg {
		width: 600px;
		border-radius: 40px;
	}

	.latestPostCardTextTitle {
		color: #292F36;
		font-family: DM Serif Display;
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
		line-height: 125%;
		/* 31.25px */
		letter-spacing: 0.5px;
	}

	.latestPostCardTextText {
		color: #4D5053;
		font-family: Jost;
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		/* 33px */
		letter-spacing: 0.22px;
	}

	.latestPostCardTextSubtitleContainer {
		display: flex;
		justify-content: space-between;
	}

	.latestPostCardTextSubtitle {
		color: #4D5053;
		font-family: Jost;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		/* 24px */
		letter-spacing: 0.16px;
		text-transform: capitalize;
	}

	.latestPostCardSvg {
		width: 52px;
		height: 52px;
	}

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

	.articlaeNewsCatalog {
		margin-bottom: 52px;
	}

	.pagination {
		margin-bottom: 200px;
	}

	.paginationImg {
		width: 52px;
	}
}
</style>