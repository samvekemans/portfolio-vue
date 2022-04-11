<template>
    <div>
        <header-component-work title="The best pizza ever" scrollTo="#main" banner="/pizza-banner.png" />
        
        <main id="main" class="bg-no-repeat bg-center bg-cover bg-fixed relative" :style="`background-image: url('${url}');`">
            <div class="absolute h-24 bg-gradient-to-b from-white w-full">
            </div>
            <div class="max-w-6xl m-auto pb-16 pt-16">
                <div class="p-always">
                    <client-only>
                        <carousel  v-bind="options">
                            <slide v-for="item in items" :key="item.src" class="h-200">
                                <div class="flex justify-center items-center">
                                    <img :src="item.src" alt="" class="carouselImg h-200 object-contain">
                                </div>
                            </slide>   
                        </carousel>
                    </client-only>
                    <section class="bg-white shadow rounded p-7 mt-16">
                        <h2 class="text-3xl font-medium">Over dit project:</h2>
                        <p class="text-xl">{{information}}</p>
                    </section>
                </div>
            </div>
        </main>
        <Footer />
 </div>
</template>

<script>
export default {
    data(){
        return{
            items: [
                {src: '/the-best-pizza-ever.png'}
            ],
            data: [],
            url: '/mainbg.png',
            information: "Mijn eerste vormgeef project, we kregen de opdracht om een one page website vorm te geven over onze favoriete eten. Hierbij kregen we een stijl, mijn stijl voor dit project was: layering and overprinting. Ik vond het erg leuk om dit te maken. Naar mijn mening is dit ook één van de mooiste eindresultaten die ik heb gehad. De kleuren en de manier waarop ik de stijl heb toegepast vind ik erg leuk.",
            options: {
            loop: true,
            perPage: 1,
            scrollPerPage: false,
            navigationEnabled: true,
      },
        }
    },
    async mounted(){
        const data = await this.$axios.$get('http://localhost:1337/api/my-works',{
            params: {
                populate: ['*'],
            }
        });
        this.data = data.data;
        console.log(this.data);
    }
}
</script>

<style>

button.VueCarousel-navigation-button{
    font-size: 2em;
}
.VueCarousel-slide{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>