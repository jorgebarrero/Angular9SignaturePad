import { Injectable, Inject } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";

export interface WindowSize {
  height: number;
  width: number;
}

@Injectable()
export class AppService {
  constructor(@Inject("windowObject") private window: Window) {
    Observable.fromEvent(window, "resize")
      .auditTime(100)
      .map(
        (event) =>
          <WindowSize>{
            width: event["currentTarget"].innerWidth,
            height: event["currentTarget"].innerHeight,
          }
      )
      .subscribe((windowSize) => {
        this.windowSizeChanged.next(windowSize);
      });
  }

  readonly windowSizeChanged = new BehaviorSubject<WindowSize>(<WindowSize>{
    width: this.window.innerWidth,
    height: this.window.innerHeight,
  });
}
