import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trivia } from '../models/trivia';
import { TriviaService } from '../services/trivia.service';

@Component({
  selector: 'app-edit-trivia-form',
  templateUrl: './edit-trivia-form.component.html',
  styleUrls: ['./edit-trivia-form.component.css']
})
export class EditTriviaFormComponent implements OnInit {

  trivia: Trivia = {};

  constructor(
    private triviaService: TriviaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.trivia = this.triviaService.getTriviaToBeEdited();
  }

  submitAction(): void {
    this.triviaService.updateTrivia(this.trivia).subscribe(res => {
      switch(res) {
      case "success": alert("Trivia has been successfully updated!");
                    this.router.navigate(['/trivia']);
                    break;
      default: alert("Oops! There was a problem while updating the trivia. Please try again later.");
                    break;
    }
    });
  }

}
