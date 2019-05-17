// document.addEventListener('DOMContentLoaded', event => {
//     let form1 = document.getElementById("form1");
//     const input1 = document.querySelector('input[name="inputAnswer"]');
//     console.log(form1)
//     form1.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         let counter = 1;
//         let res = await fetch('/form2', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 inputAnswer: input1.value,
//                 inputUserName: 'Katrin'
//              })
//         })
 
//         const oneQuestion = await res.json();
//         console.log(oneQuestion);
//         for (let i = 0; i < oneQuestion.length; i++) {
//             if (counter < oneQuestion.length){
//             form1.innerHTML = `
//             <h3 name="question">${oneQuestion[counter]}</h3>
//             <input type="text" name="answer" placeholder="Enter your guess"><br><br>
//             <button type="submit">Submit your guess</button>`
//             }
//         }
//         counter++;
//     });
 
//  });