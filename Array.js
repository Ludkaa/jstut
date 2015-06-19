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
recursion (data);