const btn = document.querySelector('button')
btn.addEventListener('click',function(e){

    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if(height <=0 || isNaN(height) || height === ''){
        result.innerHTML="Plese enter a valid height "+height
    } else if(weight === '' || isNaN(weight) || weight === ''){
        result.innerHTML="Plese enter a valid weight "+weight;
    } else {
      const bmi = (weight/((height*height)/10000)).toFixed(2);
      if(bmi <18.6){
          result.innerHTML=  `Your BMI result : ${bmi} , \n You are under Weight.`
        }
      if(bmi >=18.6 && bmi <= 24.9){
          result.innerHTML=  `Your BMI result : ${bmi} , \n You are lying in normal Weight range.`
        }
      if(bmi >24.9){
          result.innerHTML=  `Your BMI result : ${bmi} , \n You are over Weight.`
        }
    }

    // console.log(document.getElementById('results'))
})

// 2nd solution
const from = document.querySelector('form')
form.addEventListener('submit',function(e){

    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if(height <=0 || isNaN(height) || height === ''){
        result.innerHTML="Plese enter a valid height "+height
    } else if(weight === '' || isNaN(weight) || weight === ''){
        result.innerHTML="Plese enter a valid weight "+weight;
    } else {
      const bmi = (weight/((height*height)/10000)).toFixed(2);
      if(bmi <18.6){
          result.innerHTML=  `Your BMI result : ${bmi} , \n You are under Weight.`
        }
      if(bmi >=18.6 && bmi <= 24.9){
          result.innerHTML=  `Your BMI result : ${bmi} , \n You are lying in normal Weight range.`
        }
      if(bmi >24.9){
          result.innerHTML=  `Your BMI result : ${bmi} , \n You are over Weight.`
        }
    }

    // console.log(document.getElementById('results'))
})
