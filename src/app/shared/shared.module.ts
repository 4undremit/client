import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CardComponent, TileComponent, HeaderComponent, FooterComponent } from "./layout";


@NgModule({
    declarations: [CardComponent, TileComponent, HeaderComponent, FooterComponent],
    imports: [CommonModule, RouterModule],
    exports: [CommonModule, RouterModule, CardComponent, TileComponent, HeaderComponent, FooterComponent]
})

export class SharedModule { }