export const userProfileView = (user, edit = false) => `
  <section class="section-user-profile content">
    <form class="user-profile-form" id="user-profile-${
      edit ? `edit` : `create`
    }">
      <div class="form-title">${edit ? "Edit" : "Create"} Profile:</div>
      <label class="form-label" for="displayName">Display Name:</label>
      <input
        type="text"
        name="displayName"
        id="displayName"
        placeholder="Display Name"
        class="form-element"
        value="${user ? `${user.displayName}` : ""}"

      />

      <label class="form-label" for="bio">Bio:</label>
      <textarea
        name="bio"
        id="bio"
        placeholder="Bio"
        class="form-element form-text-area"
        value="${user ? `${user.bio}` : ""}"
      ></textarea>   

      <!-- future-proof: open text, not dropdown for fluidity --> 
      <label class="form-label" for"pronouns">Pronouns:</label>
      <input
        type="text"
        name="prononuns"
        id="prononuns"
        placeholder="Pronouns"
        class="form-element"
        value="${user ? `${user.pronouns}` : ""}"
      />
      
      <label class="form-label" for="website">Website:</label>
      <input
        type="url"
        name="website"
        id="website"
        placeholder="Website"
        class="form-element"
        value="${user ? `${user.website}` : ""}"
      />  

      <label class="form-label" for="company">Company:</label>
      <input
        type="text"
        name="company"
        id="company"
        placeholder="Company"
        class="form-element"
        value="${user ? `${user.company}` : ""}"
      />  

      <label class="form-label" for="location">Location:</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Location"
        class="form-element"
        value="${user ? `${user.location}` : ""}"
      />  
      
      <label class="form-label" for="Twitter">Twitter:</label>
      <input
        type="url"
        name="twitter"
        id="twitter"
        placeholder="Link to Twitter profile"
        class="form-element"
        value="${user ? `${user.twitter}` : ""}"
      />       
     
      <label class="form-label" for="facebook">Facebook:</label>
      <input
        type="url"
        name="facebook"
        id="facebook"
        placeholder="Link to Facebook profile"
        class="form-element"
        value="${user ? `${user.facebook}` : ""}"
      />       
     
      <label class="form-label" for="linkedIn">LinkedIn:</label>
      <input
        type="url"
        name="linkedIn"
        id="linkedIn"
        placeholder="Link to LinkedIn profile"
        class="form-element"
        value="${user ? `${user.linkedIn}` : ""}"
      />       
     
      <label class="form-label" for="discord">Discord:</label>
      <input
        type="url"
        name="discord"
        id="discord"
        placeholder="Link to Discord profile"
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
