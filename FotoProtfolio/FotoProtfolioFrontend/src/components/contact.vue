<template>
  <div class="container">
      <router-link class="back" to="/">Tilbake</router-link>
      <div class="contact">
      <h2>Bestilling</h2>

      <p>Legg gjerne igjen en bestilling. Eller send en melding for en uforplikted prat.</p>

      <p>Navn:</p>
      <input required="text" class="input" name="name" v-model="order.name">

      <p>Mail:</p>
      <input required type="email" class="input" name="email" v-model="order.email">

      <p>Melding:</p>
      <textarea required name="massage" v-model="order.message"></textarea>

      <p>Prisklasse:</p>
      <select v-model="order.price">
        <option disabled value>Velg en pakke</option>
        <option value="Gravid">Gravid</option>
        <option value="Nyfødt">Nyfødt</option>
        <option value="Barn">Barn</option>
        <option value="Reklame">Reklame</option>
        <option value="Bedrift">Bedrift</option>
        <option value="Annet! Viktig!"> Annet </option>
      </select>
      <p>Pakke du har valgt: {{ order.price }}</p>

      <p>Dato:</p>
      <input type="date" v-model="order.date" placeholder="Velg dato">
      <br>
      <br>
    
      <p>Du har bestilt {{order.price}} pakken! Datoen du har valgt for en prat er {{order.date}}.</p>
      <p>Jeg vil sende deg en mail i løpet av noen dager!</p>
    <button @click="onclick">Bestill</button>
    </div>
    </div>

</template>
<script>
import db from "@/fb";

export default {
  data() {
    return {
      order: {
        name: "",
        email: "",
        message: "",
        price: "",
        date: ""
      }
    };
  },
  methods: {
    onclick: function() {
      alert("Din bestilling er sendt!")
     
    }
  }
};
</script>
<style scoped>
@import "../assets/Style.css";

.container{
  margin: 40px;
}
</style>
