<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>

  <!-- Carousel Desktop -->
  <div class="pt-5 pb-3 d-none d-md-block border-bottom">
    <div class="row w-100">
      <h3>Trending destinations</h3>
      <div class="col-12 pe-0">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <!-- Carousel indicators -->
          <ul class="carousel-indicators list-unstyled">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ul>
          <!-- Wrapper for carousel items -->
          <div class="carousel-inner d-flex flex-wrap">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/london.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="thumb-content">
                      <h5>London</h5>
                      <p>
                        Experience regal charm in the heart of London. Immerse yourself in history at iconic landmarks and savor the cosmopolitan vibe of this global metropolis.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/new-york.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>New York</h5>
                      <p>
                        Indulge in the energy of the city that never sleeps. From Broadway lights to Central Park tranquility, discover the dynamic pulse of New York City.
                      </p>
                      <a href="#" class="btn btn-primary">More <i class="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/paris.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Paris</h5>
                      <p>
                        Surrender to the allure of Parisian elegance. Romance awaits in the City of Love, where the Eiffel Tower sparkles and artistry flourishes on every cobbled street.
                      </p>
                      <a href="#" class="btn btn-primary">More <i class="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/kuala-lumpur.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Kuala Lumpur</h5>
                      <p>
                        Discover the fusion of tradition and modernity in Kuala Lumpur. Dazzling skyscrapers, cultural enclaves, and vibrant markets await your exploration.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/agra.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Agra</h5>
                      <p>
                        Step into the enchanting history of Agra. Home to the Taj Mahal, this city whispers tales of love, architectural brilliance, and Mughal grandeur.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/dubai.avif" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Dubai</h5>
                      <p>
                        Immerse yourself in opulence in the heart of the desert. Dubai's futuristic skyline, luxury shopping, and desert adventures redefine extravagance.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/rio-de-janeiro.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Rio De Janeiro</h5>
                      <p>
                        Embark on a journey of rhythm and color in Rio De Janeiro. From the iconic Christ the Redeemer to lively samba beats, experience the vibrant soul of Brazil.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/giza.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Giza</h5>
                      <p>
                        Witness the wonders of antiquity in Giza. The pyramids stand as eternal sentinels, inviting you to explore the mysteries of ancient Egypt.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/sydney.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Sydney</h5>
                      <p>
                        Bask in the sun-soaked allure of Sydney. From the iconic Opera House to Bondi Beach, this sea city seamlessly blends urban sophistication with natural beauty.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Carousel controls -->
          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-transparent" aria-hidden="true">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-transparent" aria-hidden="true">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Carousel Tablet & Mobile-->
  <div class="pt-5 pb-3 d-md-none border-bottom">
    <div class="row">
      <h3>Trending destinations</h3>
      <div class="col-12">
        <div id="myCarousel" class="carousel slide mx-0 px-5" data-bs-ride="carousel" data-bs-interval="3000">
          <!-- Carousel indicators -->
          <ul class="carousel-indicators list-unstyled">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
          </ul>
          <!-- Wrapper for carousel items -->
          <div class="carousel-inner d-flex flex-wrap">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/london.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="thumb-content">
                      <h5>London</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/paris.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Paris</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More <i class="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/agra.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Agra</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/dubai.avif" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Dubai</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/rio-de-janeiro.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Rio De Janeiro</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/giza.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Giza</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/kuala-lumpur.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>Kuala Lumpur</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More 
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6 px-0">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img src="/images/new-york.jpg" class="img-fluid" alt="" loading="lazy">
                    </div>
                    <div class="thumb-content">
                      <h5>New York</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="#" class="btn btn-primary">More <i class="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Carousel controls -->
          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-transparent" aria-hidden="true">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-transparent" aria-hidden="true">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

@use "../scss/partials/variables" as *;

.carousel {
	margin: 30px 75px 60px;
	padding: 0 60px;
}
.carousel .carousel-item {
	text-align: center;
	overflow: hidden;
}
.carousel .carousel-item img {
	width: 100%;
  height: 210px;
	display: inline-block;
}
.carousel .carousel-item .btn {
	border-radius: 0;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	background: #3535ec;
	padding: 6px 15px;
	margin-top: 5px;
}
.carousel .carousel-item .btn:hover {
	background: #0606ca;
}
.carousel .carousel-item .btn i {
	font-size: 14px;
	font-weight: bold;
	margin-left: 5px;
}
.carousel .thumb-wrapper {
	margin: 5px;
	text-align: left;
	background: #fff;
	box-shadow: 0px 2px 2px rgba(0,0,0,0.1);   
}
.carousel .thumb-content {
	padding: 15px;
	font-size: 13px;
}
.carousel-control-prev, .carousel-control-next {
	height: 42px;
	width: 42px;
	margin: auto 0;
	border-radius: 50%;
	border: 3px solid rgba(6, 6, 203, 0.8);
}

.carousel-control-prev i {
  margin-top: 6px;
  font-size: 1.2rem;
  color: #0606ca;
}
.carousel-control-next i {
  margin-top: 6px;
  font-size: 1.2rem;
  color: #0606ca;
}
.carousel-indicators {
	bottom: -50px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin: 4px;
	border: none;
}
.carousel-indicators li {	
	background: #555;
}
.carousel-indicators li.active {	
	background: #0606cb
}

.img-fluid{
  object-fit: cover;
}

</style>