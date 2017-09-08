

function ControlInteger(name, properties){
	ControlBase.call(this, name, properties);
};
ControlInteger.prototype = Object.create(ControlBase.prototype);


////////////////////////////////////////////////////////////////////////////////

ControlInteger.prototype.init_control = function(){
	var html = "<div id='"+this.place_id()+"' class='field ControlInteger' ><label>"+this.properties.label+"</label><input placeholder='"+this.properties.label+"' type='text' name='"+this.name+"' id='"+this.control_id()+"' /></div>";
	this.jquery_place().replaceWith(html);
	this.set_value(this.properties.value);

	var self = this;
	this.jquery().change(function(){
		self.basewidget.fire_event( this.name, 'changed_event' );
	});

	if(!this.properties.visible) this.hide();

	if(!this.properties.enabled){
		this.jquery().attr('disabled', '');
	}else{
		this.jquery().removeAttr('disabled');
	};
	
	if(this.properties.error) this.jquery_place().addClass('error'); else this.jquery_place().removeClass('error'); 
};

////////////////////////////////////////////////////////////////////////////////


ControlInteger.prototype.get_value = function(){ 
	if(this.jquery().length==0) return this.properties.value;
	var value = this.jquery().val();
	if(value=='null' || value=='') return null;
	else return value;
};


////////////////////////////////////////////////////////////////////////////////
