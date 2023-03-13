export const loginView = () => `
  <section class="section-login content">
    <form class="login-form" >
      <div class="form-title">Login:</div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        aria-label="email"
        class="form-element"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        aria-label="password"
        class="form-element"
      />
      <input
        type="submit"
        value="Login"
        class="btn btn--wide"
        name="login"
        id="login"  
      />
    </form>
    <form class="registration-form" >
      <div class="form-title">Registration:</div>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        aria-label="firstName"
        class="form-element"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        aria-label="lastName"
        class="form-element"
      />      
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address..."
        aria-label="email"
        class="form-element"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        aria-label="password"
        class="form-element"
      />      
      <input
        type="submit"
        value="Sign Up"
        class="btn btn--wide"
        name="signup"
        id="signup"
      />
    </form>
  </section>
`;
