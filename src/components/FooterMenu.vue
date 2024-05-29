<template>
  <div
    class="container footer-bg d-flex justify-content-center align-items-center"
  >
    <div class="row">
      <div class="col-6 col-md-3 mx-auto">
        <a href="https://www.rit.edu/accesstechnology/">
          <img :src="ntidLogo" class="rit-logo" alt="NTID Logo" width="130%" />
        </a>
      </div>
      <div class="col-6 col-md-3 mx-auto">
        <a
          href="https://new.nsf.gov/news/civic-innovation-challenge-awards-19m-climate"
        >
          <img :src="nfsLogo" alt="NSF Logo" width="130%" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// Import your images
import ntidLogo from "@/assets/images/ntid.svg";
import nfsLogo from "@/assets/images/nfs.svg";

export default {
  name: "FooterMenu",
  data() {
    return {
      // Assign imported images to data properties
      ntidLogo: ntidLogo,
      nfsLogo: nfsLogo,
    };
  },
};
</script>

<style scoped>
/* Media query for screens wider than 1000px */
@media screen and (min-width: 1001px) {
  .rit-logo {
    width: 150%; /* Adjust width for larger screens */
  }
}

/* Media query for screens up to 1000px wide */
@media screen and (max-width: 1000px) {
  .rit-logo {
    width: 110%; /* Adjust width for screens up to 1000px wide */
  }
}
.container {
  max-width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.footer-bg {
  background-color: #011f4b;
}
</style>
