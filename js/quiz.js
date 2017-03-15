//Quiz with different elements

function gradeTest() {
	//global variables
	var totalQuestions = 5;
	var correctAnswers = 0;
	var alertText;
	var i;
	
	//get text in q1 box; drop to lower-case to make string comparison
	var a1 = document.getElementById('q1').value.toLowerCase();
	if(a1 == 'douglas hyde') {
		correctAnswers++;
	}
	
	//iterate through all options in radio button list
	//if checked value is true, answer is correct
	var a2 = document.getElementsByName('q2');
	for(i = 0; i < a2.length; i++) {
		if(a2[i].checked) {
			if(a2[i].value == 'true') {
				correctAnswers++;
				break;
			}
		}
	}
	
	//iterate through all options in radio button list
	//if checked value is tallinn, answer is correct
	var a3 = document.getElementsByName('q3');
	for(i = 0; i < a3.length; i++) {
		if(a3[i].checked) {
			if(a3[i].value == 'tallinn') {
				correctAnswers++;
				break;
			}
		}
	}
	
	//put correct answers in new array
	//iterate through all options in check box list
	//add selected item to new array
	//sort both checked answer and correct answer arrays by same criteria
	//if both lists have same length and items at same data at same indexes,
	//then we have all the correct answers for that question
	var a4 = document.getElementsByName('q4');
	var a4answers = new Array();
	var a4right = new Array('pig','cow');
	var a4bool = true;
	
	for(i = 0; i < a4.length; i++) {
		if(a4[i].checked) {
			a4answers.push(a4[i].value);
		}
	}
	a4answers.sort();
	a4right.sort();
	if(a4answers.length == a4right.length) {
		for(i = 0; i < a4answers.length; i++) {
			if(a4answers[i] != a4right[i]) {
				a4bool = false;
				break;
			}
		}
	}
	else {
		a4bool = false;
	}
	if(a4bool == true) {
		correctAnswers++;
	}
	
	//check selected index of pull-down box for correct answer
	//indexes ALWAYS start at 0!
	var q5 = document.getElementById('q5');
	if(q5.selectedIndex == 3) {
		correctAnswers++;
	}
	
	if(correctAnswers == totalQuestions) {
		alertText = "Congratulations! You got all the questions right!";
		document.getElementById("quizresult").innerHTML = "Well student... " + alertText;
	}
	else {
		alertText = "You got " + correctAnswers + " out of " + totalQuestions + " correct!";
	}
	alert(alertText);
	printit = confirm("Would you like to print your transcript?!",'');
	if (printit) window.print();
}