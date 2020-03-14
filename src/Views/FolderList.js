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
		return <ul style={{ marginLeft: this.props.depth * 20 }}>
				<li>
					<span onClick={this.toggleExpand}>
	{ this.props.data.subFolder ? <i className="fa fa-folder" /> : <i className="fa fa-file" /> }
						</span>
					{this.props.data.name}
				</li>
				{this.props.data.subFolder && this.state.expand && this.props.data.subFolder.length > 0 && this.props.data.subFolder.map(
						(data, ind) => <FolderList key={ind} data={data} depth={this.props.depth + 1} />
					)}
			</ul>;
	}
}

export default FolderList;