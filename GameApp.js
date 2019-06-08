/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/

//Constructor canvasobject, frames per second, gameobject with update(time) and draw() methods
function GameApp(canvas, FPS)
{
	this.canvas = canvas;
	this.targetFPStimeout = 1000.0 / FPS;
	this.targetFPS = FPS;
	this.context = canvas.getContext("2d");
	this.events = new EventsHandler(window);
	this.self = this;
	
	this.lastTimeMSupdate = new Date().getTime();
	this.currentTimeMSupdate = this.lastTimeMSupdate;
	this.lastTimeMSdraw = new Date().getTime();
	this.currentTimeMSdraw = this.lastTimeMSdraw;
	
	this.FPScounter = 0.0;
	this.FPSframes = 0;
	this.FPS = 0;
	this.showfps = false;

	this.fader = new Fader(this.canvas, this.context);
	
	this.gameobject = new LightCourier(this, canvas, this.context, this.events, this.canvas.width, this.canvas.height);
	
	// Set focus to canvas element
	this.canvas.focus();
	
	console.log(document);

}

GameApp.prototype = {
	start: function()
	{
		var me = this;
		setTimeout(function(){me.update();}, this.targetFPStimeout);
		setTimeout(function(){me.draw();}, this.targetFPStimeout);
		console.log("GameApp started!");
	}
	,
	update: function()
	{
		this.currentTimeMSupdate = new Date().getTime();
		var timeElapsed = (this.currentTimeMSupdate - this.lastTimeMSupdate)/1000.0;
		// To prevent massive lags causing horrible results
		if (timeElapsed > 0.5)
		{
			timeElapsed = 0.5;
		}

		// Show FPS toggle
		if (this.events.pressed(KEY_F) && this.events.pressed(KEY_G))
		{
			this.showfps = !this.showfps;
		}
		
		// Update fader
		this.fader.update(timeElapsed);
		
		// Update child game object
		this.gameobject.update(timeElapsed);
		
		// Update events
		this.events.update();

		this.lastTimeMSupdate = this.currentTimeMSupdate;

		// Next loop call timeout
		var loopTime = (new Date().getTime() - this.currentTimeMSupdate);
		var tillNext = this.targetFPStimeout - loopTime;
		if (tillNext < 1)
		{
			tillNext = 1;
		}
	
		var me = this;
		setTimeout(function(){me.update();},tillNext);

	},
	clearscreen: function()
	{
		//context.fillStyle = "rgba(0, 0, 0, 0.1)";
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
	,
	draw: function()
	{
		this.currentTimeMSdraw = new Date().getTime();
		var timeElapsed = (this.currentTimeMSdraw - this.lastTimeMSdraw)/1000.0;
		// To prevent massive lags causing horrible results
		if (timeElapsed > 0.5)
		{
			timeElapsed = 0.5;
		}
		
		this.gameobject.draw();
		this.fader.draw();
		if (this.showfps)
		{
			var tfps = "FPS:" + String(this.FPS) + "/" + String(this.targetFPS);
			//var dim = this.context.measureText(tfps);
			//this.context.fillText(tfps, dim.width, dim.height);
			this.context.font = "16px sans-serif";
			this.context.fillStyle = "rgb(255,255,255)";
			this.context.fillText(tfps, 0, 20);
		}
		
		this.lastTimeMSdraw = this.currentTimeMSdraw;

		// FPScounter
		this.FPScounter = this.FPScounter + timeElapsed;
		this.FPSframes += 1;
		if (this.FPScounter >= 1.0)
		{
			this.FPS = this.FPSframes;
			this.FPSframes = 0;
			this.FPScounter = this.FPScounter - 1.0;
		}


		// Next loop call timeout
		var loopTime = (new Date().getTime() - this.currentTimeMSdraw);
		var tillNext = this.targetFPStimeout - loopTime;
		if (tillNext < 1)
		{
			tillNext = 1;
		}
		var me = this;
		setTimeout(function(){me.draw();},tillNext);
	}
}

