import { MatDialog } from "@angular/material";
import { Injectable } from "@angular/core";
import { Overlay } from "@angular/cdk/overlay";
import { DialogComponent } from "../../views/dialog/dialog.component";

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor(private dialog: MatDialog, private overlay: Overlay) {}

  openDialog(data) {
    return this.createDialog(DialogComponent, data);
  }

  private createDialog(component, data) {
    return this.dialog.open(component, {
      data,
      closeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });
  }
}
