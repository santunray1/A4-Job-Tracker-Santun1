let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
// console.log(rejectedCount);

const allCardsSection = document.getElementById('allCards');
// console.log(allCardsSection.children.length);

function calculateCount(){
    total.innerText =allCardsSection.children.length
}
calculateCount()