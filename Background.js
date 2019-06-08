/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/

function Background(targetcontext, width, height, x, y)
{
	this.x = x;
	this.y = y;
	this.tcontext = targetcontext;
	this.canvas = document.createElement("canvas");
	this.canvas.width = width + x*2;
	this.canvas.height = height + y*2;
	this.context = this.canvas.getContext("2d");
	
	this.context.fillStyle = "rgb(0,0,0)";
	this.context.fillRect(0,0, this.canvas.width, this.canvas.height);
}

Background.prototype = {
	draw: function()
	{
		this.tcontext.drawImage(this.canvas, -this.x , -this.y)
		//this.tcontext.strokeStyle="rgb(0,255,0)";
		//this.tcontext.strokeRect(-this.x, -this.y, this.canvas.width, this.canvas.height);
	}
	,
	add: function(img, x, y)
	{
		//this.context.drawImage(img, x - this.x - img.width/2, y - this.y - img.height/2);
		this.context.drawImage(img, x - img.width/2 + this.x, y - img.height/2 + this.y);
		//this.context.drawImage(img, x + this.x, y + this.y);
	}

}
