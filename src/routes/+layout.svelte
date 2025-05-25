<script>
  import { page } from "$app/state";
  let { children } = $props();
</script>

<!-- Bootstrap Navbar im Dark-Theme -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">

    <!-- Logo und Titel -->
    <img
      src="/images/pokemon-tcg-logo.avif"
      alt="Logo"
      height="40"
      class="me-2"
    />
    <a class="navbar-brand fw-bold" href="/">Pokémon Boosterwelt</a>

    <!-- Responsive Toggler (für kleine Bildschirme) -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navigationslinks -->
    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

        <!-- Standardseiten -->
        <li class="nav-item">
          <a class="nav-link" href="/">Startseite</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/boosterpacks">Boosterpacks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/cards">Pokémon</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pokedex">Pokédex</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/psa_grading">Karte PSA Graden</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Kontakt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/boosterpacks/open">Pack öffnen</a>
        </li>

        <!-- Dropdown-Menü für Profilfunktionen -->
        <li class="nav-item dropdown">
          <!-- svelte-ignore a11y_invalid_attribute verhindert Warnung für "#" als href -->
          <a
            class="nav-link dropdown-toggle d-flex align-items-center"
            href="#"
            id="profileDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/images/profile.jpg"
              alt="Profil"
              width="30"
              height="30"
              class="rounded-circle me-1"
            />
            Profil
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="profileDropdown"
          >
            <li>
              <a class="dropdown-item" href="/profile">Mein Profil</a>
            </li>
            <li>
              <a class="dropdown-item" href="/profile/new">Neues Profil anlegen</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="/contact/submissions">Eingereichte Kontaktformulare</a>
            </li>
            <li>
              <a class="dropdown-item" href="/psa_grading/submissions">Eingesendete PSA-Gradings</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

{@render children?.()}