let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')




function totalCalculate() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    
}

totalCalculate()


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-400', 'text-gray')
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-gray')
    rejectedFilterBtn.classList.add('bg-blue-400', 'text-gray')


    allFilterBtn.classList.add('bg-gray-300', 'text-gray')
    interviewFilterBtn.classList.add('bg-gray-300', 'text-gray')
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-gray')




    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-gray-300', 'text-gray');
    selected.classList.add('bg-blue-400', 'text-gray')

    
    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview()
    }
    else if (id == 'all-filter-btn') {

        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
    else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected ()
    }


}




mainContainer.addEventListener('click', function(event){


    if(event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;
    const mobileFirst = parenNode.querySelector('.mobileFirst').innerText
    const reactNative = parenNode.querySelector('.reactNative').innerText
    const jobDetails = parenNode.querySelector('.jobDetails').innerText
    const status = parenNode.querySelector('.status').innerText
    const notes = parenNode.querySelector('.notes').innerText 

    parenNode.querySelector('.status').innerHTML = `<button class="bg-green-100 text-green-500 p-1 outline">interview</button>`


    const cardInfo = {
        mobileFirst,
        reactNative,
        jobDetails,
        status: '<button class="bg-green-100 text-green-500 p-1 outline">interview</button>',
        notes
    }

    const mobileExist = interviewList.find(item => item.mobileFirst == cardInfo.mobileFirst);

     
    if(!mobileExist) {
        interviewList.push(cardInfo)
    }

    rejectedList = rejectedList.filter(item=> item.mobileFirst != cardInfo.mobileFirst)
    
    totalCalculate()
    
    if (currentStatus == 'rejected-filter-btn') {
        renderRejected()
    }
    }

    else if(event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;
    const mobileFirst = parenNode.querySelector('.mobileFirst').innerText
    const reactNative = parenNode.querySelector('.reactNative').innerText
    const jobDetails = parenNode.querySelector('.jobDetails').innerText
    const status = parenNode.querySelector('.status').innerText
    const notes = parenNode.querySelector('.notes').innerText 

    parenNode.querySelector('.status').innerHTML = `<button class="bg-red-100 text-red-500 p-1 outline">rejected</button>`


    const cardInfo = {
        mobileFirst,
        reactNative,
        jobDetails,
        status: '<button class="bg-red-100 text-red-500 p-1 outline">rejected</button>',
        notes
    }

    const mobileExist = rejectedList.find(item => item.mobileFirst == cardInfo.mobileFirst);

     
    if(!mobileExist) {
        rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item=> item.mobileFirst != cardInfo.mobileFirst)

    if(currentStatus == 'interview-filter-btn'){
        renderInterview()
    }
    
    totalCalculate()
    
    }


})



function renderInterview (){
    filterSection.innerHTML = ''
    
    for(let inter of interviewList) {
        console.log(inter)
        let div = document.createElement('div');

        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
            <div class="space-y-6">
                    <div>
                        <h6 class="mobileFirst text-2xl font-semibold">${inter.mobileFirst}</h6>
                        <p class="reactNative">${inter.reactNative}</p>
                    </div>
                    <div>
                        <p class="jobDetails">${inter.jobDetails}</p>
                    </div>
                    <p class="status">${inter.status}</p>
                    <p class="notes">${inter.notes}</p>

                    <div class="flex gap-5">
                        <button class="interview-btn text-green-500 outline px-4 py-2">Interview</button>
                        <button class="rejected-btn text-red-500 outline px-4 py-2 " >Rejected</button>
                    </div>
                </div>
                


                <div>
                    <button class="delete-btn border border-gray-400 rounded-full p-1.5"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
}


function renderRejected (){
    filterSection.innerHTML = ''
    

    for(let reject of rejectedList) {
        
        let div = document.createElement('div');

        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
            <div class="space-y-6">
                    <div>
                        <h6 class="mobileFirst text-2xl font-semibold">${reject.mobileFirst}</h6>
                        <p class="reactNative">${reject.reactNative}</p>
                    </div>
                    <div>
                        <p class="jobDetails">${reject.jobDetails}</p>
                    </div>
                    <p class="status">${reject.status}</p>
                    <p class="notes">${reject.notes}</p>

                    <div class="flex gap-5">
                        <button class="interview-btn text-green-500 outline px-4 py-2">Interview</button>
                        <button class="rejected-btn text-red-500 outline px-4 py-2 " >Rejected</button>
                    </div>
                </div>
                


                <div>
                    <button class="delete-btn border border-gray-400 rounded-full p-1.5"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
}




