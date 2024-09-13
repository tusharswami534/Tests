  // for Loop
  const table = document.querySelector(".container ")
  for(let i = 5 ; i <= 50 ; i = i+5 ){
     const newP = document.createElement("p");
     newP.className = "numbers"
     newP.innerHTML = i
     table.appendChild(newP);
  }
//   while Loop
  const tableData =  document.querySelector(".tablebody")
  const studentData = [
      {
      firstName : "Tushar", 
      lastName : "Swami",
      id : 534,
      fullName: function () {
      return this.firstName + " " + this.lastName;
  },
  },
      {
      firstName : "Ajay", 
      lastName : "Swami",
      id : 535,
      fullName: function () {
      return this.firstName + " " + this.lastName;
  },
  },
      {
      firstName : "Pankaj", 
      lastName : "Swami",
      id : 536,
      fullName: function () {
      return this.firstName + " " + this.lastName;
  },
  },

];
let i = 0 ;
while (i < studentData.length){
  const newTr = document.createElement("tr");

  const newTd = document.createElement("td");
  newTd.className = "text-left"
  newTr.appendChild(newTd)
  newTd.innerHTML = studentData[i].fullName();
  
  const idTd = document.createElement("td");
  idTd.className = "text-center"
  newTr.appendChild(idTd);
  idTd.innerHTML = studentData[i].id;

  tableData.appendChild(newTr);
  i++
}


// Do while loop

const cardSection = document.querySelector(".cardSection")
const cardData = [
    {
        Image : "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?ga=GA1.1.1783916411.1722415564&semt=ais_hybrid",
        cardText : "Bitcoin",
        btnTxt : "buy now",
    },
   
];
let a = 0 ;
do{
   const container = document.createElement("div");
   container.className = "max-w-[1140px] mx-auto";

   const row  = document.createElement("div");
   row.classList = "flex flex-wrap";
   container.appendChild(row)

   const col = document.createElement("div");
   col.className = "w-6/12"
   row.appendChild(col);

   const card = document.createElement("div");
   card.className = "p-3 border border-black rounded-xl"
   col.appendChild(card);

   const img = document.createElement("img");
   img.src = cardData[a].Image;
   img.alt = "images" ;
   card.appendChild(img)

   const heading = document.createElement("h1");
   heading.className = "text-3xl"
   heading.innerHTML = cardData[a].cardText;
   card.appendChild(heading);

   const cardBtn = document.createElement("button");
    cardBtn.textContent = cardData[a].btnTxt;
    
   card.appendChild(cardBtn);

   cardSection.appendChild(container)
   a++;
} 
while (a < cardData.length);
