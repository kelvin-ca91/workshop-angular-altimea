import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  constructor() { }

  list() {
    return [
      { title: "GorIllAz mOvie", description: "" },
      { title: "Iron Man", description: "" },
      { title: "Avengers", description: "" },
      { title: "Death Note", description: "" },
      { title: "Evangelion", description: "" }
    ]
  }

}
