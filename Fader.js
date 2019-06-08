/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/

function Fader(canvas, context)
{
	this.canvas = canvas;
	this.context = context;
	this.alpha = 0;
	this.counter = 0;
	this.duration = 0;
	this.style = 0;
	this.on = false;
	this.finished = true;
	this.fadein=0;
	this.fadeout=1;
}

Fader.prototype = {
	update: function(time)
	{
		if (this.on)
		{
			if (this.style == Fader.fadein)
			{
				this.counter = this.counter - time;
				if (this.counter <= 0)
				{
					this.on = false;
					this.finished = true;
				}
			}
			else
			{
				this.counter = this.counter + time;
				if (this.counter >= this.duration)
				{
					this.on = false;
					this.finished = true;
				}
			}		
			this.alpha = (this.counter / this.duration)
		}
	},
	draw: function()
	{
		this.context.fillStyle = "rgba(0,0,0, "+String(this.alpha)+")";
		this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
	},
	fade: function(style, duration)
	{
		this.on = true;
		this.duration = duration;
		if (style == Fader.fadein)
		{
			this.counter = duration;
		}
		else
		{
			this.counter = 0;
		}
		this.style = style;
		this.finished = false;
		console.log("Starting fade!", this.style);
	}
};
