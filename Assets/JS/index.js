const hire = document.getElementById("hire");
hire.addEventListener("click", function(){
    const job = prompt("Kindly drop your contacts for further communication")
    if (job == null || job == ""){
        txt = "No details provided"
    }
    else {
        txt = "I will reach out shortly"

    }
    alert(txt);
})