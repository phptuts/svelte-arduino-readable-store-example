<script>
  import distanceStore from './distance-store.js';
  let inches = 0;
  let color = 'gray';
  $:  if (inches < 10) {
    color = 'green'
  } else if(inches < 20) {
    color = 'yellow';
  } else {
    color = 'purple'
  }

	distanceStore.subscribe(message => {
		inches = message.inches;
	});

</script>

<style>
  section {
    flex: 1;
    height: 200px;
  }
</style>

<section style="background-color: {color}">

</section>