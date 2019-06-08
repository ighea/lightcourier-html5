/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/
KEY_UP = 38;
KEY_DOWN = 40;
KEY_LEFT = 37;
KEY_RIGHT = 39;
KEY_ENTER = 13;
KEY_Y = 89;
KEY_N = 78;
KEY_SPACE = 32;
KEY_ESC = 27;
KEY_F = 70;
KEY_G = 71;
KEY_H = 72;

//TODO: Fix mouse pos

function EventsHandler(element) // Constructor
{
	this.self = this;
	
	// Assign eventsHandlers to element
	var me = this;
	element.localUserEvents = me; // Maybe change this?
/*	element.onkeydown = this.onkeydown;
	element.onkeyup = this.onkeyup;
	element.onmousedown = this.onmousedown;
	element.onmouseup = this.onmouseup;
*/	element.onkeydown = me.onkeydown;
	element.onkeyup = me.onkeyup;
	element.onmousedown = me.onmousedown;
	element.onmouseup = me.onmouseup;
	
	this.MAX_KEYS=250;
	this.keys = new Array(this.MAX_KEYS);
	for (var i = 0; i < this.MAX_KEYS; i++)
	{
		this.keys[i] = false; // Set all keys "up"
	}
	//keys = new Array();
	this.oldkeys = new Array(this.MAX_KEYS);
	for (var i = 0; i < this.MAX_KEYS; i++)
	{
		this.oldkeys[i] = false; // Set all oldkeys "up"
	}
	//oldkeys = new Array();
	
	this.buttons = new Array(10);
	for (var i = 0; i < 10; i++)
	{
		this.buttons[i] = false;
	}
	buttons = new Array();
	
	mouseX = 0;
	mouseY = 0;
}
EventsHandler.prototype = {
	update: function()
	{
		for (var i=0; i < this.MAX_KEYS; i++)
		{
			this.oldkeys[i] = this.keys[i];
		}
	},
	onmousedown: function(event)
	{
		self.buttons[event.button] = true;
		self.mouseX = event.offsetX;
		self.mouseY = event.offsetY;
	},
	onmouseup: function(event)
	{
		self.buttons[event.button] = false;
		self.mouseX = event.offsetX;
		self.mouseY = event.offsetY;
		//console.log(event);
	},
	onkeydown: function(event)
	{
		//console.log(event.keyCode);
		localUserEvents.keys[event.keyCode] = true;
		//this.localUserEvents.keys[event.keyCode] = true;
		return false;
	}
	,
	onkeyup: function(event)
	{
		//console.log(event.keyCode);
		localUserEvents.keys[event.keyCode] = false;
		//this.localUserEvents.keys[event.keyCode] = false;
		return false;
	}
	,
	pressed: function(key)
	{
		if(this.keys[key] == true && this.oldkeys[key] == false)
		{
			return true;
		}
		return false;
	}
	,
	down: function(key)
	{
		return this.keys[key];
	}
	,
	up: function(key)
	{
		return !this.keys[key];
	},
	mousedown: function(b)
	{
		return self.buttons[b];
	}
	,
	mouseup: function(b)
	{
		return !self.buttons[b];
	},
	mouseposx: function()
	{
		return self.mouseX;
	},
	mouseposy: function()
	{
		return self.mouseY;
	}

}

