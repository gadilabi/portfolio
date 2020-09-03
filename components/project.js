var templateProject = document.createElement("template");

templateProject.innerHTML = `

	
	<style>
		#card {
			--color: #fe076e;
			--card-width: 400px;
			--img-width: var(--card-width);
			--img-height: calc(var(--img-width) / 2.1);
			font-family: arial;
			width: 400px;
			border: 2px solid black;
			border-radius: 6px;
			overflow: hidden;

		}

		#img-container {
			width: 100%;
			height: var(--img-height);
		}

		#img-container>img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		#header {
			text-align: center;
			color: var(--color);
			margin: 20px;
			font-size: 20px;
			font-weight: bolder;
		}


		#description {

			margin: 40px;
			color: rgb(50, 50, 50);
		}

		#links {
			cursor: pointer;
			background-color: var(--color);
			display: flex;
			justify-content: space-around;
		}

		#links>a {

			all: unset;
			color: white;


		}

		#technology {
			display: flex;
			width: 100%;
			background-color: var(--color);
			color: white;
			border-top: 1px solid rgb(50, 50, 50);
		}

		#backend {
			flex-basis: 50%;
			text-align: center;
			border-right: 1px solid rgb(50, 50, 50);

		}

		#frontend {
			flex-basis: 50%;
			text-align: center;
		}

		.tech-header {
			font-weight: bolder;

		}

	</style>

	<div id="card">

		<div id="img-container">
			<img src="images/neteacher.png" alt="">

		</div>

		<div id="header">

			<div id="project-num">

				

			</div>
			<div id="project-name" style="margin-top:10px; color:black;">Job Search Platform</div>

		</div>
		<div id="description">

			This is a job search platform. It allows users to register as job seekers or as recruiters. Job seekers can upload their cv, search for jobs and apply with one click. Recruiters can publish ads, track the number of applicants and download their cvs.
		</div>


		<div id="links">
			<a id="live-site" href="https://avodatova.co.il">
				Live Site
			</a>

		</div>
		<div id="technology">
			<div id="backend">

				<div class="tech-header">Backend</div>

				<div>PHP</div>

			</div>
			<div id="frontend">

				<div class="tech-header">Frontend</div>


				Vanilla js


			</div>

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

		this.imgUrl = this.getAttribute("img-url");

		this.img = this.shadowRoot.querySelector("img");

		this.projectNumber = this.getAttribute("project-number");

		this.projectNumberContainer = this.shadowRoot.querySelector("#project-num");

		this.projectName = this.getAttribute("project-name");

		this.projectNameContainer = this.shadowRoot.querySelector("#project-name");

		this.liveUrl = this.getAttribute('live-site');

		this.liveSite = this.shadowRoot.querySelector("#live-site");

		this.frontendTech = this.getAttribute('frontend');

		this.frontendContainer = this.shadowRoot.querySelector("#frontend");

		this.backendTech = this.getAttribute('backend');


		this.backendContainer = this.shadowRoot.querySelector("#backend");

		this.embedAttributes();

	}

	embedAttributes() {


	}

	connectedCallback() {




	}




}

//Define custom html element
window.customElements.define("app-project", Project);
