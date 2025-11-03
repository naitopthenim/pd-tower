<script setup lang="ts">
import InputText from './InputText.vue';

function onSubmit() {
  console.log('Form submitted', formData);
}

const formData = reactive({
  firstName: '',
  lastName: '',
  phone: undefined,
  email: undefined,
  country: undefined,
  isBroker: undefined,
  isAcceptPolicy: false,
});
</script>

<template>
  <div class="wrapper grid w-full grid-cols-12">
    <form
      class="col-span-10 col-start-2 mx-auto grid grid-cols-2 gap-x-5 gap-y-[25px] pt-[93px] pb-[76px]"
      v-on:submit.prevent="onSubmit"
    >
      <InputText
        label="First Name"
        required
        v-model="formData.firstName"
        placeholder="First name"
        class="col-span-1"
      />
      <InputText
        label="Last Name"
        required
        v-model="formData.lastName"
        placeholder="Last name"
        class="col-span-1"
      />
      <InputText
        label="Telephone"
        v-model="formData.phone"
        placeholder="Telephone"
        class="col-span-1"
      />
      <InputText
        label="Email"
        v-model="formData.email"
        placeholder="Email"
        class="col-span-1"
      />
      <SelectCountry
        label="Country"
        v-model="formData.country"
        placeholder="Select your country"
        class="col-span-2"
      />

      <div class="col-span-2 flex">
        <span class="min-w-[384px] uppercase">ARE YOU REAL ESTATE BROKER?</span>
        <div class="flex">
          <RadioButton
            class="mr-[171px]"
            label="Yes"
            v-model="formData.isBroker"
            :value="'yes'"
          />
          <RadioButton label="No" v-model="formData.isBroker" :value="'no'" />
        </div>
      </div>
      <div class="col-span-2">
        <span class="min-w-[384px] uppercase">How Did you hear about us?</span>
      </div>

      <div class="col-span-2">
        <RadioButton
          label="I consent to the company delivering news, promotions, products, services, and benefts, as well as conducting
  research and development on products, marketing, and services to enhance the customer experience.<br><br>I have read and acknowledged the company's privacy policy as specified here."
          v-model="formData.isAcceptPolicy"
          :value="'no'"
        />
      </div>
      <div class="col-span-2 text-center">
        <button class="btn w-auto" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
