/*!
Copyright © 2011 Mika <ighea> Hynnä, contact: igheax@gmail.com
*/

function Character(context, eventshandler, level, x, y)
{
	this.ground = false;
	this.context = context;
	this.level = level;
	this.events = eventshandler;
	this.x = x;
	this.y = y;
	this.vely = 0;
	this.velx = 0;
	this.velocity = 15;
	this.alive = true;
	this.moving = false;
	
	this.lightpower = 50;
	this.maxlightpower = 100;
	this.lightpowerdecrement = 40;
	
	this.animIdle = new Animation(context, "cI.png", 4.0, 4);
	this.animLeft = new Animation(context, "cW.png", 4.0, 4);
	this.animRight = new Animation(context, "cE.png", 4.0, 4);
	this.animUp = new Animation(context, "cN.png", 4.0, 4);
	this.animDown = new Animation(context, "cS.png", 4.0, 4);	
	this.animLeftUp = new Animation(context, "cNW.png", 4.0, 4);
	this.animLeftDown = new Animation(context, "cSW.png", 4.0, 4);
	this.animRightUp = new Animation(context, "cNE.png", 4.0, 4);
	this.animRightDown = new Animation(context, "cSE.png", 4.0, 4);
	this.animDead = new Animation(context, "dead.png", 1, 1);
	
	this.animcur = this.animIdle;

	//this.audioScream = new Audio();
	//this.audioScream.src = "scream.ogg";
	this.audioScream = loader.load("scream.ogg");
	
	this.ray = 15;
	
	console.log("Character created!");
	
}

Character.prototype = {
	update: function(time)
	{
		if (this.alive)
		{
			//this.animcur = this.animIdle;
			this.moving = false;
			if (this.events.down(KEY_LEFT))
			{
				this.moving = true;
				this.velx = this.velx - this.velocity;
				if (this.events.down(KEY_UP))
				{
					this.animcur = this.animLeftUp;
					this.vely = this.vely - this.velocity;
				}
				else if (this.events.down(KEY_DOWN))
				{
					this.animcur = this.animLeftDown;
					this.vely = this.vely + this.velocity;
				}
				else
				{
					this.animcur = this.animLeft;
				}
			}
			else if (this.events.down(KEY_RIGHT))
			{
				this.moving = true;
				this.velx = this.velx + this.velocity;
				if (this.events.down(KEY_UP))
				{
					this.animcur = this.animRightUp;
					this.vely = this.vely - this.velocity;
				}
				else if (this.events.down(KEY_DOWN))
				{
					this.animcur = this.animRightDown;
					this.vely = this.vely + this.velocity;
				}
				else
				{
					this.animcur = this.animRight;
				}
			}
			else if (this.events.down(KEY_UP))
			{
				this.moving = true;
				this.animcur = this.animUp;
				this.vely = this.vely - this.velocity;
			}
			else if (this.events.down(KEY_DOWN))
			{
				this.moving = true;
				this.animcur = this.animDown;
				this.vely = this.vely + this.velocity;
			}
		}	
		
		var cany = true;
		var canx = true;
		
		var sx = this.velx * time;
		var sy = this.vely * time;		
		
		
		// Check collisions against gameobjects	
		for (var i=0;i < this.level.gameobjects.length; i++)
		{
			var obj = this.level.gameobjects[i];
			if (obj.ground != true)
			{
				if (obj.collision(this.x+sx, this.y+sy, this.ray, obj.x, obj.y, obj.ray))
				{
					canx=false;
					cany=false;
					if (!obj.collision(this.x+sx, this.y, this.ray, obj.x, obj.y, obj.ray))
					{
						canx=true;
					}
					if (!obj.collision(this.x, this.y+sy, this.ray, obj.x, obj.y, obj.ray))
					{
						cany=true;
					}
				}
			}
		}
		
//		this.x = this.x + this.velx * time;
//		this.y = this.y + this.vely * time;
		if (canx)
		{
			this.x = this.x + sx;
		}
		else
		{
			//this.velx = this.velx*-0.5;
		}
		if (cany)
		{
			this.y = this.y + sy;
		}
		else
		{
			//this.vely = this.vely*-0.5;
		}
		
		this.velx = this.velx * 0.85;
		this.vely = this.vely * 0.85;
		
		
		if (this.moving)
		//if (Math.abs(this.velx) > 1 || Math.abs(this.vely) > 1)
		{
			this.animcur.update(time);
		}
		else
		{
			this.animcur.setframe(2);
		}
		
		this.lightpower -= time*this.lightpowerdecrement;
		if (this.lightpower <= 0)
		{
			this.lightpower = 0;
			if (this.alive)
			{
				this.audioScream.play();
			}
			this.alive = false;
		}
		if (this.alive == false)
		{
			this.animcur = this.animDead;
		}
	}
	,
	draw: function()
	{
		this.animcur.draw(this.x, this.y);
	}
	,
	increaselightpower: function(value)
	{
		this.lightpower = this.lightpower + value;
		if (this.lightpower > this.maxlightpower)
		{
			this.lightpower = this.maxlightpower;
		}
	}
}
