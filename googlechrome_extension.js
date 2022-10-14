let myLeads=[]
const input_El=document.getElementById("input-el")
const ul_El=document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const DeleteBtn_El = document.getElementById("delete-btn")
const TabBtn_El= document.getElementById("tab-btn")

if (leadsFromLocalStorage)
{
    
    myLeads=leadsFromLocalStorage
    renderLeads(myLeads)
 }
    
DeleteBtn_El.addEventListener("dblclick",function(){
    myLeads = []
    localStorage.clear
    renderLeads(myLeads)

})
TabBtn_El.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow : true}, function(tabs){
        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
    
})







const input_Btn = document.getElementById("input-btn")

input_Btn.addEventListener("click", function(){
    
    myLeads.push(input_El.value)
    
    myLeads=JSON.stringify(myLeads)
    localStorage.setItem("myLeads",myLeads)
    input_El.value=""
    myLeads=JSON.parse(myLeads)
    renderLeads(myLeads)
    
})

function renderLeads(leads){
    let listItems=""
    for( let i=0;i<leads.length;i++){
        listItems +=`
        <li>
            <a href ='${leads[i]}' target='_blank'>
                ${leads[i]}
            </a>
        </li>`
    }
    //console.log(listItems)
    ul_El.innerHTML=listItems
    
}



