document.querySelector(".submit").addEventListener("click", find, false);

function find(){
    let output = document.querySelector(".output");
    while (output.firstChild){
        output.removeChild(output.firstChild);
    }

    let character = document.querySelector('input[name="character"]:checked').value;
    let  len = character.length + 2;
    let number = 1;

    let text = document.querySelector(".text-part").value;
    let match = [...text.matchAll(character)];

    for(let i = 0; i<match.length; i++){
        let p = document.createElement("p");
        let str = text.slice(match[i].index + len, text.indexOf("\n", match[i].index));
        p.innerHTML = `${number}) ${str}`;
        output.appendChild(p);
        number++;
    }
}