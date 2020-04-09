import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = moduleId =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001358744/modules/${moduleId}/lessons`)
      .then(response => response.json())
}
