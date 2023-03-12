//? combine with add form and pass the edit/create?
//TODO: use fieldset
export const userProfileView = (user, edit = false) => `
  <section class="section-user-profile content">
    <form class="user-profile-form" >
      <div class="form-title">${edit ? "Edit" : "Create"} Profile:</div>
      <input
        type="text"
        name="displayName"
        id="displayName"
        placeholder="Display Name"
        aria-label="displayName"
        class="form-element"
        value="${user ? `${user.displayName}` : ""}"

      />

      <textarea
        name="bio"
        id="bio"
        placeholder="Bio"
        class="form-element form-text-area"
        value="${user ? `${user.bio}` : ""}"
      ></textarea>   

      <!-- future-proof: open text, not dropdown for fluidity --> 
      <input
        type="text"
        name="prononuns"
        id="prononuns"
        placeholder="Pronouns"
        aria-label="prononuns"
        class="form-element"
        value="${user ? `${user.pronouns}` : ""}"
      />
      
      <input
        type="url"
        name="website"
        id="website"
        placeholder="Website"
        aria-label="website"
        class="form-element"
        value="${user ? `${user.website}` : ""}"
      />  

      <input
        type="text"
        name="company"
        id="company"
        placeholder="Company"
        aria-label="company"
        class="form-element"
        value="${user ? `${user.company}` : ""}"
      />  

      <input
        type="text"
        name="location"
        id="location"
        placeholder="Location"
        aria-label="location"
        class="form-element"
        value="${user ? `${user.location}` : ""}"
      />  
      
      <input
        type="url"
        name="twitter"
        id="twitter"
        placeholder="Link to Twitter profile"
        aria-label="twitter"
        class="form-element"
        value="${user ? `${user.twitter}` : ""}"
      />       
     
      
      <input
        type="url"
        name="facebook"
        id="facebook"
        placeholder="Link to Facebook profile"
        aria-label="facebook"
        class="form-element"
        value="${user ? `${user.facebook}` : ""}"
      />       
     
      
      <input
        type="url"
        name="linkedIn"
        id="linkedIn"
        placeholder="Link to LinkedIn profile"
        aria-label="linkedIn"
        class="form-element"
        value="${user ? `${user.linkedIn}` : ""}"
      />       
     
      
      <input
        type="url"
        name="discord"
        id="discord"
        placeholder="Link to Discord profile"
        aria-label="discord"
        class="form-element"
        value="${user ? `${user.discord}` : ""}"
      />       
     
      <input
        type="submit"
        value="Save"
        class="btn btn--wide"
      />
    </form>
  </section>
`;
