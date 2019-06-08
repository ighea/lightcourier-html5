/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/
function Camera(context, startX, startY, endX, endY, viewWidth, viewHeight)
{
	this.context = context;
	this.context.save(); // Save context for draw to work correctly
	this.x = startX + viewWidth/2;
	this.y = startY + viewHeight/2;
	this.width = viewWidth;
	this.height = viewHeight;
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;
	this.borders = true; // Do we care about the start* and end* -values that create the camera movement area
}

Camera.prototype = {
	update: function(time, targetX, targetY)
	{
		// Calculate camera position towards target
				
		var dX = targetX - this.x;
		var dY = targetY - this.y;
		
		
		this.x = this.x + dX*time;
		this.y = this.y + dY*time;
		
		if (this.borders)
		{
			if (this.x < this.startX + this.width/2)
			{
				this.x = this.startX + this.width/2;
			}
			else if (this.x > this.endX - this.width/2)
			{
				this.x = this.endX - this.width/2;
			}
			if (this.y < this.startY + this.height/2)
			{
				this.y = this.startY + this.height/2;
			}
			else if (this.y > this.endY - this.height/2)
			{
				this.y = this.endY - this.height/2;
			}
		}		
		//console.log(this.x,this.y);

	},
	draw: function()
	{
		// Restore and save current content state
		this.context.restore();
		this.context.save();
		
		// Move to position
		this.context.translate(this.width/2 - this.x, this.height/2 - this.y);

		// Draw funny shape for debugging	
		/*context.strokeStyle = "rgb(0, 0, 255)";
		context.lineWidth = 1;
		context.strokeRect(this.x - 2, this.y - 2, 2,  2);
		*/
	},
	position: function(x, y) // Instantly move camera to position x,y
	{
		this.x = x;
		this.y = y;
	}
}
