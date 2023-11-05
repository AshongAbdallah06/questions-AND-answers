let time = document.querySelector('.time');
let minutes = document.querySelector('.minutes');
let second = document.querySelector('.second');

let seconds = document.querySelector('.seconds');


let intervalId;
function startTime() {
        if (second.innerHTML <= 0) {
            intervalId = setInterval(() => {
                second.innerHTML--
                if (minutes.innerHTML > 0 && second.innerHTML < 0) {
                    minutes.innerHTML--

                    second.innerHTML = 59
                }
                
                
                if (second.innerHTML > 9 && seconds.innerHTML < 9) {
                    seconds.innerHTML = ''
                } else {
                    seconds.innerHTML = 0
                }

                if 
                    (minutes.innerHTML === '0' && seconds.innerHTML === '0' && second.   innerHTML === '0') {
                        clearInterval(intervalId)
                        // document.querySelector('.message').innerHTML = "Time's Up"

                        document.body.innerHTML = `
                            <div class="overlay">
                                <div class="time"> 
                                    Time's Up 
                                </div>
                                <div class="score-container">You got <span class="score">${score.innerHTML}</span> out of 20</div>
                                <div class="button">
                                <a href="Q&A.html">
                                    <button class="start">Play Again</button>
                                </div>
                            </div>`
                }

            }, 1000)
        } 

}

let startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
    startTime();

    let overlay = document.querySelector('.overlay');

    overlay.classList.remove('overlay')


    time.classList.add('Time');
    document.querySelector('.in').innerHTML = `
        <div class="time">
            <span class="minutes"></span><span class="seconds"></span><span class="second"></span>
        </div>`

    document.querySelector('.button').innerHTML = ''
})


let score = document.querySelector('.score');

let answer = '';


let optionA = document.querySelector('.option-A');
let optionB = document.querySelector('.option-B');
let optionC = document.querySelector('.option-C');
let optionD = document.querySelector('.option-D');


optionA.addEventListener('click', () => {
    optionA.classList.add('Clicked');
    optionB.classList.remove('Clicked');
    optionC.classList.remove('Clicked');
    optionD.classList.remove('Clicked');

    answer = 'A'

})

optionB.addEventListener('click', () => {
    optionA.classList.remove('Clicked');
    optionB.classList.add('Clicked');
    optionC.classList.remove('Clicked');
    optionD.classList.remove('Clicked');

    answer = 'B'
})

optionC.addEventListener('click', () => {
    optionA.classList.remove('Clicked');
    optionB.classList.remove('Clicked');
    optionC.classList.add('Clicked');
    optionD.classList.remove('Clicked');

    answer = 'C'

})

optionD.addEventListener('click', () => {
    optionA.classList.remove('Clicked');
    optionB.classList.remove('Clicked');
    optionC.classList.remove('Clicked');
    optionD.classList.add('Clicked');

    answer = 'D'

})



let answerInput = document.querySelector('.answer');

let questionNumber = document.querySelector('.question-no');
let pageNumber = document.querySelector('.page-no');


let submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', () => {

    checkOption();


    secondQuestion();
    // fifteenthQuestion();

    answer = ''

    if (answerInput.innerHTML === 'Correct') {
        score.innerHTML++
    }
})



function chooseOption() {
    let optionA2 = document.querySelector('.option-A2');
    let optionB2 = document.querySelector('.option-B2');
    let optionC2 = document.querySelector('.option-C2');
    let optionD2 = document.querySelector('.option-D2');


    optionA2.addEventListener('click', () => {
        optionA2.classList.add('Clicked');
        optionB2.classList.remove('Clicked');
        optionC2.classList.remove('Clicked');
        optionD2.classList.remove('Clicked');

        answer = 'A'

    })

    optionB2.addEventListener('click', () => {
        optionA2.classList.remove('Clicked');
        optionB2.classList.add('Clicked');
        optionC2.classList.remove('Clicked');
        optionD2.classList.remove('Clicked');

        answer = 'B'
    })

    optionC2.addEventListener('click', () => {
        optionA2.classList.remove('Clicked');
        optionB2.classList.remove('Clicked');
        optionC2.classList.add('Clicked');
        optionD2.classList.remove('Clicked');

        answer = 'C'

    })

    optionD2.addEventListener('click', () => {
        optionA2.classList.remove('Clicked');
        optionB2.classList.remove('Clicked');
        optionC2.classList.remove('Clicked');
        optionD2.classList.add('Clicked');

        answer = 'D'

    })

}





