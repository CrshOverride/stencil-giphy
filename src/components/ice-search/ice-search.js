"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@stencil/core");
var IceSearch = /** @class */ (function () {
    function IceSearch() {
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    IceSearch.prototype.handleChange = function () {
    };
    ;
    IceSearch.prototype.handleClick = function () {
    };
    ;
    IceSearch.prototype.handleSubmit = function () {
    };
    ;
    IceSearch.prototype.render = function () {
        return (h("div", { "class": 'ui middle aligned center aligned grid' },
            h("div", { "class": 'column' },
                h("h1", { "class": 'ui inverted header' }, "Giphy Search - Relay Style"),
                h("form", { "class": 'ui large form', onSubmit: this.handleSubmit },
                    h("div", { "class": 'ui inverted stacked segment' },
                        h("div", { "class": 'field' },
                            h("div", { "class": 'ui massive icon input' },
                                h("input", { type: 'text', value: this.searchTerm, onChange: this.handleChange, placeholder: 'I can haz Giphy???' }))),
                        h("div", { "class": 'ui massive inverted green submit animated fade button', onClick: this.handleClick },
                            h("div", { "class": 'visible content' }, "Do I Feel Lucky?"),
                            h("div", { "class": 'hidden content' }, "Well, do ya, punk?")))))));
    };
    __decorate([
        core_1.Prop()
    ], IceSearch.prototype, "searchTerm");
    IceSearch = __decorate([
        core_1.Component({
            tag: 'ice-search',
            styleUrl: 'ice-search.scss'
        })
    ], IceSearch);
    return IceSearch;
}());
exports.IceSearch = IceSearch;
