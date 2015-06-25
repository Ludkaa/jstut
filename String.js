/**
 * Funkcia reverse otočí x.
 * 
 * Funkcia reverse otočí a vráti x.
 * @param {string} x slovo na otočenie
 * @return {string}
 */
function reverse (x)
{
	var z = '';
	for(var i = x.length - 1; i >= 0; i--)
	{
		z = z + x[i];
	}
	return z;
}
var x = 'LEGO';
console.log('reverse(): ' + x + ' -> ' + reverse(x))

/**
 * Funkcia mix zmieša vstupy.
 * 
 * Funkcia mix zmieša s1 a s2 dohromady.
 * @param {string} s1 slovo na zmiešanie 1
 * @param {string} s2 slovo na zmiešanie 2
 * @return {string}
 */
function mix (s1, s2)
{
	var j;
	var vystup = ''; 
	if (s1.length<s2.length)
	{
		j = s2.length;
	}
	else
	{
		j = s1.length;
	}
	for(var i=0; i < j; i++)
	{
		if(i<s1.length)
		{
			vystup = vystup + s1[i];
		}
		if(i<s2.length)
		{
			vystup = vystup + s2[i];
		}
	}
	return vystup;
}

var s1 = 'ABCDEFGHIJK';
var s2 = 'LMN';
console.log('mix(): ' + s1  + ' + ' +  s2 + ' -> ' + mix(s1, s2))
/**
 * Funkcia rot13 zašifruje vstup podľa rot13.
 *
 * @param {string} x slovo na zašifrovanie
 * @return {string}
 */
function rot13 (x)
{
	var hodnota;
	var vystup = '';
	var pole1 = 'abcdefghijklm';
	var pole2 = 'nopqrstuvwxyz';
	for( var i = 0; i<x.length; i++)
	{
		hodnota = false;
		var k = x[i];
		for( var j = 0; j<pole1.length; j++)
		{
			
			if (k===pole1[j])
			{
				vystup = vystup + pole2[j];
				hodnota = true;
			}
			if (k===pole2[j])
			{
				vystup = vystup + pole1[j];
				hodnota = true;
			}
		}
		if (hodnota === false) 
		{
			vystup = vystup + x[i];
		}
	}
	return vystup;
}
var vstup = 'hello world';
console.log('rot13(): ' + vstup + ' -> ' + rot13(vstup))
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	