function secondQuestion() {
    if (pageNumber.innerHTML = '1/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '2. Who won the 2014 World Cup Golden Ball?'
            A.innerHTML = `<div class="options2 option-A2">A. Thomas Muller</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Kylian Mbappe</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Lionel Messi</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Arjen Robben</div>`

            chooseOption();

            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit2">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton2 = document.querySelector('.submit2')
                submitButton2.addEventListener('click', () => {
                    checkOption();  
                    
                    thirdQuestion();


                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '2/20'
        }, 1000);
    } 
} 



function thirdQuestion() {
    if (pageNumber.innerHTML = '2/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '3. Who played the character Damon in the CW Vampire Diaries?'
            A.innerHTML = `<div class="options2 option-A2">A. Paul Wesley</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Joseph Morgan</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Dwayne Johnson</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Ian Somerhalder</div>`

            chooseOption();

            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit3">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton3 = document.querySelector('.submit3')
                submitButton3.addEventListener('click', () => {
                    checkOption();   
                    
                    fourthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '3/20'
        }, 1000);
    } 
} 


function fourthQuestion() {
    if (pageNumber.innerHTML = '3/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '4. What is the tallest mountain in the world?'
            A.innerHTML = `<div class="options2 option-A2">A. Kilmanjaro</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Mountain Afajato</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Mountain Everest</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Mount Sinai</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit4">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton4 = document.querySelector('.submit4')
                submitButton4.addEventListener('click', () => {
                    checkOption();   
                    
                    fifthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '4/20'
        }, 1000);
    } 
} 



function fifthQuestion() {
    if (pageNumber.innerHTML = '4/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '5. What is the chemical symbol for the element Gold?'
            A.innerHTML = `<div class="options2 option-A2">A. Gd</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Au</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Hg</div>`
            D.innerHTML = `<div class="options2 option-D2">D. K</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit5">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton5 = document.querySelector('.submit5')
                submitButton5.addEventListener('click', () => {
                    checkOption();   
                    
                    sixthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '5/20'
        }, 1000);
    } 
} 



function sixthQuestion() {
    if (pageNumber.innerHTML = '5/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '6. Who is the author of the Harry Potter book series?'
            A.innerHTML = `<div class="options2 option-A2">A. Albert Einstein</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Stephen King</div>`
            C.innerHTML = `<div class="options2 option-C2">C. JK Rowlings</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Jacqueline Woodson</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit6">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton6 = document.querySelector('.submit6')
                submitButton6.addEventListener('click', () => {
                    checkOption();   
                    
                    seventhQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '6/20'
        }, 1000);
    } 
} 



function seventhQuestion() {
    if (pageNumber.innerHTML = '6/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '7. What is the largest ocean on Earth?'
            A.innerHTML = `<div class="options2 option-A2">A. Pacific Ocean</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Atlantic Ocean</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Indian Ocean</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Arctic Ocean</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit7">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton7 = document.querySelector('.submit7')
                submitButton7.addEventListener('click', () => {
                    checkOption();   
                    
                    eightQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '7/20'
        }, 1000);
    } 
} 


function eightQuestion() {
    if (pageNumber.innerHTML = '7/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '8. How many bones are there in the human body?'
            A.innerHTML = `<div class="options2 option-A2">A. 350</div>`
            B.innerHTML = `<div class="options2 option-B2">B. 185</div>`
            C.innerHTML = `<div class="options2 option-C2">C. 200</div>`
            D.innerHTML = `<div class="options2 option-D2">D. 206</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit8">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton8 = document.querySelector('.submit8')
                submitButton8.addEventListener('click', () => {
                    checkOption();   
                    
                    ninethQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '8/20'
        }, 1000);
    } 
} 



function ninethQuestion() {
    if (pageNumber.innerHTML = '8/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '9. Which planet is known as the "Red Planet"?'
            A.innerHTML = `<div class="options2 option-A2">A. Pluto</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Saturn</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Mars</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Jupiter</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit9">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton9 = document.querySelector('.submit9')
                submitButton9.addEventListener('click', () => {
                    checkOption();   
                    
                    tenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '9/20'
        }, 1000);
    } 
} 



