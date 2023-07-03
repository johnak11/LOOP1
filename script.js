let scores=[100, 58, 55, 10, 48, 50];
let newScores=[];
    for (let i=0; i < scores.length; i++) {
        if (newScores[i]= scores[i] -10) {
          document.getElementById('part1').innerHTML= newScores  
        }
}

for(let j=0; j < scores.length; j++){
    if (newScores[j]= scores[j] -15) {
      document.getElementById('part2').innerHTML= newScores  
    }
    if(newScores[0]<50){
        document.getElementById('comment1').innerHTML= newScores[0] + ":" + " you are punished"
    }else{
        document.getElementById('comment1').innerHTML = newScores[0] + ":" + " you have escaped"
    }
    if(newScores[1]<50){
        document.getElementById('comment2').innerHTML= newScores[1] + ":" + " you are punished"
    }else{
        document.getElementById('comment2').innerHTML = newScores[1] + ":" + " you have escaped"
    }
    if(newScores[2]<50){
        document.getElementById('comment3').innerHTML= newScores[2] + ":" + " you are punished"
    }else{
        document.getElementById('comment3').innerHTML = newScores[2] + ":" + " you have escaped"
    }
    if(newScores[3]<50){
        document.getElementById('comment4').innerHTML= newScores[3] + ":" + " you are punished"
    }else{
        document.getElementById('comment4').innerHTML = newScores[3] + ":" + " you have escaped"
    }
    if(newScores[4]<50){
        document.getElementById('comment5').innerHTML= newScores[4] + ":" + " you are punished"
    }else{
        document.getElementById('comment5').innerHTML = newScores[4] + ":" + " you have escaped"
    }
    if(newScores[5]<50){
        document.getElementById('comment6').innerHTML= newScores[5] + ":" + " you are punished"
    }else{
        document.getElementById('comment6').innerHTML = newScores[5] + ":" + " you have escaped"
    }
    // if(newScores[j]=50){
    //     document.getElementById('comment7').innerHTML= newScores[j] + ":" + " you have passed"
    // }else{
    //     document.getElementById('comment7').innerHTML = newScores[j] + ":" + " you are punished"
    // }
}

