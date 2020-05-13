function get2DContext(id){
    let canvas=document.getElementById("demo");
    let context = canvas.getContext("2d");
    return context;
}
function dessin() {
    let context = get2DContext("demo");
    context.beginPath();
    context.arc(100,100,75,0,Math.PI*2);
    context.fillStyle = "yellow";
    context.fill();
    context.beginPath();
    context.arc(65,70,10,0,Math.PI*2);
    context.fillStyle = "black";
    context.fill();
    context.beginPath();
    context.arc(135,70,10,0,Math.PI*2);
    context.fillStyle = "black";
    context.fill();
    context.beginPath();
    context.arc(99,120,35,0,Math.PI);
    let gradient = context.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5" ,"blue");
    gradient.addColorStop("1.0", "red");
    context.strokeStyle = gradient;
    context.lineWidth = 6;
    context.stroke();
    ecrit(context);
}

function ecrit(ctx) {
    ctx.textBaseLine = "middle";
    ctx.strokeStyle = "grey";
    ctx.font = "20px sans-serif"
    ctx.fillText("Hello canvas!",45,200);
}

function displayDateTime() {
    const event = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById("jour").innerHTML = event.toLocaleDateString('fr-FR', options);
document.getElementById("heure").innerHTML = event.toLocaleTimeString('fr-FR');
}

function displayDecrementSeconds() {
    let temps = 5000;
    document.getElementById("temp").innerHTML = temps/1000 - (setTimeout(dessin,temps)-1) ;
    if (value < 0 ) {
        document.getElementById("temp").innerHTML = "Le text est affichée";
    }
    
}


function main() {
    setInterval(displayDateTime,1000);
    setInterval(displayDecrementSeconds,1000);
    setInterval(clearInterval(dessin),1000);
}

main();