import { Component, OnInit } from '@angular/core';
import { Router, AtivatedRoute, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-component-overview',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit{
    name: any;

    consturctor(
        private route: ActivatedRoute,
    ){}

    ngOnInit(): void{
        this.route.queryParams.subscribe (params => {
            this.name = params['name'];
        });
    }
}