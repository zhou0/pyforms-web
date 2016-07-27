

function ControlWorkflow(name, properties){
	ControlBase.call(this, name, properties);
};
ControlWorkflow.prototype = Object.create(ControlBase.prototype);

////////////////////////////////////////////////////////////////////////////////

ControlWorkflow.prototype.init_control = function(){
	var html = "<div id='"+this.place_id()+"' class='field ControlWorkflow ui segment' ><label>"+this.properties.label+"</label><div id='"+this.control_id()+"' ></div></div>";
	this.jquery_place().replaceWith(html);

	var self = this;
	this.jquery().change(function(){
		self.basewidget.fire_event( self.name, 'changed' );
	});

	if(!this.properties.visible) this.hide();

	$( '#'+this.control_id() ).flowchart({ data: this.properties.value, multipleLinksOnOutput:true });

	if(this.properties.operator_selected_evt)
		$( '#'+this.control_id() ).flowchart('selectOperator', function(operatorId){
			self.basewidget.fire_event( self.name, 'operator_selected_evt' );
		});
	
};

////////////////////////////////////////////////////////////////////////////////

ControlWorkflow.prototype.set_value = function(value){
	$( '#'+this.control_id() ).flowchart('setData', value);
};

////////////////////////////////////////////////////////////////////////////////

ControlWorkflow.prototype.get_value = function(){ 
	return $( '#'+this.control_id() ).flowchart('getData');
};

////////////////////////////////////////////////////////////////////////////////

ControlWorkflow.prototype.serialize = function(){
	this.properties.value = this.get_value();
	//this.properties.selected_operator = $( '#'+this.control_id() ).flowchart('getSelectedOperatorId');
	return this.properties; 
};
