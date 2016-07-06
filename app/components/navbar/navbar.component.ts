import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {

    private projectName : string;

    constructor() { 
        this.projectName = "MyWebsite";
    }

    ngOnInit() { }

}