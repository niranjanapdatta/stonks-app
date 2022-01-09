import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trivia } from '../models/trivia';
import { TriviaService } from '../services/trivia.service';

@Component({
  selector: 'app-trivia-list',
  templateUrl: './trivia-list.component.html',
  styleUrls: ['./trivia-list.component.css']
})
export class TriviaListComponent implements OnInit {

  trivias: Trivia[] | undefined;

  constructor(
    private triviaService: TriviaService
    ) { }

  ngOnInit(): void {
    this.triviaService.getTrivias().subscribe((res) => {
      this.trivias = res;
      if(this.trivias != undefined)
        for(let trivia of this.trivias)
          if(trivia.description != undefined && trivia.description.length > 30)
            trivia.descriptionForDisplay = trivia.description.slice(0, 400) + ".........";
    });
  }

}
