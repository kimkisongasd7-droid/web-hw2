// ===== Part A =====

const sumA=0;
const maxA=0;
for(let i = 0; i < titles.length; i++){
    sumA = sumA + ratings[i];
}

console.log("평균 평점: " + (sumA / titles.length).toFixed(2));

for(let i = 0; i < titles.length; i++){
    if(ratings[i] > ratings[maxA]){
        maxA = i;
    }
}