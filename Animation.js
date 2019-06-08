/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/

function Animation(context, imagefilename, speed, frames)
{
	//this.image = new Image();
	//this.image.src = imagefilename;

	this.image = loader.load(imagefilename);

	this.framewidth = this.image.width / frames;
	this.frameheight = this.image.height;
	this.context = context;
	this.frames = frames;
	this.speed = speed;
	this.currentframe = 0;
	this.playing = true;
	this.halfwidth = this.framewidth/2;
	this.halfheight = this.frameheight/2;
	console.log("Animation created! Frames:"+String(this.frames));
}

Animation.prototype = {
	update: function(time)
	{
		if (this.playing)
		{
			this.currentframe = this.currentframe + this.speed * time;
			if (this.currentframe > this.frames - 1)
			{
				//this.currentframe = this.currentframe - this.frames;
				this.currentframe = 0.0;
			}
		}
	}
	,
	draw: function(dx, dy)
	{
		dx = dx - this.halfwidth;
		dy = dy - this.halfheight;
		this.context.drawImage(this.image, Math.round(this.currentframe) * this.framewidth, 0, this.framewidth, this.frameheight, dx, dy, this.framewidth, this.frameheight);
	}
	,
	reset: function()
	{
		this.currentframe = 0;
	}
	,
	setframe: function(frame)
	{
		this.currentframe = frame;
		if (this.currentframe > this.frames - 1)
		{
			this.currentframe = this.frames - 1;
		}
	}
}
