<template>
	<div id="app">
		<header>
			<HeaderComponent></HeaderComponent>
		</header>
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
		<main>
			<div class="followProjects">
				<p class="followProjectsTitle">Follow Our Projects</p>
				<p class="followProjectsText">It is a long established fact that a reader will be distracted by the of readable
					<br>content of page lookings at its layouts points.
				</p>
				<div class="followProjectCatalog">
					<div class="followProjectCatalogCard">
						<img src="@/img/product1.png" alt="product" class="followProjectImg">
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
						<img src="@/img/product2.png" alt="product" class="followProjectImg">
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
						<img src="@/img/product3.png" alt="product" class="followProjectImg">
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
						<img src="@/img/product4.png" alt="product" class="followProjectImg">
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
				<!-- <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
			</svg> -->
				<img class="statisticsSubtitleImg" src="@/img/Line.png" alt="">
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
				<img class="statisticsSubtitleImg" src="@/img/Line.png" alt="">
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
				<img class="statisticsSubtitleImg" src="@/img/Line.png" alt="">
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
		<div class="articlaeNews">
			<p class="articlaeNewsTitle">Articles &#38; News</p>
			<p class="articlaeNewsText">It is a long established fact that a reader will be distracted by the of readable
				<br>content of a page when lookings at its layouts the points of using.
			</p>
			<ArticleAndNews></ArticleAndNews>
		</div>
		<FooterComponent></FooterComponent>
	</div>
</template>

<script>
import './style.css'
import './main-background-image.css'
import './articles.css'
import './large.css'
import './article-large.css'
import HeaderComponent from './components/HeaderComponent.vue'
import ArticleAndNews from './components/ArticleAndNews.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
	name: 'App',
	components: {
		HeaderComponent,
		ArticleAndNews,
		FooterComponent
	}
}
</script>

<!-- <style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style> -->
