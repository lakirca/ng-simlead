import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  tags: any;
  private url = "http://localhost:1337/tag";

  constructor(private http: Http) {
  }
  
  getTags() {
    this.http.get(this.url).subscribe(response => {
      this.tags = response.json().tags;
    });
  }
  ngOnInit() {
    this.getTags();
  }}
