function jfunc1(){

    var name=frm.name.value
    var salary=eval(frm.salary.value)
    var performance=frm.perfom.value
    if (performance == 'A'){
        frm.bonus.value= eval(salary*0.30)
    }
    else if (performance =='B'){
        frm.bonus.value=eval(salary*0.10)
    }
    else{
        frm.bonus.value=eval(salary*0)
    }
    frm.Total.value = eval(salary) +eval(frm.bonus.value)
    // alert(frm.Total.value)
}


function jfunct2(){
    let marks=0
    if (document.querySelector('input[name="ht1"]:checked').value=="true"){
        marks+=2
    }
    if (document.querySelector('input[name="js"]:checked').value=="true"){

        marks+=2
    }
    alert("your marks is:"+ marks)
        
}

function jfunct3(){
    window.open("home.html" ,"" ,"height=400px width= 1400px")
}