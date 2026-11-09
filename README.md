# 실습과제 #2 : 영화 데이터를 자바스크립트로 
- 이름 / 학번 : 김기송 / 25
- 사이트 주소 : https://kimkisongasd7-droid.github.io/web-hw2/
- 사용한 API 1 : TMDB (포스터, 영화 정보)
1. <img class="poster" src="https://image.tmdb.org/t/p/w342/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg" alt="극장판 치이카와: 인어 섬의 비밀 포스터">
2. <img class="poster" src="https://image.tmdb.org/t/p/w342/w5OX3u2SpMVRU0sol0mtIaf4LSI.jpg" alt="타짜: 벨제붑의 노래 포스터">
3. <img class="poster" src="https://image.tmdb.org/t/p/w342/uL4cIrNi2uaUnWIOQQ28EVnkETG.jpg" alt="클레이페이스 포스터">
4. <img class="poster" src="https://image.tmdb.org/t/p/w342/8Qybglcd5IqksU7rNRvpvodtrpQ.jpg" alt="실낙원 포스터">
5. <img class="poster" src="https://image.tmdb.org/t/p/w342/mCUZLymzVjfYJXEON4wg8ilx2H8.jpg" alt="암살자(들) 포스터">
6. <img class="poster" src="https://image.tmdb.org/t/p/w342/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg" alt="인터스텔라 포스터">
7. <img class="poster" src="https://image.tmdb.org/t/p/w342//e7ABYg2KnI0QBBYSrLYiTljtmpd.jpg" alt="미션 임파서블 포스터">
8. <img class="poster" src="https://image.tmdb.org/t/p/w342//s2426EIW0arpjN0R0qErJfXQxZD.jpg" alt="미션 임파서블: 로그네이션">
9. <img class="poster" src="https://image.tmdb.org/t/p/w342/iNJsojTGQoOWL9f9U23jsibONVu.jpg" alt="미션 임파서블: 파이널 레코닝">
10. <img class="poster" src="https://image.tmdb.org/t/p/w342/5jnoAA74Qwb5w6B9FMvnc20n6Ie.jpg" alt="미션 임파서블: 폴아웃">
- 사용한 API 2 : KOBIS 일별 박스오피스 (기준일 2026-10-24)

## 구현 항목 체크 - [ ] (요구사항 1~6의 번호와 제목을 그대로 옮겨 적고 체크, 보너스는 이름과 캡처 파일명) 

1. [ok] Part A: data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로 
계산한 A1~A5 다섯 줄이 콘솔에 찍힘. 
2. [ok] Part B 함수 7개: movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search, 
formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과. 
3. [ok]Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로 
C1, C2, 상위 5편 표, C4가 콘솔에 찍힘. 
4. [ok]출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 <pre id="out">에 Part B 
요약 3줄(textContent 한 번). 
5. [ok]코드 품질: 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본 
그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름. 
6. [ok]제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI 
기록, 어느 파일에도 API 키 없음.


## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기) 
| 번호 | 호출 | 기대 결과 | 실제 결과 | 
|---|---|---|---| 
| 1 | formatNumber("1234567") | '1,234,567' | '1,234,567' | 
| 2 | average(movies).toFixed(1) | '7.4' | '7.4' | 
| 3 | best(movies).title | '인터스텔라' | '인터스텔라' | 
| 4 | sortBy(movies, "rating", true)[0].title  | '인터스텔라' | '인터스텔라' | 
| 5 | filterByRating(movies, 8).length  | 2 | 2 | 
| 6 | search(movies, "인터").length  | 1 | 1 | 
| 7 | yearsSince("2014-11-06") | 12 | 12 | 
| 8 |  movies[0].title  | '인터스텔라' | '인터스텔라' | 

## 어려웠던 점 3가지와 해결 
1. 자가 테스트표 6번의 경우 인터의 앞뒤에 공백을 넣고 콘솔에 입력하니 결과가 0으로 나와 한참 고생했다. 다시 공백을 지우고 돌리니 정상적인 값이 나왔다.
2. 스위치문은 분명 배웠던 내용인데 기억이 잘 나지않아 전공책을 찾아보면서 해결.
3. sortby함수 작성과정에서  [...list].sort((a, b) => ...) 앞부분에 return을 작성해야하는걸 깨닫지 못하고 계속 고민해보다 ....ai에게 질문 후 해결...

## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어) 
1. AI (제미나이)
2. c전공책 스위치문

## 생성형 AI 사용 내역 (없으면 "없음") - 질문 요지 : - 답변 요약 : - 채택 여부 : 
1.  sortby함수 작성과정에서 계속 오류가 나는 이유. : 함수가 정렬된 새로운 배열을 반환하지 않고 있다, 여기에 더해 [...list]로 복사본을 만들어서 정렬하고 있지만, 그 결과를 반환(return)하지 않아서 함수가 아무것도 돌려주지 않고 끝난다. 이에 return을 더해 값을 반환 할 필요가 있다. : 채택함
