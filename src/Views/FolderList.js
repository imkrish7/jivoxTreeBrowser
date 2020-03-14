import React, { Component } from 'react';


class FolderList extends Component{

	constructor(props){
		super(props);
		this.state = {
			expand: false
		}
	}

	render(){
		return (
			<ul>
				<li>{this.props.data.name}</li>
				{ this.props.data.subFolder && this.state.expand && this.props.data.subFolder.length > 0 && 
					this.props.data.subFolder.map((data, ind) => <FolderList key={ind} data={data} depth={ this.props.depth + 1}/>)
				}
			</ul>
		)
	}
}

export default FolderList;