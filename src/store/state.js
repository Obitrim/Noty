export default {
	navOpen: false,

	categorizedNotes: {
		general: [],
		business: [{
				title: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laudantium minima iusto, consequuntur expedita quaerat illo velit totam',
				category: 'business',
				content: `<h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, minima dolor non animi culpa tempora</h1>
					A debitis quod accusamus rerum dolorem pariatur vel illo non fuga necessitatibus fugit velit delectus expedita 
					<strong>Bold content</strong>
					fugiat beatae, aperiam molestias ea incidunt tenetur aliquam corporis nemo minus vero id. Non consequatur iure, optio aut eos 
					minima eaque tempore, quas laudantium suscipit repellendus, similique animi beatae`,
				color: 'green'
			},{
				title: 'Lorem ipsum, dolor sit, amet consecteturma iusto, consequuntur expedita quaerat illo velit totam',
				category: 'business',
				content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, minima dolor non animi culpa tempora. 
					A debitis quod accusamus rerum dolorem pariatur vel illo non fuga necessitatibus fugit velit delectus expedita 
					fugiat beatae, aperiam molestias ea incidunt tenetur aliquam corporis nemo minus vero id. Non consequatur iure, optio aut eos 
					minima eaque tempore, quas laudantium suscipit repellendus, similique animi beatae`,
				color: 'orange'
			},{
				title: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laudantium minima iusto, consequuntur expedita quaerat illo velit totam',
				category: 'business',
				content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, minima dolor non animi culpa tempora. 
					A debitis quod accusamus rerum dolorem pariatur vel illo non fuga necessitatibus fugit velit delectus expedita 
					fugiat beatae, aperiam molestias ea incidunt tenetur aliquam corporis nemo minus vero id. Non consequatur iure, optio aut eos 
					minima eaque tempore, quas laudantium suscipit repellendus, similique animi beatae`,
				color: 'violet'	
		}],
		work: [{
			title: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laudantium minima iusto, consequuntur expedita quaerat illo velit totam',
			category: 'work',
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, minima dolor non animi culpa tempora. 
				A debitis quod accusamus rerum dolorem pariatur vel illo non fuga necessitatibus fugit velit delectus expedita 
				fugiat beatae, aperiam molestias ea incidunt tenetur aliquam corporis nemo minus vero id. Non consequatur iure, optio aut eos 
				minima eaque tempore, quas laudantium suscipit repellendus, similique animi beatae`,
			color: 'red'
		},{
			title: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laudantium minima iusto, consequuntur expedita quaerat illo velit totam',
			category: 'work',
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, minima dolor non animi culpa tempora. 
				A debitis quod accusamus rerum dolorem pariatur vel illo non fuga necessitatibus fugit velit delectus expedita 
				fugiat beatae, aperiam molestias ea incidunt tenetur aliquam corporis nemo minus vero id. Non consequatur iure, optio aut eos 
				minima eaque tempore, quas laudantium suscipit repellendus, similique animi beatae`,
			color: 'blue'
		}],
		school: [{
			title: 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laudantium minima iusto, consequuntur expedita quaerat illo velit totam',
			category: 'school',
			content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, minima dolor non animi culpa tempora. 
				A debitis quod accusamus rerum dolorem pariatur vel illo non fuga necessitatibus fugit velit delectus expedita 
				fugiat beatae, aperiam molestias ea incidunt tenetur aliquam corporis nemo minus vero id. Non consequatur iure, optio aut eos 
				minima eaque tempore, quas laudantium suscipit repellendus, similique animi beatae`,
			color: 'red'
		}]
	},
	newNote: {
		title: "",
		content: "",
		category: "",
		editing: false
	},
	recents: [],
	previewedNote: {},
	focusedCategory: 'general',
	noteCategories: ['general', 'business', 'work', 'school'],
}