<template>
    <section class="auth-modals-wrapper">
        <div class="modal fade" id="registerModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="registerModalLabel">Register</h4>
                        <button class="close" type="button" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <form>
                                <div class="form-group">
                                    <label for="InputEmail">Enter E-mail</label>
                                    <input v-model="registerEmail" type="email" class="form-control" id="RegisterInputEmail" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                    <label for="InputPass">Enter Password</label>
                                    <input v-model="registerPassword" type="password" class="form-control" id="RegisterInputPass" aria-describedby="PassHelp" placeholder="Password" required>
                                    <small id="PassHelp" class="form-text text-muted">
                                        At least 6 characters, one digit, uppercase letter, lowercase letter and symbol
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="ConfirmPass">Confirm Password</label>
                                    <input v-model="registerConfirmPassword" type="password" class="form-control" id="RegisterConfirmPass" placeholder="Password" required>
                                </div>
                                <button @click="register()" type="submit" class="btn btn-primary" id="btn-register" data-dismiss="modal">Register</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="LoginModalLabel">Log in</h4>
                        <button class="close" type="button" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <form>
                                <div class="form-group">
                                    <label for="InputEmail">Enter E-mail</label>
                                    <input v-model="loginEmail" type="email" class="form-control" id="LoginInputEmail" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                    <label for="InputPass">Enter Password</label>
                                    <input v-model="loginPassword" type="password" class="form-control" id="LoginInputPass" placeholder="Password" required>
                                </div>
                                <button @click="login()" type="submit" class="btn btn-primary" id="btn-login" data-dismiss="modal">Log in</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </section>        
</template>

<script>
import auth from "../assets/js/login";
import {tokenActions, currentFolderId} from "../services/shared";
import directory from "../services/folders";
export default {
    name: 'AuthModal',
    props: {
        type: String,
    },
    data: () => ({
        registerEmail: "",
        registerPassword: "",
        registerConfirmPassword: "",
        loginEmail: "ministoir@gmail.com",
        loginPassword: "P_assword1"
    }),
    methods: {
        register() {
            console.log(this)
            if (this.registerPassword === this.registerConfirmPassword) {
                auth.register(this.registerEmail, this.registerPassword)
                    .then(response => {
                        console.log("Registration succsess");
                    })
                    .catch(error => {
                        console.log("Registration failed");
                    });
            } else {
                alert("Passwords does not match");
            }
        },
        async login() {
            const loginResult = await auth.login(this.loginEmail, this.loginPassword)
                .then(response => {
                    console.log("Logged in");
                    this.$router.push('/');
                    return response.data.accessToken;
                })
                .catch(error => {
                    console.log("Login error");
                });
            if(loginResult) {
                tokenActions.set(loginResult);
            }
        }
    }
};
</script>

<style>
</style>
