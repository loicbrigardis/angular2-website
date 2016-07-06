import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent implements OnInit {

    private jbtHeading : string;
    private jbtText : string;
    private jbtBtnText : string;
    private jbtBtnUrl : string;

    constructor() { 
        this.jbtHeading = "My Heading";
        this.jbtText = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.";
        this.jbtBtnText = "My BTN Text";
        this.jbtBtnUrl = "#";
    }

    ngOnInit() { }

}