/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/
var mapdata = new Array();
mapdata[0] = "...X./-L.......E....\nL---L..|X...L..X....\n..L....|.../...L....\n...\\X..L--LX../.X...\n...X\\....X.\\X/.L....\n.....L......L.X|....\n.....|..X.../..|....\n....X|...../...LX...\n.L---L...XL..X.|....\n..\\....../.....|....\n...\\X.../..X..XL....\n....L--L....../.....\n..X...X.\\..X./......\n......L--L--L.......\n.....X.S/..X........\n";
mapdata[1] = "....................\n...X......L....L.X..\nS-L...X../.\\X..|...E\n.\\.X.L--LX..L--LX...\n..L.............\\...\n...\\............X\\..\n...XL....X........L.\n....LX......L..X./..\n.../X\\.....X|.L-L...\n..L---L.....L....X..\n......|..../........\n......|.../X........\n....X.L--L..........\n.......X............\n....................\n";
mapdata[2] = "....................\n...........L.L--L--L\n....X...../X/..X...|\n...L--L../XL......X|\n../.....L......L..XL\n.LX......X......\\./.\n..\\...XE.-L......L..\n...L......|X.....|..\n...|X.....|......|X.\n..XL--L..XL...X..L..\n.....X|...........\\X\n......L--L.........L\n......X...\\X..L--LX|\n...........\\./X...\\|\nX...........L......S\n";
mapdata[3] = ".............L......\n............/|......\n......X.L--L.|......\n........|....|.XL...\n.......X|....L..|...\n...X....L.....X.|...\n.....X..|X...L--L.X.\n...L--L.SX......|...\n...X\\.X..\\....X.|X..\n.....\\....L-L...L...\n.....XLX........X...\n...../....X......E..\n....L.L--L....X.L...\n...X...X..\\.X../....\n...........L--L.....\n";
mapdata[4] = ".........E..........\n....................\n.........L..........\n.....X...|.....X....\n......L..|LL--L--L..\n...../...LX../...|..\n....L.X...../X...|..\n...X.\\.....L....XL..\n......L....|..../...\n.....X|....L..XL....\n......|X...|...|....\n......L--L...L.|....\n......../.X./..LX...\n.......L-S-L........\n";

var dialog = new Array();
dialog[0] = "What lives in the darkness? No one knows. Stay there too long and be gone forever. Still the messages must be delivered. This is the story of the brave ones who defy the unseen.";
dialog[1] = "Oh son, you see that lad over there facing the endless Dim? He is our hero, the Light Courier. I hope you will be one someday too as it is a great honor!";
dialog[2] = "Eh, the light is blinking? That's not going to end well.";
dialog[3] = "#My son, I'm so proud that you've volunteered into being our next Light Courier! Good luck and let the Light be with you!";
dialog[4] = "And so our new little Light Courier heads out from home to the darkness. May the power cables and the twinkles of light reveal his path to the yet unknown...";
dialog[5] = "Another new one for the fray, eh?";
dialog[6] = "Well, we have a message to the outpost in the east as there have been reports of an increased light shortage! Off you go now, I wish you luck on your journey!";
dialog[7] = "Now with an important message at hand and the duty is clear. Sadly, the destination is nowhere near. No time for tears, the darkness calls...";
dialog[8] = "We haven't seen any of your kind for a while. What are you doing here?";
dialog[9] = "A message? From the west? And here we thought the Dim had swallowed them! What a jolly surprise.";
dialog[10] = "Huh? What happened to the monitor? Why is it dark?";
dialog[11] = "#Quickly now before... *UAAAAAARGH*";
dialog[12] = "Left alone in the endless dark. Gone is the old man, but there's no time to worry. Quickly now, hurry to the next settlement!";
dialog[13] = "We haven't seen anyone from the outside for a long while! How are things going there?";
dialog[14] = "Everyone gone? Lights went out from their whole complex? That shouldn't even be possible. You need to go to the capital and tell them about this!";
dialog[15] = "What? No this is not right at all! All the lights! All of them and so suddenly?";
dialog[16] = "#Have to w... *NOOO!*";
dialog[17] = "\"What is all this?\" The little Light Courier thinks, just before the nearest light blinks. Wondering if the nightmare will ever stop? Headed he for the next stop..";
dialog[18] = "It's nice to see a new face around here! Even while we are quite near the capital we have only a few visitors...";
dialog[19] = "Wait? What is the meaning of this? This is the first time for decades we have had...";
dialog[20] = "#Oh, no! I must..*AAAAARHH*";
dialog[21] = "Scared of the dark? I could say so. Only the final place left to go...";
dialog[22] = "Welcome to the Capital.";
dialog[23] = "Lights went out? Very interesting, as that shouldn't be possible!";
dialog[24] = "Three habitats gone to the Dim just after your arrival and you are the only survivor? This seems quite worrisome from our point of view.";
dialog[25] = "Huh, what's goig on? The lights are.. This can't be!";
dialog[26] = "#Our main source of po... *GRAAAAAAAAH*";
dialog[27] = "The fate has left our brave hero alone. In the surrounding darkness he stands with no place to go.";
dialog[28] = "The dimming light rises the fear. He remembers everyone once so dear.";
dialog[29] = "Gone are the lights and so is the hope. Sleep well, our little Light Courier.";

