<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong class="mr-1">{{stock.name}} </strong>
        <small> - Preço: {{stock.price | currency}} | Quantidade: {{stock.quantity}}</small>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          type="number"
          :error="insufficientQuantity || !Number.isInteger(quantity)"
          v-model.number="quantity"
        />
        <v-btn
          class="blue darken-3 white--text"
          :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity"
          @click="sellStock"
        >{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // dispatch = ação
      // commit = mutation (mudança)
      //this.$store.dispatch("sellStock", order);
      this.sellStockAction(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>
