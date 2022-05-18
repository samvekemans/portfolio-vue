<template>
  <div class="h-screen flex flex-col justify-between">
    <header>
      <nav-component />
    </header>
    <main class="relative">
      <section
        class="max-w-6xl m-auto p-always"
      >
        <div class="p-always shadow-md pt-10 pb-10">
      <ValidationObserver v-slot="{handleSubmit}">
           <form method="post" ref="form" @submit.prevent="handleSubmit(sendData)">
               <div class="flex flex-col gap-6 w-1/2 700:w-3/4">
                   <h1>Contact</h1>
                    <ValidationProvider 
                        v-slot="{ errors, classes }"
                        rules="required"
                    >
                        <div :class="classes" class="relative flex flex-col">
                           <input
                            v-model="Naam"
                            type="text"
                            class="border-b-2 border-black pb-2 pt-2"
                            placeholder="Naam"
                            name="name"
                        />
                            <span class="text-xs absolute left-0 top-12">{{
                                errors[0]
                            }}</span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider 
                        v-slot="{ errors, classes }"
                        rules="required|email"
                    >
                        <div :class="classes" class="relative flex flex-col">
                           <input
                            v-model="email"
                            type="e-mail"
                            class="border-b-2 border-black pb-2 pt-2"
                            placeholder="E-mail"
                            name="email"
                        />
                            <span class="text-xs absolute left-0 top-12">{{
                                errors[0]
                            }}</span>
                        </div>
                    </ValidationProvider>
                     <ValidationProvider 
                        v-slot="{ errors, classes }"
                        rules="required"
                    >
                        <div :class="classes" class="relative flex flex-col">
                           <textarea
                            v-model="message"
                            type="text"
                            class="border-b-2 border-black pb-2 pt-2 "
                            placeholder="Bericht"
                            name="message"
                        />
                        <span class="text-xs ">{{
                                errors[0]
                            }}</span>
                        </div>
                    </ValidationProvider>
               </div>
               <div>
                   <button 
                    type="submit"
                    class="text-2xl button text-white px-4 py-2 rounded-lg mt-10"
                   >
                       Versturen
                   </button>
               </div>
           </form>
           </ValidationObserver>
           </div>
      </section>
    </main>
    <Footer class="mt-20" />
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
    components: {ValidationProvider, ValidationObserver},
    data(){
        return{
            Naam: '',
            email: '',
            message: '',
        }
    },
    methods: {
        sendData(){
            this.$mail.send({
                from: this.email,
                subject: 'Contactformulier portfolio',
                text: `${this.Naam},
${this.message}`,
            })
        },
    },
};
</script>

<style>
.is-invalid input, .is-invalid textarea{
    border-color: red;
}
.is-invalid span{
    color: red;
}
textarea:focus, input:focus{
    outline: none;
}

@media (max-width: 700px) {
  p.text {
    width: 100%;
  }
}
</style>