var gamestages = [
	{
		playable: false,
		//scene: "cs/scene11.png",
		dialog: dialog[0]
	},
	{
		playable: false,
		scene: "cs/scene12.png",
		dialog: dialog[1]
	},
	{
		playable: false,
		scene: "cs/scene13.png",
		dialog: dialog[2]
	},
	{
		playable: false,
		scene: "cs/scene14.png",
		dialog: dialog[3]
	},
	{
		playable: false,
		//scene: "cs/scene15.png",
		dialog: dialog[4]
	},
	{
		playable: true,
		mapdata: mapdata[0] // Level 1
	},
	{
		playable: false,
		scene: "cs/scene21.png",
		dialog: dialog[5]
	},
	{
		playable: false,
		scene: "cs/scene22.png",
		dialog: dialog[6]
	},
	{
		playable: false,
		//scene: "cs/scene23.png",
		dialog: dialog[7]
	},
	{
		playable: true,
		mapdata: mapdata[1] //level 2
	},
	{
		playable: false,
		scene: "cs/scene31.png",
		dialog: dialog[8]
	},
	{
		playable: false,
		scene: "cs/scene32.png",
		dialog: dialog[9]
	},
	{
		playable: false,
		scene: "cs/scene33.png",
		dialog: dialog[10]
	},
	{
		playable: false,
		scene: "cs/scene34.png",
		dialog: dialog[11]
	},
	{
		playable: false,
		//scene: "cs/scene35.png",
		dialog: dialog[12]
	},
	{
		playable: true,
		mapdata: mapdata[2] //level 3
	},
	{
		playable: false,
		scene: "cs/scene41.png",
		dialog: dialog[13]
	},
	{
		playable: false,
		scene: "cs/scene42.png",
		dialog: dialog[14]
	},
	{
		playable: false,
		scene: "cs/scene43.png",
		dialog: dialog[15]
	},
	{
		playable: false,
		scene: "cs/scene44.png",
		dialog: dialog[16]
	},
	{
		playable: false,
		//scene: "cs/scene45.png",
		dialog: dialog[17]
	},
	{
		playable: true,
		mapdata: mapdata[3] //level 4
	},
	{
		playable: false,
		scene: "cs/scene51.png",
		dialog: dialog[18]
	},
	{
		playable: false,
		scene: "cs/scene52.png",
		dialog: dialog[19]
	},
	{
		playable: false,
		scene: "cs/scene53.png",
		dialog: dialog[20]
	},
	{
		playable: false,
		//scene: "cs/scene54.png",
		dialog: dialog[21]
	},
	{
		playable: true,
		mapdata: mapdata[4] //level 5
	},
	{
		playable: false,
		scene: "cs/scene61.png",
		dialog: dialog[22]
	},
	{
		playable: false,
		scene: "cs/scene62.png",
		dialog: dialog[23]
	},
	{
		playable: false,
		scene: "cs/scene63.png",
		dialog: dialog[24]
	},
	{
		playable: false,
		scene: "cs/scene64.png",
		dialog: dialog[25]
	},
	{
		playable: false,
		scene: "cs/scene65.png",
		dialog: dialog[26]
	},
	{
		playable: false,
		scene: "cs/scene66.png",
		dialog: dialog[27]
	},
	{
		playable: false,
		scene: "cs/scene67.png",
		dialog: dialog[28]
	},
	{
		playable: false,
		/*scene: "cs/scene68.png",*/
		dialog: dialog[29]
	},
	{
		playable: false,
		scene: "cs/scene69.png",
		dialog: "The End. Thanks for playing!"
	}
];

