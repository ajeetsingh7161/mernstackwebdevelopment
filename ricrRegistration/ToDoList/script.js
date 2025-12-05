function AddTask(){
    const task = document.getElementById("NewTask").value;

    console.log(task);

   if(){
     const l = document.createElement("li");
    l.classList.add("p-2","d-flrx","align-items-center","border-bottom");

    const d=document.createElement("button");
    d.classList.add("w-75");
    d.innerText = task;

    const b= document.createElement("button");
    b.classList.add("btn","btn-danger","ms-3");
    b.innerHTML = '<i class="bi bi-trash"></i> Delete';
    b.onclick= () =>{
        l.remove();
    }

    b.innerText="Delete"

    const i= document.createElement("i");
    i.classList.add("bi","bi-tresh");




    b.appendChild(i);
    b.appendChild(s);

    l.appendChild(d);
    l.appendChild(b);


    document.getElementById("TaskList").appendChild(l);

    document.getElementById(NewTask),value="";
   }

}