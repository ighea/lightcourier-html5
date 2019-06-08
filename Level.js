/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/
function Level(canvas, context, eventshandler, width, height, mapdata)
{
	this.canvas = canvas;
	this.context = context;
	this.width = width;
	this.height = height;
	this.events = eventshandler;
	this.map = mapdata;
	
	this.camera = new Camera(context, 0, 0, width, height, canvas.width, canvas.height);
	this.camera.borders = false; // disable borders
	
	//this.audioBG = new Audio();
	//this.audioBG.src = "background.ogg";
	this.audioBG = loader.load("background.ogg");
	//this.audioBG.loop = "loop";
	this.audioBG.setAttribute("loop","loop");
	this.audioBG.play();

	/*this.imgchamps = new Image();
	this.imgchamps.src = "champs.png";
	this.imgrock = new Image();
	this.imgrock.src = "rock.png";
	this.imggrass = new Image();
	this.imggrass.src = "grass.png";
	
	this.wireNESW = new Image();
	this.wireNESW.src = "wires/NESW.png";
	this.wireNS = new Image();
	this.wireNS.src = "wires/NS.png";
	this.wireNWSE = new Image();
	this.wireNWSE.src = "wires/NWSE.png";
	this.wireWE = new Image();
	this.wireWE.src = "wires/WE.png";
	*/
	this.imgchamps = loader.load("champs.png");
	this.imgrock = loader.load("rock.png");
	this.imggrass = loader.load("grass.png");

	this.wireNESW = loader.load("wires/NESW.png");
	this.wireNS = loader.load("wires/NS.png");
	this.wireNWSE = loader.load("wires/NWSE.png");
	this.wireWE = loader.load("wires/WE.png");

	// Create the level:
	this.character = new Character(context, this.events, this, 100, 100);
	
	this.gameobjects = new Array();
	this.drawarray = new Array();
	
	// Fetch max area size
	var maxx = 0;
	var maxy = 0;
	var x = 0;
	var y = 0;
	var inc = 100;
	
	for (var i = 0; i < this.map.length; i++)
	{
		if (this.map[i] == "\n")
		{
			if (x > maxx)
			{
				maxx = x;
			}
			x = 0;
			y = y + 1;
			maxy=y;
		}
		else
		{
			x=x+1;
		}
	}
	x=0;
	y=0;
	// Create background object
	//this.background = new Background(this.context, maxx*inc, maxy*inc, 0, 0);
	this.background = new Background(this.context, maxx*inc, maxy*inc, 0, 0);
	// Populate
	for (var i = 0; i < this.map.length; i++)
	{
		if (this.map[i] == "\n")
		{
			x = 0;
			y = y + 1;
		}
		else
		{
			if (this.map[i] == "L")
			{
				this.gameobjects.push(new Light(this.canvas, this.context, this, x*inc, y*inc));
			}
			else if (this.map[i] == "E")
			{
				this.gameobjects.push(new Light(this.canvas, this.context, this, x*inc, y*inc, false, true));
			}
			else if (this.map[i] == "S")
			{
				this.gameobjects.push(new Light(this.canvas, this.context, this, x*inc, y*inc, true));
				this.character.x = x*inc + 25;
				this.character.y = y*inc + 25;
				this.camera.position(x*inc,y*inc);
			}
			else if (this.map[i] == "|")
			{
				this.background.add(this.wireNS, x*inc, y*inc);		
			}
			else if (this.map[i] == "\\")
			{
				this.background.add(this.wireNWSE, x*inc, y*inc);		
			}
			else if (this.map[i] == "-")
			{
				this.background.add(this.wireWE, x*inc, y*inc);		
			}
			else if (this.map[i] == "/")
			{
				this.background.add(this.wireNESW, x*inc, y*inc);		
			}
			else
			{
				if (x != 0 && y != 0 && x < maxx -1 && y < maxy -1)
				{
					var value = Math.round(Math.random()*20);
					if (value == 0)
					{
						this.background.add(this.imgchamps, x*inc, y*inc);
					}
					if (value == 1)
					{
						this.background.add(this.imgrock, x*inc, y*inc);
					}
					if (value == 2)
					{
						this.background.add(this.imggrass, x*inc, y*inc);
					}
				}			
			}
			
			x = x + 1;	
		}
	}
	
	this.finished = false;
	
	this.drawarray = this.drawarray.concat(this.gameobjects);
	this.drawarray.push(this.character);
	
	this.levelstartuptextshow = true;
	this.levelstartuptextmod = 0;
	this.levelstartuptextspeed = 300;
	this.levelstartuptext = "Good luck!";
	this.levelstartuptextalpha = 1.0;
	this.levelstartupcounter = 0;
		
	console.log("Level created! (",maxx,maxy,")");
}

