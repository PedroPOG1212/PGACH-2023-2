
function funcionuno(n) 
{
    const sol = [0, 1];
    for (let i = 2; i <= n; i++) 
    {
        sol[i] = sol[i - 1] + sol[i - 2];
    }
    let solucion = sol[n];
    let dato = document.getElementById("Fibo");
    dato.innerHTML = solucion;
}

function funciondos(n) 
{
    if (n <= 1) 
    {
        return n;
    }
    let prev2 = 0;
    let prev1 = 1;
    let c = 0;
    for (let i = 2; i <= n; i++) 
    {
        c = prev1 + prev2;
        prev2 = prev1;
        prev1 = c;
    }
    let dato = document.getElementById("Fibo");
    dato.innerHTML = c;
}