<template>
  <div>
    <h1>Upcoming Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <BaseIcon/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data // updates the internal data()
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`);
      })
  }
}
</script>

<style></style>
