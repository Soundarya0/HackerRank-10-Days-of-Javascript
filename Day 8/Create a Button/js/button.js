var clickMeButton = document.createElement('button');
clickMeButton.innerHTML = "0";
clickMeButton.id = "btn";
document.body.appendChild(clickMeButton);
btn.onClick = function() {
    btn.innerHTMl++;
}