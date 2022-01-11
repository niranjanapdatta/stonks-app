import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Trivia } from '../models/trivia';
import { TriviaService } from '../services/trivia.service';

@Component({
  selector: 'app-trivia-page',
  templateUrl: './trivia-page.component.html',
  styleUrls: ['./trivia-page.component.css']
})
export class TriviaPageComponent implements OnInit {

  trivia: Trivia = {};

  safeVideoUrl: SafeResourceUrl = "";

  constructor(
    private triviaService: TriviaService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.trivia = this.triviaService.getTriviaToBeViewed();
    if(this.trivia.video_url)
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.trivia.video_url.toString());
  }
}