Level.prototype = {
	clean: function()
	{
		delete this.background;
		this.audioBG.pause();
		delete this.audioBG;
	}
	,
	update: function(time)
	{

		if (this.finished == false)
		{
			this.character.update(time);
		}
		for (var i=0;i < this.gameobjects.length; i=i+1)
		{
			this.gameobjects[i].update(time);
		}
		this.camera.update(time, this.character.x, this.character.y);
		
		if (this.levelstartuptextshow)
		{
			/*
				this.levelstartuptextshow = true;
				this.levelstartuptextmod = 0;
				this.levelstartuotextspeed = 200;
			*/
			this.levelstartupcounter = this.levelstartupcounter + time;
			if (this.levelstartupcounter >= 1.0)
			{
				this.levelstartuptextmod = this.levelstartuptextmod + time * this.levelstartuptextspeed;
				this.levelstartuptextalpha = this.levelstartuptextalpha - time*2;
				if (this.levelstartuptextmod > this.canvas.width/2)
				{
					this.levelstartuptextshow = false;
				}
			}
		}
	}
	,
	draw: function()
	{
		this.context.save();
		// Set camera target
		this.camera.draw();
		this.context.save();

		// Clear camera background
		//this.context.fillStyle = "rgb(0, 0, 0)";
		//this.context.fillRect(this.camera.x - this.canvas.width/2, this.camera.y - this.canvas.height/2, this.canvas.width, this.canvas.height);
		
		// Create clipping regions:
		this.context.beginPath();
		for (var i=0; i < this.gameobjects.length; i=i+1)
		{	
			if (this.gameobjects[i].lit)
			{
				this.context.moveTo(this.gameobjects[i].x, this.gameobjects[i].y);
				this.context.arc(this.gameobjects[i].x, this.gameobjects[i].y, this.gameobjects[i].lightpower, 0, Math.PI*2, true);
			}
		}
		if (this.character.alive)
		{
			this.context.moveTo(this.character.x, this.character.y);
			this.context.arc(this.character.x, this.character.y, this.character.lightpower, 0, Math.PI*2, true);
		}
		this.context.clip()
		this.context.closePath();
		
		// Draw background
		
		this.background.draw();
		
		// Draw game objects and character
		/*for (var i=0;i < this.gameobjects.length; i=i+1)
		{
			this.gameobjects[i].draw();
		}
		this.character.draw();
		*/
		
		this.drawarray.sort(function(a,b) { if (a.ground) { return -1; } else if (b.ground) { return 1;} else {return (a.y - b.y)}; });
		for (var i=0;i < this.drawarray.length; i=i+1)
		{
			this.drawarray[i].draw();
		}		
		
		// Draw yellowish "glow"
		this.context.fillStyle = "rgba(250, 250, 150, 0.1)";
		this.context.fillRect(this.camera.x - this.canvas.width/2, this.camera.y - this.canvas.height/2, this.canvas.width, this.canvas.height);
		
		this.context.restore();

		// Blinks!		
		for (var i=0;i < this.gameobjects.length; i=i+1)
		{
			if (this.gameobjects[i].lit == false)
			{
				this.gameobjects[i].blink();
			}
		}
		this.context.restore();

		// Show startup text		
		if (this.levelstartuptextshow)
		{
			var dim = this.context.measureText(this.levelstartuptext);
			this.context.font = "30px sans-serif";
			// Back
			this.context.fillStyle = "rgba(155,155,155,"+String(this.levelstartuptextalpha)+")";
			this.context.fillText(this.levelstartuptext, this.canvas.width/2 - dim.width/2 - this.levelstartuptextmod + 2, this.canvas.height/2 + 2);
			// Front
			this.context.fillStyle = "rgba(255,255,0,"+String(this.levelstartuptextalpha)+")";
			this.context.fillText(this.levelstartuptext, this.canvas.width/2 - dim.width/2 + this.levelstartuptextmod, this.canvas.height/2);
		}
	}

}
