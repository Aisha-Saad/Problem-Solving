for (i = 0; i <= 10; i++) {
  document.getElementById("result").innerHTML += `multiplication of ${i} <br> `;

  for (j = 1; j <= 10; j++) {
    document.getElementById("result").innerHTML += ` <br> ${i} x ${j}=${
      i * j
    } <br>`;
  }

  document.getElementById("result").innerHTML += `<hr>`;
}
