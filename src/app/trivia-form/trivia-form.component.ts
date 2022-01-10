import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trivia } from '../models/trivia';
import { TriviaService } from '../services/trivia.service';

@Component({
  selector: 'app-trivia-form',
  templateUrl: './trivia-form.component.html',
  styleUrls: ['./trivia-form.component.css']
})
export class TriviaFormComponent implements OnInit {

  trivia: Trivia = {};

  constructor(
    private triviaService: TriviaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitAction(): void {
    this.triviaService.createTrivia(this.trivia).subscribe(res => {
      switch(res) {
      case "success": alert("Trivia has been successfully created!");
                    this.router.navigate(['/trivia']);
                    break;
      default: alert("Oops! There was a problem while creating the trivia. Please try again later.");
                    break;
    }
    });
  }

}
