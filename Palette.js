
var Palette = Palette || {};

Palette.BLACK = new Color(0,0,0);
Palette.DARK_GRAY = new Color(0x33, 0x33, 0x33);
Palette.GRAY = new Color(0x88, 0x88, 0x88);
Palette.LIGHT_GRAY = new Color(0xaa, 0xaa, 0xaa);
Palette.WHITE = new Color(0xff, 0xff, 0xff);
Palette.RED = new Color(0xff, 0, 0);
Palette.GREEN = new Color(0, 0xff, 0);
Palette.BLUE = new Color(0, 0, 0xff);
Palette.LIGHT_RED = new Color(0x77, 0, 0);
Palette.LIGHT_GREEN = new Color(0, 0x77, 0);

Palette.colors = [
	Palette.WHITE,
	Palette.BLACK,
	Palette.GRAY
];

Palette.worldSprites = [
new Sprite([ // 0, empty
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	], 16, 16),
	new Sprite([ // 1, brick
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,2,2,0,0,0,0,0,0,1,2,2,0,0,0,1,
		1,2,0,0,0,0,0,0,0,1,2,0,0,0,0,1,
		1,2,0,0,0,0,0,0,0,1,2,0,0,0,0,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,0,0,0,1,2,2,0,0,0,0,0,0,1,2,1,
		1,0,0,0,1,2,0,0,0,0,0,0,0,1,2,1,
		1,0,0,0,1,2,0,0,0,0,0,0,0,1,2,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,2,2,0,0,0,0,0,0,1,2,2,0,0,0,1,
		1,2,0,0,0,0,0,0,0,1,2,0,0,0,0,1,
		1,2,0,0,0,0,0,0,0,1,2,0,0,0,0,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,2,2,0,0,0,1,2,2,0,0,0,1,2,0,1,
		1,2,0,0,0,0,1,2,0,0,0,0,1,2,0,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	], 16, 16),
new Sprite([ // 2, stairs down
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,
		1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,
		1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,
		1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,
		1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,
		1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	], 16, 16),
new Sprite([ // 3, stairs up
		0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
		0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,
		0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,
		0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,
		0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,
		1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,
		1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,
		1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
		1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,
		1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	], 16, 16),
new Sprite([ // 4 solid block
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	], 16, 16),
new Sprite([ // 5 treasure chest closed
		0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
		0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,
		0,1,2,2,1,1,1,1,1,1,1,1,2,2,1,0,
		1,0,2,2,1,1,1,1,1,1,1,1,2,1,2,1,
		1,0,2,2,1,1,1,1,1,1,1,1,2,1,2,1,
		1,0,2,2,1,1,1,1,1,1,1,1,2,1,2,1,
		1,0,2,2,1,1,1,1,1,1,1,1,2,1,2,1,
		1,0,2,2,1,1,1,1,1,1,1,1,2,1,2,1,
		1,0,2,2,2,2,2,2,2,2,2,2,2,1,2,1,
		1,0,2,1,1,1,1,1,1,1,1,1,1,2,2,1,
		1,2,1,1,1,1,2,2,2,2,1,1,1,1,2,1,
		1,2,2,2,2,2,1,0,0,1,2,2,2,2,2,1,
		0,1,2,1,1,1,2,2,2,2,1,1,1,2,1,0,
		0,0,1,2,1,1,1,1,1,1,1,1,2,1,0,0,
		0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,
		0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,
	], 16, 16),
new Sprite([ // 6 treasure chest open
		0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
		0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,
		0,1,2,2,1,1,1,1,1,1,1,1,2,2,1,0,
		1,0,2,2,1,1,1,1,1,1,1,1,2,1,2,1,
		1,0,2,2,2,2,2,2,2,2,2,2,2,1,2,1,
		1,0,2,1,1,1,1,1,1,1,1,1,1,2,2,1,
		1,2,1,1,1,1,2,2,2,2,1,1,1,1,2,1,
		1,2,2,2,2,2,1,0,0,1,2,2,2,2,2,1,
		1,2,0,0,0,0,2,2,2,2,0,0,0,0,2,1,
		1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,
		1,2,0,0,0,0,0,0,0,0,0,0,0,0,2,1,
		1,2,1,0,0,0,0,0,0,0,0,0,0,1,2,1,
		0,1,2,1,1,1,1,1,1,1,1,1,1,2,1,0,
		0,0,1,2,1,1,1,1,1,1,1,1,2,1,0,0,
		0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,
		0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,
	], 16, 16),
new Sprite([ // 7 locked door
		0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
		0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,
		0,1,2,1,1,1,1,1,1,1,1,1,1,2,1,0,
		1,1,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,1,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,1,1,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,1,1,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,1,1,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,2,1,0,0,2,0,0,0,0,2,0,0,1,2,1,
		1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	], 16, 16),
];


Palette.player = new Sprite([ // player down
		0,0,0,0,2,1,1,1,1,0,1,0,0,0,0,0,
		0,0,1,1,1,2,1,1,1,1,1,1,0,0,0,0,
		0,0,0,1,2,2,1,1,1,1,2,2,1,1,0,0,
		0,1,1,1,2,0,2,1,1,2,0,2,1,0,0,0,
		0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,
		0,1,1,1,1,1,2,1,2,1,1,1,1,0,0,0,
		0,0,1,2,1,2,1,2,0,1,2,1,1,1,0,0,
		0,1,2,2,1,0,1,0,0,1,0,1,2,2,1,0,
		0,1,1,2,1,0,1,0,0,1,0,1,2,1,1,1,
		1,2,1,1,1,2,0,0,0,0,1,2,1,0,0,1,
		1,1,0,0,1,2,1,1,1,1,2,2,1,0,0,1,
		1,1,0,0,1,1,2,1,1,2,1,1,1,1,1,0,
		0,0,1,1,1,0,1,1,1,1,2,1,0,0,0,0,
		0,0,0,0,1,2,2,1,2,2,2,1,0,0,0,0,
		0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,
		0,0,0,1,1,1,1,1,2,2,1,1,1,0,0,0,
], 16, 16);



Palette.enemySprites = [
	new Sprite([ // 0, slime
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,
		0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,
		0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,
		0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,
	], 16, 16),

];