function tenthQuestion() {
    if (pageNumber.innerHTML = '9/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '10. What is the largest species of shark?'
            A.innerHTML = `<div class="options2 option-A2">A. White Shark</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Whale Shark</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Great White Shark</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Great Shark</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit10">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton10 = document.querySelector('.submit10')
                submitButton10.addEventListener('click', () => {
                    checkOption();   
                    
                    eleventhQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '10/20'
        }, 1000);
    } 
} 



function eleventhQuestion() {
    if (pageNumber.innerHTML = '10/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '11. Which country is famous for the Great Wall?'
            A.innerHTML = `<div class="options2 option-A2">A. Greece</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Russia</div>`
            C.innerHTML = `<div class="options2 option-C2">C. United States of America</div>`
            D.innerHTML = `<div class="options2 option-D2">D. China</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit11">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton11 = document.querySelector('.submit11')
                submitButton11.addEventListener('click', () => {
                    checkOption();   
                    
                    twelvethQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '11/20'
        }, 1000);
    } 
} 



function twelvethQuestion() {
    if (pageNumber.innerHTML = '11/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '12. Who invented the telephone?'
            A.innerHTML = `<div class="options2 option-A2">A. Alexander Graham Bell</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Isaac Newton</div>`
            C.innerHTML = `<div class="options2 option-C2">C. William Shakespare</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Isabella De Rosa</div>`

            chooseOption();


            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit12">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton12 = document.querySelector('.submit12')
                submitButton12.addEventListener('click', () => {
                    checkOption();   
                    
                    thirteenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '12/20'
        }, 1000);
    } 
} 


function thirteenthQuestion() {
    if (pageNumber.innerHTML = '12/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '13. Who painted the famous artwork "The Last Supper"?'
            A.innerHTML = `<div class="options2 option-A2">A. Salvador Dali</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Leonardo da Vinci</div>`
            C.innerHTML = `<div class="options2 option-C2">C. William Shakespare</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Mona Lisa</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit13">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton13 = document.querySelector('.submit13')
                submitButton13.addEventListener('click', () => {
                    checkOption();   
                    
                    fourteenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '13/20'
        }, 1000);
    } 
} 



function fourteenthQuestion() {
    if (pageNumber.innerHTML = '13/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '14. How many continents are there in the world?'
            A.innerHTML = `<div class="options2 option-A2">A. 7</div>`
            B.innerHTML = `<div class="options2 option-B2">B. 5</div>`
            C.innerHTML = `<div class="options2 option-C2">C. 8</div>`
            D.innerHTML = `<div class="options2 option-D2">D. 6</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit14">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton14 = document.querySelector('.submit14')
                submitButton14.addEventListener('click', () => {
                    checkOption();   
                    
                    fifteenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '14/20'
        }, 1000);
    } 
} 




function fifteenthQuestion() {
    if (pageNumber.innerHTML = '14/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '15. Select the "odd" one out'
            A.innerHTML = `<div class="options2 option-A2">A. Africa, Antarctica, Asia</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Europe, North America, Asia</div>`
            C.innerHTML = `<div class="options2 option-C2">C. South America, Africa, Antartica</div>`
            D.innerHTML = `<div class="options2 option-D2">D. USA, Asia, Europe</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit15">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton15 = document.querySelector('.submit15')
                submitButton15.addEventListener('click', () => {
                    checkOption();   
                    
                    sixteenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '15/20'
        }, 1000);
    } 
} 



function sixteenthQuestion() {
    if (pageNumber.innerHTML = '15/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = '16. Who was the first Barcelona coach to ever win the treble?'
            A.innerHTML = `<div class="options2 option-A2">A. Johan Cryuff</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Frank Rijkard</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Pep Guardiola</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Luis Enrique</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit16">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton16 = document.querySelector('.submit16')
                submitButton16.addEventListener('click', () => {
                    checkOption();   
                    
                    seventeenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '16/20'
        }, 1000);
    } 
} 



function seventeenthQuestion() {
    if (pageNumber.innerHTML = '16/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = "17. Which professional football player has the most Balon D'ors?"
            A.innerHTML = `<div class="options2 option-A2">A. Cristiano Ronaldo</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Pele</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Lionel Messi</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Ronaldinho</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit17">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton17 = document.querySelector('.submit17')
                submitButton17.addEventListener('click', () => {
                    checkOption();   
                    
                    eighteenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '17/20'
        }, 1000);
    } 
} 



function eighteenthQuestion() {
    if (pageNumber.innerHTML = '17/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = "18. Which team won the first Premier League title?"
            A.innerHTML = `<div class="options2 option-A2">A. Manchester United</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Newcastle United</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Arsenal</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Birmingham</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit18">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton18 = document.querySelector('.submit18')
                submitButton18.addEventListener('click', () => {
                    checkOption();   
                    
                    nineteenthQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '18/20'
        }, 1000);
    } 
} 



