function result(N)
{
    for (let num = 0; num < N; num++)
    {
        if (num % 3 == 0 && num % 5 == 0)
            document.write( num+ " ");
    }
}

let N = 100;
result(N);
