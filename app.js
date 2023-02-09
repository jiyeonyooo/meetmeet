//현재 날짜 불러오고 월 정보 html에 연결
const now = new Date();
const month = now.getMonth()+1;
//console.log(month);
const calenderMonth = document.querySelector("#month");
calenderMonth.innerText = month;


