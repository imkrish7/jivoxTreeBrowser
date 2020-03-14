import React, { Component } from 'react';


class FolderList extends Component{

	constructor(props){
		super(props);
		this.state = {
			expand: false
		}
	}

	toggleExpand = ()=>{
		this.setState({
			expand: !this.state.expand
		})
	}

	render(){
		return <ul>
				<li>
					{this.props.data.subFolder && <span onClick={this.toggleExpand} dangerouslySetInnerHTML={{__html: this.state.expand ? '&#x27F0;' : '&#x27F1;' }}/>}
					{this.props.data.name}
				</li>
				{this.props.data.subFolder && this.state.expand && this.props.data.subFolder.length > 0 && this.props.data.subFolder.map(
						(data, ind) => <FolderList key={ind} data={data} depth={this.props.depth + 1} />
					)}
			</ul>;
	}
}

export default FolderList;