System.register(["angular2/core", "../model", "../service/user", "../service/login", "angular2/router"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, model_1, user_1, login_1, router_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            LoginComponent = class LoginComponent {
                constructor(userService, loginService, router) {
                    this.userService = userService;
                    this.loginService = loginService;
                    this.router = router;
                    this.user = new model_1.User();
                    this.showLoading = false;
                    this.errorMessage = null;
                }
                onClick(event) {
                    event.preventDefault();
                    this.showLoading = true;
                    this.errorMessage = null;
                    this.userService.insert(this.user).subscribe(result => this.onLoginResult(result), error => this.onLoginError(error));
                }
                onLoginResult(result) {
                    console.log(result);
                    this.loginService.setLogin(result.user, result.token);
                    this.router.navigate(['Home']);
                }
                onLoginError(error) {
                    this.showLoading = false;
                    this.errorMessage = error._body;
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
                    providers: [user_1.UserService],
                    template: `
    
    <div class="col-md-4 col-md-offset-4" *ngIf="!showLoading">
    
    <div *ngIf="errorMessage" class="alert alert-danger" role="alert">
        {{errorMessage}}
    </div>
    
    <form ngForm>
        <div class="form-group">
            <label for="login">Login</label>
            <input type="text" class="form-control" id="login" required placeholder="Login" [(ngModel)]="user.login">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" required placeholder="Password" [(ngModel)]="user.password">
        </div>
        <div class="checkbox">
            <label>
            <input id="createAccount" type="checkbox" [(ngModel)]="user.isNew"> Create Account?
            </label>
        </div>
        <div class="form-group" *ngIf="user.isNew">
            <label for="login">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Your Name" [(ngModel)]="user.name">
        </div>
        
        <button type="submit" class="btn btn-default pull-right" (click)="onClick($event)" >Login</button>
        
    </form>
    </div>
    
    <div class="col-md-4 col-md-offset-4" *ngIf="showLoading">
        Loading...
    </div>
     `
                }),
                __metadata("design:paramtypes", [user_1.UserService,
                    login_1.LoginService,
                    router_1.Router])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.js.map