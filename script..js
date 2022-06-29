function teste() {
    // let email = document.getElementById("inputEmail14").value;
    // console.log(`Èmail: ${email}`);

    const form = document.getElementsByClassName('row g-3')[0];
    const data = new FormData(form);
    const formJSON = Object.fromEntries(data.entries());

    console.log(formJSON);

}


