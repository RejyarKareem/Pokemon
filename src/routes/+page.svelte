<div
  class="homepage-bg text-white d-flex align-items-center justify-content-center"
>
  <div class="container text-center py-5">
    <!-- Logo oben zentriert und vergrößert -->
    <div class="image-container mb-5">
      <div class="video-wrapper">
        <video src="/videos/pokemon_theme.mp4" autoplay loop muted playsinline
        ></video>
      </div>
    </div>

    <h1 class="display-2 fw-bold mb-4">
      Willkommen in der Pokémon Boosterwelt
    </h1>
    <p class="lead fs-4 mb-5">
      Entdecke unsere Sammlung von <strong>Boosterpacks</strong> und
      <strong>Pokémon-Karten</strong>.<br />
      Neue Karten werden laufend hinzugefügt – perfekt für Fans und Sammler!
    </p>

    <div class="image-container mb-5">
      <img
        src="/images/boosterpack.jpg"
        alt="Boosterpack"
        class="img-fluid rounded shadow"
        style="max-height: 300px; width: auto;"
      />
    </div>

    <div class="d-flex justify-content-center gap-4">
      <a href="/boosterpacks" class="btn btn-lg btn-warning px-5 shadow-sm">
        Boosterpacks ansehen
      </a>
      <a href="/cards" class="btn btn-lg btn-success px-5 shadow-sm">
        Karten entdecken
      </a>
    </div>
  </div>
</div>

<style>
  .video-wrapper {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image-container {
    display: flex;
    justify-content: center;
  }

  .homepage-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }

  .image-container {
    display: flex;
    justify-content: center;
  }

  .btn {
    transition: all 0.3s ease-in-out;
  }

  .btn:hover {
    transform: scale(1.05);
  }
</style>
