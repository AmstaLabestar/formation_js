const input = document.getElementById('tache');
const button = document.getElementById('ajouter');
const liste = document.getElementById('liste');

button.classList.add('btn','border')
input.classList.add('input','py-2','border')

button.addEventListener('click',()=>{
    const texte = input.value.trim();

    if(texte !==''){
    const li = document.createElement('li');
    li.textContent =texte;
    // li.style.backgroundColor = 'red';
    li.classList.add('bg-light')




    const btnRemove = document.createElement('button');
    // btnRemove.textContent = "❌";
    btnRemove.className = 'btn btn-danger';
    btnRemove.innerHTML ='<i class = "bi bi-trash"></i>';
    btnRemove.onclick = ()=>li.remove();

    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    li.appendChild(btnRemove);
    liste.appendChild(li);

    input.value ='';
    input.focus();
}else{
    alert('Saissez une tache')
}
})
