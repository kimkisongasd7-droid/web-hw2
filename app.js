// ===== Part A =====

let sumA = 0;
let maxA = 0;
let countA = 0;

let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countbeforeA = 0;


for (let i = 0; i < titles.length; i++) {
    sumA = sumA + ratings[i];
}
const average = sumA / ratings.length;
console.log("A1 평균 평점:", average);




for (let i = 0; i < titles.length; i++) {
    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }
    if (ratings[i] >= 8.0) {
        countA++;
    }
}
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);
console.log("A3 8점 이상:", countA, + "편");

for (let i = 0; i < titles.length; i++) {
    const decade = years[i] - (years[i] % 10);
    switch (decade) {
        case 2020:
            count2020A++;
            break;
        case 2010:
            count2010A++;
            break;
        case 2000:
            count2000A++;
            break;
        default:
            countbeforeA++;
            break;
    }
}
console.log("A4 2020년대:", count2020A, "편", "2010년대:", count2010A, "편", "2000년대:", count2000A, "편", "그 이전:", countbeforeA, "편");

let millionA;
for (let i = 5; i < titles.length; i++) {
    
    if(audiences[i] >= 1000000) {
        millionA = millionA + " " + titles[i];
    }
} 
console.log("A5 관객 100만 이상:", millionA);
