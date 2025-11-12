import { Component, OnInit } from '@angular/core';
import { QuizzComponent } from "../../components/quizz/quizz.component";

@Component({
  selector: 'app-home',
  imports: [QuizzComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
