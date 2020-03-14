import React, { Component } from 'react';

class Header extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div className="header">
				<span>Folder</span>
				<div className="actions">
					<i className="fa fa-file" title="add file" />
					<i className="fa fa-folder" title="add folder" />
				</div>
			</div>;
	}
}

export default Header;