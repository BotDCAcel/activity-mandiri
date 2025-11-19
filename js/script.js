function fn_ValForm() {
   
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let sMsg = "";
    const emailRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (nameInput.value.trim() === "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (emailInput.value.trim() === "") {
        sMsg += "\n* Anda belum mengisikan email";
    } 

    else if (!emailRegex.test(emailInput.value.trim())) {
        sMsg += "\n* Format email yang Anda masukkan tidak valid, harus menggunakan @gmail.com";
    }

    if (messageInput.value.trim() === "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }


    if (sMsg !== "") {
        alert("Peringatan:\n" + sMsg);
        return false; 
    } else {
        return true; 
    }
}