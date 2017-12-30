System.register(["angular2/core", "../model", "../service/login", "angular2/router", "../service/post"], function (exports_1, context_1) {
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
    var core_1, model_1, login_1, router_1, post_1, AddPostComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            }
        ],
        execute: function () {
            AddPostComponent = class AddPostComponent {
                constructor(_loginService, _router, _postService) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this._postService = _postService;
                    this.post = new model_1.Post();
                    this.errorMessage = null;
                    this.showLoading = false;
                    if (!_loginService.isLogged())
                        this._router.navigate(['Login']);
                    this.post.user = this._loginService.getUser();
                }
                onClick(event) {
                    event.preventDefault();
                    this.showLoading = true;
                    this.errorMessage = null;
                    this._postService.insert(this.post).subscribe(result => this.onInsertPostResult(result), error => this.onInsertPostError(error));
                }
                onInsertPostResult(result) {
                    this._router.navigate(['Home']);
                }
                onInsertPostError(error) {
                    this.showLoading = false;
                    this.errorMessage = error._body;
                }
            };
            AddPostComponent = __decorate([
                core_1.Component({
                    providers: [post_1.PostService],
                    template: `
    <div class="col-md-4 col-md-offset-4" *ngIf="showLoading">
        Loading...
    </div>
    <div class="col-md-8 col-md-offset-2" *ngIf="!showLoading">
        <div *ngIf="errorMessage" class="alert alert-danger" role="alert">
            {{errorMessage}}
        </div>
    <div class="panel panel-default">
        <div class="panel-heading">Add Post</div>
            <div class="panel-body">
                <form ngForm>
                <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control"
                    id="title" required placeholder="Title"
                    [(ngModel)]="post.title">
                </div>
                
                <div class="form-group">
                    <label for="text">Text</label>
                    <textarea rows=10 cols=100 class="form-control"
                        id="text" [(ngModel)]="post.text"></textarea>
                </div>
                <button type="submit" class="btn btn-default pull-right"
                    (click)="onClick($event)">Create</button>
            </form>
            </div>
        </div>
    </div>`
                }),
                __metadata("design:paramtypes", [login_1.LoginService,
                    router_1.Router,
                    post_1.PostService])
            ], AddPostComponent);
            exports_1("AddPostComponent", AddPostComponent);
        }
    };
});
//# sourceMappingURL=addpost.js.map