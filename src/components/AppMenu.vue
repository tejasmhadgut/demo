<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <router-link to="/" class="navbar-brand">
        <img
          src="../assets/images/beacon_logo.svg"
          width="90px"
          height="50px"
          alt="Beacon Logo"
        />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-collapse"
        aria-controls="nav-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.path === '/' }">
            <router-link to="/" class="nav-link">About BEACON</router-link>
          </li>
          <li
            class="nav-item"
            :class="{ active: $route.path === '/emergencyInformation' }"
          >
            <router-link to="/emergencyInformation" class="nav-link"
              >Emergency Information</router-link
            >
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/faq' }">
            <router-link to="/faq" class="nav-link">FAQ</router-link>
          </li>
          <li
            class="nav-item"
            v-if="isAuthenticated"
            :class="{ active: $route.path === '/dashboard' }"
          >
            <router-link to="/dashboard" class="nav-link"
              >Dashboard</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              v-if="!isAuthenticated"
              to="/signUp"
              class="nav-link btn btn-primary"
              >Sign Up</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              v-if="!isAuthenticated"
              to="/signIn"
              class="nav-link btn btn-primary"
              >Sign In</router-link
            >
          </li>
          <li class="nav-item">
            <button
              v-if="isAuthenticated"
              class="btn btn-primary"
              @click="logOut"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
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
</style>
