<template>
	<div>
		<footer>
			<div class="footerLogoSection">
				<a href="index.html">
					<img src="@/assets/Logo.png" alt="logo picture">
				</a>
				<p class="footerLogoText">It is a long established fact that a reader
					<br> will be distracted lookings.
				</p>
				<div class="footerSocialmedia">
					<a href="#"><img src="@/assets/tw.png" alt="twitter"></a>
					<a href="#"><img src="@/assets/in.png" alt="linkedin"></a>
				</div>
			</div>
			<div class="footerPagesSection">
				<p class="footerPagesTitle">Pages</p>
				<router-link to="/homepage">
					<p class="footerPagesText">Home</p>
				</router-link>
				<router-link to="/project">
					<p class="footerPagesText">Project</p>
				</router-link>
				<router-link to="/blog">
					<p class="footerPagesText">Blog</p>
				</router-link>
			</div>
			<div class="footerContactSection">
				<p class="footerContactTitle">Contact</p>
				<p class="footerContactAndress">55 East Birchwood Ave. <br>Brooklyn, New York 11201</p>
				<p class="footerContactEmail">contact@interno.com</p>
				<a href="tel:+1234567890">
					<p class="footerContactNumber">(123) 456 - 7890</p>
				</a>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'FooterItem',
};
</script>

<style>
footer {
	margin: 0px 320px 0 320px;
	/* display: grid;
	grid-template-columns: 1fr 1fr 1fr; */
	display: flex;
	justify-content: space-between;
	align-items: start;
	margin-bottom: 100px;
	gap: 40px;
}

.footerLogoSection {
	width: 33%;
}

.footerLogoSection img {
	width: 120px;
	margin-top: 10px;
}

.footerLogoText {
	color: #4D5053;
	font-family: 'Jost';
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
}

.footerSocialmedia img {
	width: 18px;
	margin-right: 40px;
}

.footerPagesSection {
	width: 33%;
	display: flex;
	flex-direction: column;
	margin-top: 0;
	padding-top: 0;
	justify-content: start;
	line-height: 1;
}

.footerPagesTitle,
.footerContactTitle {
	color: #292F36;
	font-family: 'DM Serif Display';
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
}

.footerPagesText,
.footerContactAndress,
.footerContactEmail,
.footerContactNumber {
	color: #4D5053;
	font-family: 'Jost';
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
}

.footerPagesSection a {
	line-height: 20px;
	text-decoration: none;
}

.footerContactSection a {
	text-decoration: none;
}

@media (min-width: 1750px) {
	footer {
		margin: 0px 320px 0 320px;
		/* display: grid;
		grid-template-columns: 1fr 1fr 1fr; */
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 100px;
	}

	.footerLogoSection {
		width: 33%;
	}

	.footerLogoSection img {
		width: 177px;
	}

	.footerLogoText {
		color: #4D5053;
		font-family: 'Jost';
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
	}

	.footerSocialmedia img {
		width: 18px;
		margin-right: 40px;
	}

	.footerPagesSection {
		width: 33%;
		display: flex;
		flex-direction: column;
		margin-top: 0;
		padding-top: 0;
		justify-content: start;
		line-height: 1;
	}

	.footerPagesTitle,
	.footerContactTitle {
		color: #292F36;
		font-family: 'DM Serif Display';
		font-size: 25px;
		font-style: normal;
		font-weight: 400;
	}

	.footerPagesText,
	.footerContactAndress,
	.footerContactEmail,
	.footerContactNumber {
		color: #4D5053;
		font-family: 'Jost';
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
	}

	.footerPagesSection a {
		line-height: 20px;
		text-decoration: none;
	}

	.footerContactSection a {
		text-decoration: none;
	}
}
</style>