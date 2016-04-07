var Button = React.createClass({
	handleClick: function () {
	this.props.changePicture
	},
	render: function () {
		return <div> 
		<button className={this.props.direction} onClick={this.handleClick}> </button> 
		</div>
	}
});