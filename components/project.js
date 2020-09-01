var templateProject = document.createElement("template");

templateProject.innerHTML = `

<style>
	
	#component{
		width:100%;
		height:100%;
		background-color: #082a49;
		
	}

	#logo{
		height: 80%;
		display:grid;
		place-items: center;	
	}

	#logo>img{
		height:100%;
	}

	@media(max-width: 800px){
		


	}

</style>

<div id="component">

	<div id="logo">
		<img src="images/logo.svg" alt="" />

	</div>


	

</div>

`;

class Project extends HTMLElement {

	constructor() {
		super();

		this.attachShadow({

			mode: 'open'
		});

		this.shadowRoot.appendChild(templateProject.content.cloneNode(true));



	}

	connectedCallback() {

		const that = this;



	}




}

//Define custom html element
window.customElements.define("app-project", Project);
