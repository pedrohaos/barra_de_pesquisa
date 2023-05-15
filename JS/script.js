const barraDePesquisa = document.querySelector("#pesquisa")//<input/>
const lista = document.querySelector("#lista");//<ul></ul>
const itens = document.querySelectorAll("#lista__item");//<li><li/>


// itens.forEach((item)=>{ 
//    if(barraDePesquisa)
//    console.log(item.textContent.indexOf("o") + item.textContent)
// })

barraDePesquisa.addEventListener("input", ()=>{
      
      
       itens.forEach((item)=>{
//       if(barraDePesquisa.value == item.textContent){
//             if(item.textContent.indexOf(item.textContent)>=1){
//                   console.log("Esse item é maior 1")
//             }else if(item.textContent.indexOf(item.textContent)==0){
//                   console.log("Esse item é igual a 0")
//                   item.style.display = 'block'
//             }else if(item.textContent.indexOf(item.textContent)==-1){
//                   console.log("Esse item é igual a -1")
//                   item.style.display = 'none'
//             }
//       }

      if(barraDePesquisa.value == item.textContent){
            item.style.display = 'block'
      }else if(barraDePesquisa.value == ""){
            item.style.display = "block"
      }else{
            item.style.display = 'none'
      }
    })
})