function nineteenthQuestion() {
    if (pageNumber.innerHTML = '18/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = "19. Which is the only player to win the Champions League with three different clubs?"
            A.innerHTML = `<div class="options2 option-A2">A. Raul</div>`
            B.innerHTML = `<div class="options2 option-B2">B. Luis Figo</div>`
            C.innerHTML = `<div class="options2 option-C2">C. Zinedine Zidane</div>`
            D.innerHTML = `<div class="options2 option-D2">D. Clarence Sedorf</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit19">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton19 = document.querySelector('.submit19')
                submitButton19.addEventListener('click', () => {
                    checkOption();   
                    
                    twentiethQuestion();

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '19/20'
        }, 1000);
    } 
} 



function twentiethQuestion() {
    if (pageNumber.innerHTML = '18/20') {
        setTimeout(() => {
            let A = document.querySelector('.A');
            let B = document.querySelector('.B');
            let C = document.querySelector('.C');
            let D = document.querySelector('.D');
            questionNumber.innerHTML = "20. In which year was the first European Championship held?"
            A.innerHTML = `<div class="options2 option-A2">A. 1762</div>`
            B.innerHTML = `<div class="options2 option-B2">B. 1975</div>`
            C.innerHTML = `<div class="options2 option-C2">C. 1960</div>`
            D.innerHTML = `<div class="options2 option-D2">D. 1964</div>`

            chooseOption();



            let button = document.querySelector('.submit-container')

            button.innerHTML = `
                <img src="icons/chevron-left-solid.svg" class="back">
                <button class="submit20">Submit</button>
                <img src="icons/chevron-right-solid.svg" class="forward">`

                let submitButton20 = document.querySelector('.submit20')
                submitButton20.addEventListener('click', () => {
                    checkOption();   
                    

                    answer = ''

                    if (answerInput.innerHTML === 'Correct') {
                        score.innerHTML++
                    }
                })
            

            answerInput.innerHTML = ''
            pageNumber.innerHTML = '20/20'
        }, 1000);
    } 
} 






function finish() {
    setTimeout(() => {
        answerInput.innerHTML = `
            <button class="finish">Finish</button>`

            let finishButton = document.querySelector('.finish');
            finishButton.addEventListener('click', () => {
                clearInterval(intervalId);
                document.querySelector('.calc').innerHTML = 'Calculating marks'

                setTimeout(() => {
                    document.body.innerHTML = `
                    <div class="overlay">
                        <div class="time"> 
                            Time remaining: ${minutes.innerHTML}:${seconds.innerHTML}${second.innerHTML}
                        </div>
                        <div class="score-container">You got <span class="score">${score.innerHTML}</span> out of 20</div>
                        <div class="button">
                        <a href="Q&A.html">
                            <button class="start">Play Again</button>
                        </div>
                    </div>`
                }, 1000);
                
            })
    }, 2000);
}





function checkOption() {

    if (pageNumber.innerHTML === '1/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Correct'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '2/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answer = ''
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '3/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '4/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '5/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '6/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '7/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Correct'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '8/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '9/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '10/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'
        } else if (answer === 'B') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '11/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'
        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '12/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Correct'
        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '13/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'
        } else if (answer === 'B') {
            answerInput.innerHTML = 'Correct'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '14/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Correct'
        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'        
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'
        }
    } else if (pageNumber.innerHTML === '15/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'    
            
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect' 
            
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Correct'    

        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'

        }
    } else if (pageNumber.innerHTML === '16/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'    
            
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Correct' 
            
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'    

        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'

        }
    } else if (pageNumber.innerHTML === '17/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Correct'    
            
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect' 
            
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'    

        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'

        }
    } else if (pageNumber.innerHTML === '18/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Correct'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'    
            
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect' 
            
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'    

        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'

        }
    } else if (pageNumber.innerHTML === '19/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'    
            
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Incorrect' 
            
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Correct'    

        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'

        }
    } else if (pageNumber.innerHTML === '20/20') {
        if (answer === 'A') {
            answerInput.innerHTML = 'Incorrect'

            finish();
        } else if (answer === 'B') {
            answerInput.innerHTML = 'Incorrect'    
            
            finish();
        } else if (answer === 'C') {
            answerInput.innerHTML = 'Correct' 
            
            finish();
        } else if (answer === 'D') {
            answerInput.innerHTML = 'Incorrect'    

            finish();
        } else if (answer === '') {
            answerInput.innerHTML = 'You did not choose an option'

            finish();
        }
    }
}

// BADC