function LightCourier(parent, canvas, context, eventshandler, screenwidth, screenheight)
{
	this.parent = parent;
	this.canvas = canvas;
	this.context = context;
	this.events = eventshandler;
	this.width = screenwidth;
	this.height = screenheight;
	
	
	this.context.font = "25px sans-serif";

	
	this.stage = {
		current:0,
		main:0,
		game:1,
		instructions:2,
		credits:3
	};
	
	this.currentgamestage = 0;
	this.gamefinished = false;

	/*this.imgInstructions = new Image();
	this.imgInstructions.src = "instructions.png";
	this.imgCredits = new Image();
	this.imgCredits.src = "credits.png";
	*/
	this.imgInstructions = loader.load("instructions.png");
	this.imgCredits = loader.load("credits.png");
	
	this.menuanim = new Animation(this.context, "menu.png", 5, 8);
	
	this.menu = ["Play", "Instructions", "Credits"];
	this.menucurrent = 0;
	this.menupos = [0, 0, 0];
	
	/*
	this.menuaudio = new Audio();
	this.menuaudio.src = "menu.ogg"
	*/
	this.menuaudio = loader.load("menu.ogg");
	this.menuaudio.loop = "loop";
	this.menuaudio.play();
	
	this.showpresspacetext = false;
	
	this.parent.fader.fade(Fader.fadein, 1);

	
	/*this.saudio = new Audio()
	this.saudio.src = "scream1.ogg";
	*/
	this.saudio = loader.load("scream1.ogg");
	
	this.showloadingtext = false;
		
	console.log("LightCourier created!");
}

