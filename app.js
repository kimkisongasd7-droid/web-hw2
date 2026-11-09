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
const averageA = sumA / ratings.length;
console.log("A1 평균 평점:", averageA);




for (let i = 0; i < titles.length; i++) {
    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }
    if (ratings[i] >= 8.0) {
        countA++;
    }
}
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);
console.log("A3 8점 이상:", countA,  "편");

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

let bigA="";
for (let i = 0; i < titles.length; i++) {

    if (audiences[i] >= 1000000) {
        bigA = bigA + " " + titles[i];
    }
}
if(bigA === ""){
    bigA = "없음";
}
console.log("A5 관객 100만 이상:", bigA);




// ===== Part B =====

//배열 ⇒ 평균 평점
function average(list) {
    return averageBy(list, "rating")
}

//배열 ⇒ 최고 평점 객체
function best(list) {
    let top = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > top) {
            top = list[i];
        }
    }
    return top;
}

//배열, 숫자 ⇒ 새 배열
const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}




//배열, 키 이름, 참이면 내림차순 ⇒ 새 배열 
function sortBy(list, key, desc) {
    return [...list].sort((a, b) => {
        let result = 0;
        if (typeof a[key] === "string") {
            result = a[key].localeCompare(b[key]);
        } else {
            result = a[key] - b[key];
        }
        const sign = desc ? -1 : 1;
        return result * sign;
    });
}


//배열, 문자열 => 새 배열
function search(list, keyword) {
    keyword = keyword.toLowerCase();
    return list.filter(m => m.title.toLowerCase().includes(keyword));
}

//숫자나 숫자 문자열 ⇒ "1,234,567" 
function formatNumber(n) {
   return Number(n).toLocaleString("ko-KR");
}

//"2014-11-06" ⇒ 올해까지 몇 년(숫자)
function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}


const bestMovie = best(movies);
const topAudienceMovie = sortBy(movies, "audience", true)[0];



// 페이지에 한 번에 3줄 넣기
document.getElementById("out").textContent = 
  `전체 10편, 평균 평점 ${average(movies).toFixed(1)}점\n` +
  `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)\n` +
  `관객 1위 ${topAudienceMovie.title} (누적 ${formatNumber(topAudienceMovie.audience)}명)`;




// ===== Part C =====

function getList(data){
    return data.results;
}
function averageBy(list, key){
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i][key];
    }
    return sum / list.length;
}
console.log(`C1 page:${TMDB.page}, total_pages:${TMDB.total_pages}, total_results:${TMDB.total_results}, 이번응답:${getList(TMDB).length}`);
console.log(`C2 상영작 평균 평점:${averageBy(getList(TMDB), "vote_average").toFixed(1)}`);
console.log(`C4 하트 검색:${search(getList(TMDB), "하트").length}`);
console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title", "release_date", "vote_average"]);


