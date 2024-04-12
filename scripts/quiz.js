const used = []
let question = 0
const names = ["Radość", "Smutek", "Strach", "Złość", "Zaskoczenie", "Pogarda", "Zaskoczenie"]
const files = ["image.jpg", "sad.jpg", "scared.jpg", "angry.jpg","zaskoczenie.png", "contempt.jpg", "disgust.jpg"]

const correct = []

function Start_quiz(){

    if(question == 5){
        const pkt = correct.length
        document.querySelector(".score").style.display = "block"
        document.querySelector(".scoreBg").style.display = "block"
        document.querySelector(".result").innerText = `${pkt}/5`

        if(pkt == 5){
            document.querySelector(".comment").innerText = "Wspaniały wynik, jesteśmy bardzo dumni"
            return
        }

        if(pkt > 2){
            document.querySelector(".comment").innerText = "Dobrze ci poszło, ale zachęcamy do dalejszej pracy"
        }else{
            document.querySelector(".comment").innerText = "Niezbyt dobrze ci poszło, ale razem z naszą pomocą kolejny raz bedzie znacznie lepszy"
        }



        return
    }

    round()

}


function round(){
    question++
    document.querySelector("#header > h3").innerText = `Pytanie: ${question} / 5`
    const image = Math.floor(Math.random() * 7)
    const options = [names[image]]
    document.querySelector(".imageInner").src = `../materials/${files[image]}`

    while(options.length != 4){
        const i = Math.floor(Math.random() * 7)
        if(!options.includes(names[i])){
            options.push(names[i])
        }
    }


    const rand = [0,1,2,3]
    let index = rand[Math.floor(Math.random()*rand.length)];
    document.querySelectorAll(".r1")[index].setAttribute("win", true)
    document.querySelectorAll(".r1")[index].innerText = options[0]
    rand.splice(rand.indexOf(index), 1);
    options.shift()

    while(rand.length !=0){


        let index = rand[Math.floor(Math.random()*rand.length)];

        rand.splice(rand.indexOf(index), 1);
        
        let item = options[Math.floor(Math.random()*options.length)];
        
            document.querySelectorAll(".r1")[index].setAttribute("win", false)
        options.splice(options.indexOf(item), 1);
        
        document.querySelectorAll(".r1")[index].innerText = item
    }

}

function isWin(e){
    if(e.srcElement.getAttribute("win") == "true"){
        correct.push(question)
        e.srcElement.setAttribute("win", false)
    }
    Start_quiz()
}