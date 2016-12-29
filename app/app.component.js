"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Brunch for Angular 2';
        this.url = 'http://colin.is/blog';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        styles: ["\n    :host {\n      font-family: sans-serif;\n    }\n    header, footer, main {\n      margin: 0 1em;\n    }\n    footer {\n      margin-top: 1em;\n      border-top: 1px solid #ccc;\n      padding-top: 0.5em;\n    }\n  "],
        template: require('./app.component.html')
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map