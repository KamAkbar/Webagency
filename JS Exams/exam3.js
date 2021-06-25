function power(x, y)
{
    let res = 1;
 
    while (y > 0) {
        if (y & 1)
            res = res * x;

        y = y >> 1;
        x = x * x; 
    }
return res;
