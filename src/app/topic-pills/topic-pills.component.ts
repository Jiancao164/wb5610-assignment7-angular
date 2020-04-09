import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  topics = [];
  courseId = ''
  moduleId = ''
  lessonId = ''
  topicId  = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      if (params.lessonId) {
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/lessons/${this.lessonId}/topics`)
          .then(response => response.json())
          .then(topics => this.topics = topics);
      }
    });
  }
}
