const used = []
let question = 0
const names = ["Radość", "Smutek", "Strach", "Złość"]

const correct = []

function Start_test(){
    const nums = [10, 6, 6, 2]
    const folder = Math.floor(Math.random() * 4)
    const img = Math.floor(Math.random() * nums[folder])

    
    if(question == 10){
        const pkt = correct.length
        document.querySelector(".score").style.display = "block"
        document.querySelector(".scoreBg").style.display = "block"
        document.querySelector(".result").innerText = `${pkt}/10`

        if(pkt == 10){
            document.querySelector(".comment").innerText = "Wspaniały wynik, jesteśmy bardzo dumni"
            return
        }

        if(pkt > 6){
            document.querySelector(".comment").innerText = "Dobrze ci poszło, ale zachęcamy do dalejszej pracy"
        }else{
            document.querySelector(".comment").innerText = "Niezbyt dobrze ci poszło, ale razem z naszą pomocą kolejny raz bedzie znacznie lepszy"
        }
        insert(db,"training_session_result",)


        return
    }

    if(!used.includes(`${folder}${img}`)){
        used.push(`${folder}${img}`)
        document.querySelector(`#bnt${folder}`).setAttribute("win", true)
        
        question++
        document.querySelector("#header > h3").innerText = `Pytanie: ${question} / 10`
        image(folder, img)
    }else{
        Start_test()
    }
    
}
function image(winner,emo2){
    const picture = document.querySelector(".emotion2")
    picture.src= '../materials/emocje2/'+winner+"/"+emo2+".png"
    
}





// tablica=[happy - good][sad - good][fear - good][angry - good][happy - bad][sad - bad][fear - bad][angry - bad]
let points = [] // [0,0,0,0,0,0,0,0]
let totalQ = [] //[0,0,0,0]
var eNum = 4 // number of emotions

function isWin(e) {

    if(e.srcElement.getAttribute("win") == "true"){
        correct.push(question)
        e.srcElement.setAttribute("win", false)
    }
    Start_test()
    //wywołanie funkcji losującej
    // randEmo(numbers_before)
}


function checkWin(guess,array_win){
    var w = array_win

    if (guess==winner){
        points[guess]+=1
        totalQ[guess]+=1
    }else{
        points[guess+eNum]+=1
        totalQ[guess]+=1
    }
}


var photo = document.getElementById("photo")
// photo.innerHTML = "<img src='"+emo+"/"+emo2+"'>" //wyświetlenie zdjeci