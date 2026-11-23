let pas = "133";
let ipas = window.prompt("enter the password");

if (ipas === pas) {
    alert("welcome");
    let con = window.prompt("enter name of your country");
    switch (con) {
        case "yemen":
            document.writeln("the capital of yemen is sanaa");
            break;
        case "egypt":
            document.writeln("the capital of egypt is cairo");
            break;
        case "palestine":
            document.writeln("the capital of palestine is jerusalem");
            break;
        default:
            document.writeln("the country not in options");
    }
    document.writeln("<br>");
} else {
    alert("the password is incorrect");
}

for (let i = 0; i < 5; i++) { document.writeln(i + " "); }
    document.writeln("<br>");

    let fac = 1;
    let num = Number(window.prompt("enter num"));
    for (let i = 1; i <= num; i++) { fac *= i; }
    alert("fact of num is: " + fac);

    let x = 1;
    while (x < 5) { document.writeln(x + " "); x++; }
    document.writeln("<br>");

    let y = 5;
    do {
        document.writeln(y + " ");
        y--;
    } while (y > 0);
