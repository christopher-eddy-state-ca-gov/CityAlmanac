import React from 'react';
import './carousel.css';
import DemoCarousel from './Carousel.js' 



//https://randomuser.me/api/
//props person[]
//person  
//	FirstName
//	LastName
//  DOB
//  Image
export default class People extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  };
  
  
//-----    Begin getPerson()    --------------------  
getPerson = () => {
    const main = this;
    main.setState({
        infoStatus: 'loading'
    });
     fetch(`https://randomuser.me/api/`)
    .then( function(response) {
      return response;
    })
    .then( function(response) {
      return response.json();
    })
    .then( function(data) {
  		let person = 
		{
			FirstName: data.results[0].name.first,
			LastName:  data.results[0].name.last,
			DOB:       data.results[0].dob,
			IMG:       data.results[0].picture.thumbnail,
			MEDIUM_IMG:       data.results[0].picture.medium,
			LARGE_IMG:       data.results[0].picture.large
		};
		main.setState({
			people: main.state.people.concat(person)
		});
		
	})
    .catch( function(error) {
		main.setState({
			infoStatus: 'error'
		});
    })
};
//-----    End getPerson()    --------------------   


//-----    Begin componentWillMount()    --------------------   
componentWillMount() {
   for(let i = 0; i < 3; i++){
		this.getPerson();
	}
}
//-----    End componentWillMount()    --------------------   
  
  
  
//-----    Begin render()    --------------------   
render(){
   return(
		<div>
			<div className="row">
				<div className="col-sm-12 SectionTitle"> People </div>
				<div className="col-sm-2" id="child">Celebrities</div>
				<div className="col-sm-8">
					<DemoCarousel people={this.state.people}/>
				</div>
			</div>
		</div>
		);
}
//-----    End render()    -------------------- 



  
}