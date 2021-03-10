const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
    `
<div class="alert-banner">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
       
      <p class="alert-banner-close">   X</p>
       
    </div>
`


alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';

    }
});


const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("please fill out user field and message fields before sending");
    } else if (user.value === "") {
        alert("please fill out user field");
    } else if (message.value === "") {
        alert("please fill out message field");
    } else {
        alert(`Message successfully sent to:`)
    }
});