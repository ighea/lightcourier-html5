/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/
// console fix
if (typeof(console) == "undefined")
{
	console = new Object();
	console.log = function() {};
}


function Loader(canvas, itemsArray, callWhenLoadingDoneFunction)
{
	this.self = this;
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	this.itemsArray = itemsArray;
	this.itemsTotal = itemsArray.length;
	this.loadingDone = callWhenLoadingDoneFunction;
	this.itemsDone = 0;
	
	this.content = [];
	
	console.log("Loader created.");
}
Loader.prototype = {
	appendtohead: function(element)
	{
		document.getElementsByTagName("head").item(0).appendChild(element);
	}
	,
	load: function(filename)
	{
		for (var i=0; i < this.content.length; i++)
		{
			if (this.content[i].value == filename)
			{
				console.log("Found '"+filename+"' in content!");
				return this.content[i].ref;
			}
		}
		console.log("WARNING: File '"+filename+"' not preloaded, this will propaply fail.");
	}
	,
	run: function()
	{
		console.log("Starting item loading:");
		this.context.font = "20px sans-serif";
		this.context.fillStyle = "rgb(0,0,0)";
		this.context.fillRect(0,0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = "rgb(255,255,255)";
		this.context.fillText("Loading..", 5, 20);
				
		var me = this;
		for (var i=0; i< this.self.itemsTotal; i++)
		{
			var e;
			if (this.self.itemsArray[i].indexOf(".js") > 0)
			{
				console.log("Loading: " + this.self.itemsArray[i]);
				e = document.createElement('script');
				e.parent = this;
				e.src = this.self.itemsArray[i];
				e.type = "text/javascript";
				e.onload = me.onItemLoaded;
				this.appendtohead(e);
			}
			else if (this.self.itemsArray[i].indexOf(".png") > 0)
			{
				console.log("Loading: " + this.self.itemsArray[i]);
				e = document.createElement('img');
				e.parent = this;
				e.src = this.self.itemsArray[i];
				e.onload = me.onItemLoaded;
				this.appendtohead(e);
			}
			else if (this.self.itemsArray[i].indexOf(".ogg") > 0)
			{
				console.log("Loading: " + this.self.itemsArray[i]);
				e = document.createElement('audio');
				e.parent = this;
				e.type = "audio/ogg";
				e.preload = "auto";
				e.src = this.self.itemsArray[i];
				e.onload = me.onItemLoaded;
				//e.oncanplaythrough = me.onItemLoaded;
				this.appendtohead(e);
				e.load(); //Start loading of audio file..?
				// Becouse the fucking shitty html5 implementation is not perfect we skip this:
				this.itemsDone = this.itemsDone + 1;
			}
			else
			{
				console.log("WARNING: File type not supported: "+String(this.self.itemsArray[i]));
				return;
			}
			this.content.push({ref:e, value:this.self.itemsArray[i]});
		}
	}
	,
	onItemLoaded: function(event)
	{
		//console.log("Event type: ",event.type);
		console.log("Loaded "+ (this.parent.itemsDone + 1) + "/"+this.parent.itemsTotal +": " + this.parent.itemsArray[this.parent.itemsDone]);
		this.parent.itemsDone++;
		
		var completed = this.parent.itemsDone/this.parent.itemsTotal;
		this.parent.context.fillStyle = "rgb(255,255,255)";
		this.parent.context.fillRect(this.parent.canvas.width*0.10, this.parent.canvas.height / 2 - 20, this.parent.canvas.width*0.80, 40);
		//this.parent.context.fillStyle = "rgb(100, 100, 255)";
		this.parent.context.fillStyle = "rgb(250, 250, 0)";
		this.parent.context.fillRect(this.parent.canvas.width*0.10 + 10, this.parent.canvas.height / 2 - 20 + 5, (this.parent.canvas.width*0.80 - 20)*completed, 40 - 10);
		
		this.parent.context.fillStyle = "rgb(0,0,0)";
		this.parent.context.font = "25px sans-serif";
		var donetext = String(Math.round((this.parent.itemsDone/this.parent.itemsTotal)*100))+"%";
		var textdim = this.parent.context.measureText(donetext);
		
		this.parent.context.fillText(donetext, this.parent.canvas.width/2 - textdim.width/2, this.parent.canvas.height/2 + 10);

		
		if (this.parent.itemsDone == this.parent.itemsTotal)
		{
			console.log("All loaded. Launching start up function...");
			
			//console.log(this.parent.content);
			this.parent.loadingDone();
		}
	}
}
function readfile(file)
{
	console.log("Loading file: "+file);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", file, false);
	xmlhttp.send(null);
	return xmlhttp.responseText
}


function init()
{
	var game = new GameApp(document.getElementById("screencanvas"), 25);
	game.start();
}

var items = [];
var scripts = ["EventsHandler.js", "Camera.js", "Animation.js", "Character.js", "Level.js", "GameApp.js", "Light.js", "LightCourier.js", "Background.js", "Fader.js"];
var sounds = ["background.ogg", "electricity.ogg", "click1.ogg", "death.ogg", "scream.ogg", "scream1.ogg", "menu.ogg"];
var graphics = ["cI.png", "cN.png", "cNE.png", "cE.png", "cSE.png", "cS.png", "cSW.png", "cW.png", "cNW.png", "dead.png",
		"light.png", "lightdead.png", "blink.png", "startpoint.png", "endpoint.png",
		"rock.png", "grass.png", "champs.png", "wires/NESW.png", "wires/NS.png", "wires/NWSE.png", "wires/WE.png",
		"instructions.png", "credits.png", "menu.png"];
var cutscenes = [/*"cs/scene11.png",*/ "cs/scene12.png", "cs/scene13.png", "cs/scene14.png", /*"cs/scene15.png",*/ "cs/scene21.png", "cs/scene22.png", /*"cs/scene23.png",*/ "cs/scene31.png", "cs/scene32.png", "cs/scene33.png", "cs/scene34.png", /*"cs/scene35.png",*/ "cs/scene41.png", "cs/scene42.png", "cs/scene43.png", "cs/scene44.png", /*"cs/scene45.png",*/ "cs/scene51.png", "cs/scene52.png", "cs/scene53.png", /*"cs/scene54.png",*/ "cs/scene61.png", "cs/scene62.png", "cs/scene63.png", "cs/scene64.png", "cs/scene65.png", "cs/scene66.png", "cs/scene67.png", /*"cs/scene68.png",*/ "cs/scene69.png"];
items = items.concat(scripts, graphics, cutscenes, sounds);
var loader = new Loader(document.getElementById("screencanvas"), items, init); // Create loader
loader.run(); // Start loading and start up process


