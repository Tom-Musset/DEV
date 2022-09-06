<template>
    <div class="card"  style="width:25rem;margin: auto;border-radius: 5%;border-width: 3px;padding: 2em;">
        <!-- Pills navs -->
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a v-if="mode == 'register'" class="nav-link " id="tab-login" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-login" @click="switchToLogin()" >Login</a>
          <a v-if="mode == 'login'" class="nav-link active" id="tab-login" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-login" @click="switchToLogin()" >Login</a>
        </li>
        <li class="nav-item" role="presentation">
          <a v-if="mode == 'register'" class="nav-link active" id="tab-register" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-register" @click="switchToRegister()" >Register</a>
          <a v-if="mode == 'login'" class="nav-link" id="tab-register" data-mdb-toggle="pill" role="tab"
            aria-controls="pills-register" @click="switchToRegister()" >Register</a>
        </li>
      </ul>
      <!-- Pills navs -->
  
      <!-- Pills content -->
    <div class="tab-content">
      <div v-if="mode == 'login'">
        <div class="tab-pane fade show" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form>
  
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="loginName" class="form-control" />
              <label class="form-label" for="loginName">Email or username</label>
            </div>
  
            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="loginPassword" class="form-control" />
              <label class="form-label" for="loginPassword">Password</label>
            </div>
  
            <!-- 2 column grid layout -->
            <div class="row mb-4">
              <div class="col-md-6 d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check mb-3 mb-md-0">
                  <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                  <label class="form-check-label" for="loginCheck"> Remember me </label>
                </div>
              </div>
  
              <div class="col-md-6 d-flex justify-content-center">
                <!-- Simple link -->
                <a href="#!">Forgot password?</a>
              </div>
            </div>
  
            <!-- Submit button -->
            <button type='submit' class="btn btn-primary btn-block mb-4" >Sign in</button>
  
            <!-- Register buttons -->
            <div class="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
            </div>
          </form>
        </div>
      </div>
  
      <div v-if=" mode == 'register'">
        <div class="tab-pane fade show" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            
            <!-- Name input -->
            <div class="form-outline mb-4">
              <input v-model="nom" type="text" id="registerName" class="form-control" required />
              <label class="form-label" for="registerName">Name</label>
            </div>
  
            <!-- Username input -->
            <div class="form-outline mb-4">
              <input v-model="username" type="text" id="registerUsername" class="form-control" required />
              <label class="form-label" for="registerUsername">Username</label>
            </div>
  
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input v-model="email" type="email" id="registerEmail" class="form-control" required />
              <label class="form-label" for="registerEmail">Email</label>
            </div>
  
            <!-- Password input -->
            <div class="form-outline mb-4">
              <input v-model="password" type="password" id="registerPassword" class="form-control" required />
              <label class="form-label" for="registerPassword">Password</label>
            </div>
  
            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4" style="display:inline!important;">
              <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                aria-describedby="registerCheckHelpText" required>
              <label class="form-check-label" for="registerCheck">
                I have read and agree to the terms
              </label>
            </div>
  
            <!-- Submit button -->
            <button @click="createAccount()" class="btn btn-primary btn-block mb-3" >Register</button>
          </form>
        </div>
      </div>
    </div>
      <!-- Pills content -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data: function(){
      return{
        mode:'login',
        nom: '',
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      switchToRegister: function () {
        this.mode = 'register';
      },
      switchToLogin: function () {
        this.mode = 'login';
      },
      createAccount: function(){
        this.$store.dispatch('createAccount',{
          email: this.email,
          nom: this.nom,
          prenom: this.username,
          password: this.password,
        })
      },
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  