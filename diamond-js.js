
var spaces = " ";
var rows = "* ";
while( rows.length < 200 )
{
    spaces += spaces; // doubles length each time
    rows += rows; // ditto
}

function diamond( n ) 
{
    n = parseInt(n,10);
    var i, s;
    // top: 1 to n
    for(i = 1; i <= n; ++i )
    {
        // write n-i spaces:
        console.log( spaces.substring(0,n-i) );
        // then write i asterisk+space sets:
        console.log( rows.substring(0,i+i) + "\n" );
    }
    // bottom: n-1 down to 1
    for(i = n-1; i >= 1; --i )
    {
        // write n-i spaces:
        console.log( spaces.substring(0,n-i) );
        // then write i asterisk+space sets:
        console.log( rows.substring(0,i+i) + "\n" );
    }
}
diamond(9);

// diamond(6);

