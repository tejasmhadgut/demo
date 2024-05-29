<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/" class="navbar-brand">
        <img src="/assets/images/beacon_logo.svg" width="90px" height="50px" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact exact-active-class="active"
            >About BEACON</b-nav-item
          >
          <b-nav-item
            to="/emergencyInformation"
            exact
            exact-active-class="active"
            >Emergency Information</b-nav-item
          >
          <b-nav-item to="/faq" exact exact-active-class="active"
            >FAQ</b-nav-item
          >
          <b-nav-item
            v-if="isAuthenticated"
            to="/dashboard"
            exact
            exact-active-class="active"
            >Dashboard</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="!isAuthenticated">
            <b-nav-item
              @click="$router.push('/signUp')"
              size="sm"
              class="my-2 my-sm-0 mr-2 btn btn-primary"
              >Sign Up</b-nav-item
            >
            <b-nav-item
              @click="$router.push('/signIn')"
              size="sm"
              class="my-2 my-sm-0 mr-2 btn btn-primary"
              >Sign In</b-nav-item
            >
          </template>
          <template v-else>
            <b-button
              size="sm"
              class="my-2 my-sm-0 mr-2"
              type="submit"
              @click.prevent="logOut"
              >Sign Out</b-button
            >
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("userLogout");
      this.$router.push("/");
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        icon: "success",
        title: `Successfully LoggedOut !!`,
      });
      console.log("Logged out");
    },
  },
};
</script>

<style scoped>
.bg-info {
  background-color: #011f4b !important;
}

.btn-primary {
  color: white;
  background-color: #011f4b;
  border: 1px solid white; /* Example: 2px width white border */
}

.btn-secondary {
  color: white;
  background-color: #011f4b;
  border-color: white;
}

.btn-secondary:hover {
  color: black !important;
  background-color: #d25a04 !important;
  border-color: 1px solid black !important;
}

button.btn-primary:hover,
button.btn-primary:focus,
button.btn-primary:active {
  color: black !important;
  background-color: #d25a04 !important;
  border-color: black !important;
}
</style>
