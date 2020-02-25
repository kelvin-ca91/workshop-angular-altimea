import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  message = {
    msg: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };
  ngOnInit(): void {
  }
}
