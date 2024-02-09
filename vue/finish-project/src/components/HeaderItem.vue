<template>
	<div class="header">
		<nav class="logoAndMainMenu">
			<div class="logoContainer">
				<router-link to="/homepage"><img src="@/assets/Logo.png" alt="logo picture"></router-link>
			</div>
			<div class="mainMenu">
				<router-link to="/homepage">Home</router-link>
				<router-link to="/project">Project</router-link>
				<router-link to="/blog">Blog</router-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'HeaderItem',
};
</script>

<style>
.header {
	margin: 40px 320px 0 320px;
}

.logoAndMainMenu {
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
}

.logoContainer img {
	width: 140px;
}

.mainMenu {
	display: flex;
	gap: 20px;
	font-family: 'Jost';
	font-size: 18px;
	font-weight: 400;
	line-height: 125%;
	color: #292F36;
}

.mainMenu a {
	text-decoration: none;
	color: #292F36;
}

@media (min-width: 1750px) {
	.header {
		margin: 40px 360px 0 360px;
	}

	.logoAndMainMenu {
		margin-bottom: 40px;
	}

	.logoContainer img {
		width: 165px;
	}

	.mainMenu {
		gap: 20px;
		font-size: 20px;
	}
}
</style>