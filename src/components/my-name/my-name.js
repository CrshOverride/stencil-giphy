var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from '@stencil/core';
let MyName = class MyName {
    render() {
        return (React.createElement("div", null,
            "Hello, my name is ",
            this.match.params.first,
            " ",
            this.match.params.last));
    }
};
__decorate([
    Prop()
], MyName.prototype, "first", void 0);
__decorate([
    Prop()
], MyName.prototype, "last", void 0);
__decorate([
    Prop()
], MyName.prototype, "match", void 0);
MyName = __decorate([
    Component({
        tag: 'my-name',
        styleUrl: 'my-name.scss'
    })
], MyName);
export { MyName };
