
let insert=document.querySelector(".insert")
window.addEventListener("keydown",(e)=>{
    // console.log(e)
    insert.innerHTML=`
    <div class="table">
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.Code}</td>
      </tr>
    </table>
    </div>
     
    `
})