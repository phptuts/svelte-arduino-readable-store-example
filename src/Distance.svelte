<script>
  import distanceStore from './distance-store.js';
  let inches = 0;
  let cm = 0;

	distanceStore.subscribe(message => {
    inches = message.inches;
    cm = message.cm;
	});

</script>

<style>
  section {
    flex: 1;
    height: 200px;
    font-family: fantasy;
    padding: 10px;
  }
</style>

<section>
  <h1>Distance Section</h1>
  <h2>Inches: {cm}</h2>
  <h2>Cm: {cm}</h2>
</section>