<template>
  <div class="map"></div>
</template>

<script>
/* global google */
export default {
  name: 'GoogleMap',
  props: ['center', 'venues'],
  mounted() {
    this.map = new google.maps.Map(this.$el, {
      center: this.center || { lat: 51.515, lng: -0.078 },
      zoom: 14
    });

    this.infoWindow = new google.maps.InfoWindow();
  },
  watch: {
    venues() {
      this.bounds = new google.maps.LatLngBounds();

      this.markers = this.venues.map(venue => {
        this.bounds.extend(venue.location);

        const marker = new google.maps.Marker({
          position: venue.location,
          map: this.map
        });

        marker.addListener('click', () => {
          this.infoWindow.setContent(`
            <a href="/#/venues/${venue._id}">
              <h3>${venue.name}</h3>
              <p>${venue.address}</p>
            </a>
          `);
          this.infoWindow.open(this.map, marker);
        });
      });

      this.map.panTo(this.bounds.getCenter());
    },
    center() {
      this.map.setCenter(this.center);
      this.marker = new google.maps.Marker({
        position: this.center,
        map: this.map,
        label: ' ⚽️'
      });
    }
  }
};
</script>
