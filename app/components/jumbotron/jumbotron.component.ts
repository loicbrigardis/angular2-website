import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class JumbotronComponent implements OnInit {

    private jbtHeading : string;
    private jbtText : string;
    private jbtBtnText : string;
    private jbtBtnUrl : string;

    constructor() { 
        this.jbtHeading = "My Heading";
        this.jbtText = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.";
        this.jbtBtnText = "BTN LINK";
        this.jbtBtnUrl = "#";
    }

    ngOnInit() { }

}