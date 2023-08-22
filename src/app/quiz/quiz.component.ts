import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';


interface UserAnswer {
  questionId: number;
  answer: string;
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent implements OnInit {
  questions: any[] = [];
  userAnswers: any = {};
  results: { [questionId: number]: string } = {}; // To store results
  showResults = false; // Initially hide results
  quizForm: any;
  //userAnswers: { [questionId: number]: UserAnswer } = {};
  /*userAnswers = {   
    answer:''
  }*/

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe({
      next:       (response: any) => {
        console.log(response);
        this.questions = response; // Adjust this line based on your API response structure
      },
      error: (error) => {
        console.error(error);
      }

    }

    );
  }

  submitAnswers(): void {
  
    console.log("Sending user answers:", this.userAnswers); // Check the data being sent
    this.quizService.submitAnswers(this.userAnswers).subscribe({
      next: (result: any) => {
        console.log("Response:", result); // Check the response from the server
        // Handle result or display it to the user
        this.results = result; // Store the results
        this.showResults = true; // Display results after button click
      },
      error: (error: any) => {
        console.error("Error:", error);
      }
    });
  }

}
  