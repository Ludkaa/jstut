var data = [
	1,2,3,
	[
		4,5,6,
		[
			7,8,9,
		],
		10,11,12,
	],
	13,14,15
]

/**
 * Funkcia recursion má za úlohu, vypísať obsah vstupu.
 * 
 * @param {array} a Pole na vypísanie.
 * @return {int}
 */
 function recursion(a)
{
	for(var i = 0; i < a.length; i++)
	{
		if (Array.isArray(a[i]) === false )
		{
			console.log(a[i]);
		}
		if (Array.isArray(a[i]) === true )
		{
			recursion (a[i]);
		}
	}
}
//recursion (data);

/**
 * Generuje náhodné čísla.
 * 
 * Generuje náhodné čísla v rozpätí od min do max.
 * @param {int} min minimálne číslo
 * @param {int} max maximálne číslo
 * @return {int}
 */
function nahodneCislo (min,max) 
{
	var c = Math.floor(Math.random() * (max - min + 1) + min);
	return c;
}

/**
 * Generuje náhodné pole.
 * 
 * Generuje náhodné pole s viacerými úrovňami.
 * @param {int} c počiatočná úroveň
 * @return {array}
 */
function vygenerujPole(c)
{
	var pole = [];
	var cislo = 0;
	for(var i = 0; i < 10; i++)
	{
		cislo = nahodneCislo(1,2);
		if(cislo === 1)
		{
			pole.push(nahodneCislo(1,100));
		}
		else
		{
			if(c <= 5)
			{
				c = c + 1;
				pole.push(vygenerujPole(c));
			}
		}		
	}
	return pole;
}
var vPole = vygenerujPole(0) 
console.log(vPole)
console.log('//////////////////////////////////////////////////////////////////////')

/**
 * Vykresľuje zadané pole.
 * 
 * @param {array} x pole na vykreslenie
 * @param {int} c počiatočná úroveň
 * @return {string}
 */
function vykresliPole(x, c)
{
	var m
	var medzera
	var p;
	var k;
	for(var i = 0; i < x.length; i++)
	{
		if (Array.isArray(x[i]) === true )
		{
			m = ''
			p = c * 4 
			k = 'm';
			for(var j = 0; j < p; j++)
			{
				m = m + k;
			}
			console.log('\n', m, '[ ')
			c = c + 1;
			vykresliPole (x[i], c)
			console.log('\n',']')
		}
		if (Array.isArray(x[i]) === false )
		{
			process.stdout.write(x[i] + ',');
		}
	}
}
console.log('[')
vykresliPole(vPole, 1);
console.log(']')
