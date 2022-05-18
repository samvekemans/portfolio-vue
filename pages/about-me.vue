<template>
  <div class="h-screen flex flex-col justify-between">
    <header>
      <nav-component />
    </header>
    <main class="relative p-always">
      <section
        class="max-w-6xl m-auto "
      >
        <div class="p-always grid grid-cols-2 gap-4 1000:grid-cols-1 pt-10 pb-10 shadow-md">
          <h1 class="text-5xl font-write">OVER MIJ</h1>
          <p class="text-lg col-start-1 1000:w-3/4 text">
            Ik ben Sam Vekemans, ik ben een student op de Hva. Ik studeer CMD, dit
            is communicatie multimedia design. Dit houd in dat ik veel met
            designen van websites bezig ben. Hierbij zijn we altijd bezig met hoe
            we de beste ervaring aan de gebruiker mee kunnen geven. Ook zijn we
            veel bezig met programmeren. Ik zelf hou erg van programmeren maar ook
            van het designen. Ik zou het liefst alles doen, met de klant praten
            over zijn/haar ideeën, hierna een design voor hem/haar maken. Hierna
            dit design gaan programmeren tot een werkende website. Hierdoor zou ik
            bij het volledige proces van een website zijn. Ik vond vanaf dat ik
            erg jong was het al erg leuk om creatief bezig te zijn. Het was voor
            mij altijd al het leukste om dit doormiddel van computers te doen.
            Toen ik 14 was had ik mijn eigen computer gebouwd en was ik al vaak
            bezig met photoshop. Dus toen ik deze opleiding zag leek het mij al
            meteen leuk.
          </p>

          <img
            src="/ik.png"
            alt=""
            class="col-start-2 row-span-3 row-start-1 pl-3 1000:absolute 1000:right-14 1000:top-8 1000:w-36 1000:h-36 1000:rounded-full 1000:pl-0 700:hidden"
          />
          <action title="Mijn werk" link="/my-work" class="mr-auto" />
        </div>
      </section>
    </main>
    <Footer class="mt-20" />
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 700px) {
  p.text {
    width: 100%;
  }
}
</style>
