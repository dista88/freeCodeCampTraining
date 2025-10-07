/* const contoh = document.querySelector('.content h1');
document.getElementById('btn1').addEventListener('click', () => {
    contoh.textContent = 'selamat datang';
})
document.getElementById('btn2').addEventListener('click', () => {
    contoh.textContent = 'goodbye';
})

*/




 document.getElementById("btn1").addEventListener("click", () => {
    let n = parseInt(document.getElementById("input").value);
  
  
    
    let a = 1;
    let b = 1;
    let output = a + " " + b + " ";

  
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      
      a = b;
      b = c;
      output += c + " ";
    }
    document.getElementById("result").textContent = output;

  });
  
 
 
  document.getElementById("btn2").addEventListener("click", () => {
    let r = parseFloat(document.getElementById("input2").value);
    const pi = Math.PI;
    let output = 2 * pi * r;
    
    document.getElementById("result1").textContent = output.toFixed(2);

  });