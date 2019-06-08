/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/

function Light(canvas, context, level, x, y, startpoint, endpoint)
{
	this.startpoint  = typeof(startpoint) != 'undefined' ? startpoint : false;
	this.endpoint = typeof(endpoint) != 'undefined' ? endpoint : false;
	if (this.startpoint || this.endpoint)
	{
		this.alwayson = true;
	}
	else
	{
		this.alwayson = false;
	}

	this.canvas = canvas;
	this.context = context;
	this.level = level;
	this.x = x;
	this.y = y;
	this.lit = false;
	this.lightpower = 100;
	
	if (this.startpoint)
	{
		this.animcur = new Animation(context, "startpoint.png", 1, 1);
		this.lit = true;
	}
	else if (this.endpoint)
	{
		this.animcur = new Animation(context, "endpoint.png", 1, 1);
		this.lit = true;
		this.ground = true;
	}
	else
	{
		this.animOn = new Animation(context, "light.png", 1, 1);
		this.animOff = new Animation(context, "lightdead.png", 1, 1);
		this.animcur = this.animOff;
	}
	/*this.audioOn = new Audio();
	this.audioOn.src = "click1.ogg";
	this.audioOn.load();
	this.audioOff = new Audio();
	this.audioOff.src = "electricity.ogg";
	this.audioOff.load();
	*/
	this.audioOn = loader.load("click1.ogg");
	this.audioOff = loader.load("electricity.ogg");
			
	this.audioOffPlaying = false;

	/*
	this.imgBlink = new Image();
	this.imgBlink.src = "blink.png";
	*/
	this.imgBlink = loader.load("blink.png");
	this.blinktrigger = 6;
	this.blinkcounter = this.blinktrigger*Math.random();
	this.blinknow = false;
	
	this.ray = 15;
	
	this.counter = 0;
	console.log("Light created!");
}

Light.prototype = {
	update: function(time)
	{
		//Update blinker
		this.blinknow = false;
		this.blinkcounter = this.blinkcounter + time;
		if (this.blinkcounter > this.blinktrigger)
		{
			this.blinkcounter = 0;
			this.blinknow = true;
		}
	
		if (this.level.character.alive && this.collision(this.x,this.y, this.ray, this.level.character.x, this.level.character.y, this.level.character.ray+5))
		{
			if (this.endpoint && this.level.finished == false)
			{	
				this.level.finished = true;
				console.log("Level completed!");
			}		
			if (this.lit == false && this.alwayson == false)
			{
				this.lit = true;
				this.audioOn.play();
				console.log("Light On!");
			}
			this.counter = 5.0;
		}
		if (this.lit && this.collision(this.x,this.y, this.lightpower, this.level.character.x, this.level.character.y, 1))
		{
			this.level.character.increaselightpower(time*100);
		}

		if (this.alwayson == false)
		{
			if (this.lit)
			{
				this.animcur = this.animOn;
			}
			else
			{
				this.animcur = this.animOff;
			}
		}
				
		if (this.counter > 0 && this.alwayson == false)
		{
			this.counter = this.counter - time * 1.0;
			if (this.counter <= 2.4 && this.audioOffPlaying == false)
			{
				this.audioOffPlaying = true;
				this.audioOff.play();
				
			}
			// Light is on when these apply:
                        if ((this.counter > 2.0) ||
                            (this.counter < 1.7 && this.counter > 1.2) ||
                            (this.counter < 1.1 && this.counter > 0.8) ||
                            (this.counter < 0.5 && this.counter > 0.3) ||
                            (this.counter < 0.15 && this.counter > 0.05))
                        {
                        	this.animcur = this.animOn;
                        	this.lit = true;
                        }                        
                        else
                        {
                               	this.animcur = this.animOff;
                        	this.lit = false;
                        }
                        
                        
			if (this.counter <= 0)
			{
				console.log("Light Off!");
				this.lit = false;
				this.audioOffPlaying = false;
			}			
		}
		
	}
	,
	collision: function(x1, y1, r1, x2, y2, r2)
	{
		var dx = x1 - x2;
		var dy = y1 - y2;
		if (dx*dx + dy*dy < Math.pow(r1+r2,2))
		{
			return true;
		}
		return false;
	}
	,
	draw: function(canvas, context)
	{
		this.animcur.draw(this.x, this.y);
	}
	,
	blink: function()
	{
		if (this.blinknow)
		{
			this.context.drawImage(this.imgBlink, this.x - this.imgBlink.width/2, this.y - this.imgBlink.height/2);	
		}
	}
}
