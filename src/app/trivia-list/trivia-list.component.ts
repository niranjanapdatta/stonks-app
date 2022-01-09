import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trivia } from '../models/trivia';
import { User } from '../models/user';
import { TriviaService } from '../services/trivia.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-trivia-list',
  templateUrl: './trivia-list.component.html',
  styleUrls: ['./trivia-list.component.css']
})
export class TriviaListComponent implements OnInit {

  trivias: Trivia[] | undefined;

  user: User = {};

  constructor(
    private triviaService: TriviaService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.triviaService.getTrivias().subscribe((res) => {
      this.trivias = res;
      if(this.trivias != undefined)
        for(let trivia of this.trivias)
          if(trivia.description != undefined)
            if(trivia.description.length > 400)
              trivia.descriptionForDisplay = trivia.description.slice(0, 400) + ".........";
            else trivia.descriptionForDisplay = trivia.description;
    });
    this.user = this.userService.getUserData();
  }

  editTriviaAction(triviaToBeEdited: Trivia): void {
    this.triviaService.setTriviaToBeEdited(triviaToBeEdited);
    this.router.navigate(['/editTrivia']);
  }


}
