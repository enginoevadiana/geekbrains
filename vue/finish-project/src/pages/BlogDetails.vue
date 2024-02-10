<template>
	<div>
		<div class="mainPageImgContainer">
			<img src="@/assets/details_banner.jpg" alt="article banner" class="mainPageImg">
		</div>

		<div class="article-details-container">
			<div class="left-part">
				<div class="articles">
					<div class="article" :data-tags="article.tag" v-for="article in filterItems" :key="article.id">
						<h3>{{ article.name }}</h3>
						<img v-bind:src="article.img" alt="article">
						<p>{{ article.text }}</p>
					</div>
				</div>
			</div>
			<div class="right-part">
				<h3>Tags</h3>
				<div class="tags-container">
					<button @click="showArticle(tag.name)" v-for="tag in tags" :key="tag.id">
						{{ tag.name }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BlogDetails',

	data() {
		return {
			selectedTag: '',
			tags: [
				{ id: 1, name: 'Kitchen' },
				{ id: 2, name: 'Bedroom' },
				{ id: 3, name: 'Building' },
				{ id: 4, name: 'Architecture' },
				{ id: 5, name: 'Kitchen Planning' }
			],
			articles: [
				{ id: 1, name: 'Kitchen 1', tag: 'Kitchen', img: require('@/assets/details_article1.jpg'), text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error accusantium, facere incidunt neque illum eos architecto quam magni perspiciatis laudantium amet sed necessitatibus qui ullam, tempore, debitis alias? Dignissimos, nostrum. Quas neque eos dolores amet quo accusantium velit corporis nesciunt doloribus, suscipit voluptate praesentium deserunt dolorem optio repellat nam. Voluptates voluptas non debitis aliquam provident recusandae at odio autem deleniti? Veniam odit veritatis perspiciatis repudiandae maxime pariatur sit earum harum, dolore, quisquam voluptatum voluptates, quas aspernatur non fugiat repellat reiciendis? Amet odit maxime accusamus ipsam quaerat quis nisi sequi magnam.' },
				{ id: 2, name: 'Kitchen 2', tag: 'Kitchen', img: require('@/assets/details_article2.jpg'), text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error accusantium, facere incidunt neque illum eos architecto quam magni perspiciatis laudantium amet sed necessitatibus qui ullam, tempore, debitis alias? Dignissimos, nostrum. Quas neque eos dolores amet quo accusantium velit corporis nesciunt doloribus, suscipit voluptate praesentium deserunt dolorem optio repellat nam. Voluptates voluptas non debitis aliquam provident recusandae at odio autem deleniti? Veniam odit veritatis perspiciatis repudiandae maxime pariatur sit earum harum, dolore, quisquam voluptatum voluptates, quas aspernatur non fugiat repellat reiciendis? Amet odit maxime accusamus ipsam quaerat quis nisi sequi magnam.' },
				{ id: 3, name: 'Bedroom', tag: 'Bedroom', img: require('@/assets/details_article5.jpg'), text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error accusantium, facere incidunt neque illum eos architecto quam magni perspiciatis laudantium amet sed necessitatibus qui ullam, tempore, debitis alias? Dignissimos, nostrum. Quas neque eos dolores amet quo accusantium velit corporis nesciunt doloribus, suscipit voluptate praesentium deserunt dolorem optio repellat nam. Voluptates voluptas non debitis aliquam provident recusandae at odio autem deleniti? Veniam odit veritatis perspiciatis repudiandae maxime pariatur sit earum harum, dolore, quisquam voluptatum voluptates, quas aspernatur non fugiat repellat reiciendis? Amet odit maxime accusamus ipsam quaerat quis nisi sequi magnam.' },
				{ id: 4, name: 'Building', tag: 'Building', img: require('@/assets/details_article4.jpg'), text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error accusantium, facere incidunt neque illum eos architecto quam magni perspiciatis laudantium amet sed necessitatibus qui ullam, tempore, debitis alias? Dignissimos, nostrum. Quas neque eos dolores amet quo accusantium velit corporis nesciunt doloribus, suscipit voluptate praesentium deserunt dolorem optio repellat nam. Voluptates voluptas non debitis aliquam provident recusandae at odio autem deleniti? Veniam odit veritatis perspiciatis repudiandae maxime pariatur sit earum harum, dolore, quisquam voluptatum voluptates, quas aspernatur non fugiat repellat reiciendis? Amet odit maxime accusamus ipsam quaerat quis nisi sequi magnam.' },
				{ id: 5, name: 'Architecture', tag: 'Architecture', img: require('@/assets/details_article6.jpg'), text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error accusantium, facere incidunt neque illum eos architecto quam magni perspiciatis laudantium amet sed necessitatibus qui ullam, tempore, debitis alias? Dignissimos, nostrum. Quas neque eos dolores amet quo accusantium velit corporis nesciunt doloribus, suscipit voluptate praesentium deserunt dolorem optio repellat nam. Voluptates voluptas non debitis aliquam provident recusandae at odio autem deleniti? Veniam odit veritatis perspiciatis repudiandae maxime pariatur sit earum harum, dolore, quisquam voluptatum voluptates, quas aspernatur non fugiat repellat reiciendis? Amet odit maxime accusamus ipsam quaerat quis nisi sequi magnam.' },
				{ id: 6, name: 'Kitchen Planning', tag: 'Kitchen Planning', img: require('@/assets/details_article3.jpg'), text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error accusantium, facere incidunt neque illum eos architecto quam magni perspiciatis laudantium amet sed necessitatibus qui ullam, tempore, debitis alias? Dignissimos, nostrum. Quas neque eos dolores amet quo accusantium velit corporis nesciunt doloribus, suscipit voluptate praesentium deserunt dolorem optio repellat nam. Voluptates voluptas non debitis aliquam provident recusandae at odio autem deleniti? Veniam odit veritatis perspiciatis repudiandae maxime pariatur sit earum harum, dolore, quisquam voluptatum voluptates, quas aspernatur non fugiat repellat reiciendis? Amet odit maxime accusamus ipsam quaerat quis nisi sequi magnam.' }
			],
		};
	},
	methods: {
		showArticle(articleName) {
			this.selectedTag = articleName;
		},
	},
	computed: {
		filterItems() {
			if (this.selectedTag === '') {
				return this.articles;
			}
			else {
				return this.articles.filter(article => article.tag === this.selectedTag);
			}
		},
	},
};
</script>

<style>
.article-details-container {
	margin: 40px 320px 0 320px;
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 50px;
	margin-bottom: 60px;
}

.tags-container {
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
}

.article h3 {
	font-family: 'DM Serif Display';
	font-size: 25px;
}

.article img {
	width: 100%;
	height: 300px;
	border-radius: 25px;
}

.article p {
	font-family: 'Jost';
	font-size: 14px;
	color: #4D5053;
}

.right-part h3 {
	font-size: 16px;
}

.tags-container button {
	border-radius: 5px;
	padding: 4px 15px;
	border: none;
	background-color: #F4F0EC;
	font-family: 'Jost';
	font-size: 12px;
	color: #292F36;
}

.tags-container button:hover {
	background-color: #292F36;
	font-family: 'Jost';
	font-size: 12px;
	color: #FFFFFF;
	cursor: pointer;
}

@media (min-width: 1750px) {
	.article img {
		height: 600px;
	}

	.article h3 {
		font-family: 'DM Serif Display';
		font-size: 50px;
	}

	.article p {
		font-size: 22px;
	}

	.right-part h3 {
		font-size: 25px;
	}

	.tags-container button {
		border-radius: 10px;
		padding: 9px 30px 9px 30px;
		font-size: 18px;
	}
}
</style>