LightCourier.prototype = {
	loadlevel: function(level)
	{
		this.showloadingtext = true;
		if( typeof(this.level) != 'undefined')
		{
			this.level.clean();
		}
		this.level = new Level(this.canvas, this.context, this.events, this.canvas.width, this.canvas.height, level);
		
		this.showloadingtext = false;
		//this.parent.fader.fade(Fader.fadein, 1);		
	}
	,
	update: function(time)
	{
		this.showpresspacetext = false;
		switch (this.stage.current)
		{
			// ALL GAME RELATED:
			case this.stage.game:
				////////////////////////////////////////////////////////////////////////////////////
				if (gamestages[this.currentgamestage].playable)
				{ // It's a game stage
					if( typeof(this.level) == 'undefined')
					{ // Level not defined, create new
						this.menuaudio.pause();
						this.loadlevel(gamestages[this.currentgamestage].mapdata);
					}
					this.level.update(time);
			
					if (this.level.character.alive == false)
					{  // Player dead, retry, quit selections:
						if (this.events.pressed(KEY_Y))
						{
							this.loadlevel(gamestages[this.currentgamestage].mapdata);
						}
						else if (this.events.pressed(KEY_N))
						{
							this.level.clean();
							this.stage.current = this.stage.main;
							this.currentgamestage = 0;
							this.menuaudio.play();
							delete this.level;
						}
					}
					
					if (typeof(this.level) != 'undefined' && this.level.finished)
					{
						this.showpresspacetext = true;
						if (this.events.pressed(KEY_SPACE))
						{
							this.level.clean();
							delete this.level;
							this.currentgamestage++;
						}
					}
					
					if (this.events.pressed(KEY_F) && this.events.pressed(KEY_H))
					{
						this.level.finished = true;
					}
		
				}
				else
				{	// It's a cutscene
					this.showpresspacetext = true;
					if (typeof(this.sceneimage) == "undefined")
					{
						this.menuaudio.play();
						this.sceneimage = new Image();
						this.sceneimage.src = gamestages[this.currentgamestage].scene;
					}
					
					if (this.events.pressed(KEY_SPACE))
					{
						delete this.sceneimage;
						this.currentgamestage++;

												
						if (this.currentgamestage > gamestages.length - 1)
						{
							this.menuaudio.play();
							this.currentgamestage = 0;
							this.stage.current = this.stage.credits;
						}
						// Play dialogue scream sound:
						else if (typeof(gamestages[this.currentgamestage].dialog) != "undefined")
						{
							if (gamestages[this.currentgamestage].dialog.charAt(0) == "#")
							{
								this.saudio.play();
							}
						}

					}
				}
				//////////////////////////////////////////////////////////////////////////////////////
			break;
			case this.stage.instructions:
			case this.stage.credits:
				this.showpresspacetext = true;
				if (this.events.pressed(KEY_SPACE) || this.events.pressed(KEY_ENTER))
				{
					this.stage.current = this.stage.main;
				}
			break;
			case this.stage.main:
				this.menuanim.update(time);
				if (this.events.pressed(KEY_SPACE) || this.events.pressed(KEY_ENTER))
				{
					this.stage.current = this.menucurrent + 1;
				}
				if (this.events.pressed(KEY_UP))
				{
					this.menucurrent--;
				}
				if (this.events.pressed(KEY_DOWN))
				{
					this.menucurrent++;
				}
				if (this.menucurrent >= this.menu.length)
				{
					this.menucurrent = 0;
				}
				if (this.menucurrent < 0)
				{
					this.menucurrent = this.menu.length - 1;
				}
				
				for (var i = 0; i < this.menu.length; i++)
				{
					if (i == this.menucurrent)
					{
						this.menupos[i] += time*50;
						if (this.menupos[i] >= 20)
						{
							this.menupos[i] = 20;
						}
					}
					else
					{
						this.menupos[i] -= time*50;
						if (this.menupos[i] <= 0)
						{
							this.menupos[i] = 0;
						}					
					}
				}

			break;
			default:
				console.log("switch-case default!?");
			break;
		}
	}
	,
	draw: function()
	{
		// Clear screen
		this.context.fillStyle = "rgb(0,0,0)";
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
				
		switch (this.stage.current)
		{
			// ALL GAME RELATED:
			case this.stage.game:
				if (this.showloadingtext)
				{
					this.context.font = "25px sans-serif";
					this.context.fillStyle = "rgb(0,0,0)";
					this.context.fillRect(0,0, this.canvas.width, this.canvas.height);
					var loadingtext = "Loading";
					this.context.fillStyle = "rgb(250,250,0)";
					var dim = this.context.measureText(loadingtext);
					this.context.fillText(loadingtext, this.width/2 - dim.width/2 , 200);
				}
				////////////////////////////////////////////////////////////////////////////////////
				if (gamestages[this.currentgamestage].playable)
				{ // It's a game stage
					if (typeof(this.level) != "undefined")
					{
						this.level.draw();
		
						if (this.level.character.alive == false)
						{
							var tryagaintext = "You have been eaten by a grue! Try again? (Y/N)";
							this.context.font = "25px sans-serif";
							this.context.fillStyle = "rgb(250,250,0)";
							var dim = this.context.measureText(tryagaintext);
							this.context.fillText(tryagaintext, this.width/2 - dim.width/2 , 200);
						}
						else if (this.level.finished)
						{
							var text = "You are safe now! Well done!";
							this.context.font = "25px sans-serif";
							this.context.fillStyle = "rgb(250,250,0)";
							var dim = this.context.measureText(text);
							this.context.fillText(text, this.width/2 - dim.width/2 , 200);
						}
					}
				}
				else
				{ // Is cutscene.
				
					var cent = false;
					var hmod=0;
					var vmod=0;
					var wmod=0;
					if (typeof(gamestages[this.currentgamestage].scene) == "undefined")
					{
						cent = true;
						hmod = 0.5;
						wmod = this.canvas.width * 0.4;
						vmod = this.canvas.width * 0.2;
					}
					// Clear screen
					//this.context.fillStyle = "rgb(0,0,0)";
					//this.context.fillRect(0,0,this.canvas.width, this.canvas.height);

					// Draw image
					if (typeof(gamestages[this.currentgamestage].scene) != "undefined" && typeof(this.sceneimage) != 'undefined')
					{
						this.context.drawImage(this.sceneimage, this.canvas.width/2 - this.sceneimage.width/2, 0);
					}
					// wrap text
					this.context.font = "16px sans-serif";
					var text = gamestages[this.currentgamestage].dialog;
					text = text.replace("#","").split(" ");
					var lines = [];
					var tlen = text.length;
					var dim;
					var line = "";
					for (var i = 0; i < tlen; i++)
					{
						dim = this.context.measureText(line + " " + text[i]);
						if (dim.width < this.canvas.width - 10 - wmod)
						{
							if (line.length == 0)
							{
								line = text[i];
							}
							else
							{
								line = line + " " + text[i];					
							}
						}
						else
						{
							lines.push(line);
							line = text[i];
						}
					}
					lines.push(line);
					// Draw text
					this.context.fillStyle = "rgb(250,250,0)";
					for (var i=0;i < lines.length; i++)
					{
						this.context.fillText(lines[i], 5 + vmod, this.canvas.height*0.9 - hmod*this.canvas.height + i*18);
					}
				}
			break;
			case this.stage.instructions:
				this.context.drawImage(this.imgInstructions, this.canvas.width/2 - this.imgInstructions.width/2, 0);
			break;
			case this.stage.credits:
				this.context.drawImage(this.imgCredits, this.canvas.width/2 - this.imgCredits.width/2, 0);
			break;
			case this.stage.main:
				// Draw main menu
				this.menuanim.draw(this.canvas.width/2,this.canvas.height/2);
				this.context.font = "20px sans-serif";
				for (var i = 0; i < this.menu.length; i++)
				{
					this.context.fillStyle = "rgb(250,250,250)";
					if (i == this.menucurrent)
					{
						this.context.fillStyle = "rgb(250,250,0)";
					}
					this.context.fillText(this.menu[i], this.canvas.width/2 - this.menupos[i], this.canvas.height*0.6 + i* 25);
				}
				this.context.font = "14px sans-serif";
				var uakt = "Use arrow keys!";
				var dim = this.context.measureText(uakt);
				this.context.fillText("Use arrow keys", this.canvas.width - dim.width - 10, 14);	
			break;
			default:
			break;
		}
		if (this.showpresspacetext)
		{
			this.context.font = "14px sans-serif";
			this.context.fillStyle = "rgb(200,200,200)";
			var txt = String("Press space to continue");
			var dim = this.context.measureText(txt);
			this.context.fillText(txt, this.canvas.width - dim.width-5, this.canvas.height-5);
		}
	}
}
