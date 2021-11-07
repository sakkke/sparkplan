<script>
  import Calendar from './lib/Calendar.svelte'
  import { currentMonth } from './stores'

  function nextNMonth (date, n) {
    const cloned = new Date(date.getTime())
    cloned.setMonth(cloned.getMonth() + n)
    return cloned
  }

  const date = new Date()
  $: date1 = nextNMonth(date, $currentMonth)
  $: date2 = nextNMonth(date, $currentMonth + 1)
  $: date3 = nextNMonth(date, $currentMonth + 2)
</script>

<main>
  <div class="calendar-view">
    <div class="calendar-1">
      <Calendar date={date1}></Calendar>
    </div>
    <div class="calendar-2">
      <Calendar date={date2}></Calendar>
    </div>
    <div class="calendar-3">
      <Calendar date={date3}></Calendar>
    </div>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
  }

  main {
    height: 100vh;
    width: 100vw;
  }

  .calendar-1 {
    grid-area: calendar-1;
    margin: 1em;
    margin-right: 0.5em;
  }

  .calendar-2 {
    grid-area: calendar-2;
    margin: 1em;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
  }

  .calendar-3 {
    grid-area: calendar-3;
    margin: 1em;
    margin-left: 0.5em;
    margin-top: 0.5em;
  }

  .calendar-view {
    aspect-ratio: 1.618 / 1;
    display: grid;
    grid-template-areas:
      "calendar-1 calendar-2"
      "calendar-1 calendar-3";
    grid-template-columns: 61.8% 1fr;
    grid-template-rows: 61.8% 1fr;
    width: 100vw;
  }

  @media (max-width: 768px) {
    .calendar-view {
      grid-template-areas: calendar-1;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .calendar-1 {
      margin-right: 1em;
    }

    .calendar-2 {
      display: none;
    }

    .calendar-3 {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .calendar-view {
      aspect-ratio: 1 / 1.414;
    }
  }
</style>
