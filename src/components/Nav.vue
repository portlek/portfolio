<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <NuxtLink
        class="navbar-brand"
        to="/restauranty"
      >
        Restaurantly
      </NuxtLink>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink
              to="/restauranty"
              class="nav-link"
              active-class="active"
              aria-current="page"
            >
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/restaurants"
              class="nav-link"
              active-class="active"
            >
              Restaurants
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.ml-auto {
  margin-left: auto;
}
</style>
