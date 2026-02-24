let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
// console.log(rejectedCount);

const allBtnTop = document.getElementById('all-btn-top')
const interviewBtnTop = document.getElementById('interview-btn-top')
const rejectedBtnTop = document.getElementById('rejected-btn-top')

const allCardsSection = document.getElementById('allCards');
// console.log(allCardsSection.children.length);
// interviewList.push({},{})

const mainContainer = document.querySelector('main')
// console.log(mainContainer)

// const allBtnTop = document.getElementById('all-btn-top');
// allBtnTop.addEventListener('click', function(){
//     alert("click from add even")
// })

const filterSection = document.getElementById('filtered-section')

function calculateCount(){
    total.innerText =allCardsSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()

function togglestyle(id){
    allBtnTop.classList.remove('bg-blue-700', 'text-white')
    interviewBtnTop.classList.remove('bg-blue-700', 'text-white')
    rejectedBtnTop.classList.remove('bg-blue-700', 'text-white')


    allBtnTop.classList.add('bg-white', 'text-black')
    interviewBtnTop.classList.add('bg-white', 'text-black')
    rejectedBtnTop.classList.add('bg-white', 'text-black')
    
    // console.log(id);

    const selected = document.getElementById(id)
    currentStatus = id
    // console.log(selected)  

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-700', 'text-white')

    if(id == 'interview-btn-top'){
        allCardsSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview()
    }else if(id== 'all-btn-top'){
        allCardsSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }else if(id=='rejected-btn-top'){
        allCardsSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderrejected()
    }
}

mainContainer.addEventListener('click', function(event){
    
    // // console.log(event.target.parentNode.parentNode.parentNode)

    // console.log(event.target.classList.contains('interview-btn'));

    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode.parentNode;
        const companeName = parentNode.querySelector('.companeName').innerText
        const jobPosition = parentNode.querySelector('.jobPosition').innerText
        const salariTaka = parentNode.querySelector('.salariTaka').innerText
        const resultBtn = parentNode.querySelector('.resultBtn').innerText
        const cardDescribtion = parentNode.querySelector('.cardDescribtion').innerText
        // console.log(parentNode)
        // console.log(companeName)
        // console.log(companeName.innerText)

        // console.log(companeName, jobPosition,salariTaka,resultBtn,cardDescribtion)

        parentNode.querySelector('.resultBtn').innerText = 'interview'

        const cardInfo ={
        companeName, 
        jobPosition,
        salariTaka,
        resultBtn:'interview',
        cardDescribtion
        }
        // console.log(cardInfo);

        const companeExist = interviewList.find(item=> item.companeName ==  cardInfo.companeName)


        if (!companeExist) {
         interviewList.push(cardInfo)
        }
        //console.log(interviewList);

        rejectedList = rejectedList.filter(item=> item.companeName != cardInfo.companeName)

        calculateCount()

        if (currentStatus == 'rejected-btn-top'){
            renderrejected()
        }

        // renderInterview()


    }else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode.parentNode;
        const companeName = parentNode.querySelector('.companeName').innerText
        const jobPosition = parentNode.querySelector('.jobPosition').innerText
        const salariTaka = parentNode.querySelector('.salariTaka').innerText
        const resultBtn = parentNode.querySelector('.resultBtn').innerText
        const cardDescribtion = parentNode.querySelector('.cardDescribtion').innerText
        // console.log(parentNode)
        // console.log(companeName)
        // console.log(companeName.innerText)

        // console.log(companeName, jobPosition,salariTaka,resultBtn,cardDescribtion)

        parentNode.querySelector('.resultBtn').innerText = 'rejected'

        const cardInfo ={
        companeName, 
        jobPosition,
        salariTaka,
        resultBtn:'rejected',
        cardDescribtion
        }
        // console.log(cardInfo);

        const companeExist = rejectedList.find(item=> item.companeName ==  cardInfo.companeName)


        if (!companeExist) {
         rejectedList.push(cardInfo)
        }
        //console.log(interviewList);

        interviewList = interviewList.filter(item=> item.companeName != cardInfo.companeName)

        if(currentStatus == "interview-btn-top"){
            renderInterview();
        }

        calculateCount()

        // renderrejected()
    }
})

function renderInterview (){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        console.log(interview);
        
        let div = document.createElement('div');
        div.className = 'w-[100%] bg-white p-[24px] rounded-md border-1 border-gray-200 space-y-5 mb-5'
        div.innerHTML = `
        <div class="flex justify-between ">
                        <div class="space-y-5">
                            <p class="companeName text-[#002C5C] text-2xl font-bold ">${interview.companeName}</p>
                            <p class="jobPosition text-[#64748B]">${interview.jobPosition}</p>
                        </div>
                        <div class="w-[50px] h-[50px]  bg-white rounded-full border-1 border-gray-200 cursor-pointer ">
                            <i class="fa-regular fa-trash-can p-4"></i>
                        </div>
                    </div>
                    <div class="space-y-5">
                        <p class="salariTaka text-[#64748B]">${interview.salariTaka}</p>
                        <button class="resultBtn w-[113px] h-[36px] bg-green-200 p-[2px] rounded-md border-1 border-green-500">${interview.resultBtn}</button>
                        <p class="cardDescribtion">${interview.cardDescribtion}</p>
                        <div>
                            <button id="btn-top" class="interview-btn w-[100px] h-[36px] text-green-500 font-bold bg-white p-[2px] rounded-md border-1 border-green-300 cursor-pointer">Interview</button>
                            <button id="btn-top" class="rejected-btn w-[100px] h-[36px] text-red-500 font-bold bg-white p-[2px] rounded-md border-1 border-red-300 cursor-pointer">Rejected</button>
                        </div>
                    </div>
        `
        filterSection.appendChild(div)

    }
}


function renderrejected (){
    filterSection.innerHTML = ''

    for(let rejected of rejectedList){
        // console.log(rejected);
        
        let div = document.createElement('div');
        div.className = 'w-[100%] bg-white p-[24px] rounded-md border-1 border-gray-200 space-y-5 mb-5'
        div.innerHTML = `
        <div class="flex justify-between ">
                        <div class="space-y-5">
                            <p class="companeName text-[#002C5C] text-2xl font-bold ">${rejected.companeName}</p>
                            <p class="jobPosition text-[#64748B]">${rejected.jobPosition}</p>
                        </div>
                        <div class="w-[50px] h-[50px]  bg-white rounded-full border-1 border-gray-200 cursor-pointer ">
                            <i class="fa-regular fa-trash-can p-4"></i>
                        </div>
                    </div>
                    <div class="space-y-5">
                        <p class="salariTaka text-[#64748B]">${rejected.salariTaka}</p>
                        <button class="resultBtn w-[113px] h-[36px] bg-red-200 p-[2px] rounded-md border-1 border-red-500">${rejected.resultBtn}</button>
                        <p class="cardDescribtion">${rejected.cardDescribtion}</p>
                        <div>
                            <button id="btn-top" class="interview-btn w-[100px] h-[36px] text-green-500 font-bold bg-white p-[2px] rounded-md border-1 border-green-300 cursor-pointer">Interview</button>
                            <button id="btn-top" class="rejected-btn w-[100px] h-[36px] text-red-500 font-bold bg-white p-[2px] rounded-md border-1 border-red-300 cursor-pointer">Rejected</button>
                        </div>
                    </div>
        `
        filterSection.appendChild(div)

    }
}