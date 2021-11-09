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
    <Calendar class="calendar-1" date={date1}></Calendar>
    <Calendar class="calendar-2" date={date2}></Calendar>
    <Calendar class="calendar-3" date={date3}></Calendar>
  </div>
</main>

<style>
  :global(:root) {
    --ratio-a: 1;
    --ratio-b: 1.618;
    --ratio-a-for-sm: 1;
    --ratio-b-for-sm: 1.414;
  }

  :global(body) {
    margin: 0;
  }

  :global(.calendar-1) {
    grid-area: calendar-1;
    margin: 1em;
    margin-right: 0.5em;
  }

  :global(.calendar-2) {
    grid-area: calendar-2;
    margin: 1em;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
  }

  :global(.calendar-3) {
    grid-area: calendar-3;
    margin: 1em;
    margin-left: 0.5em;
    margin-top: 0.5em;
  }

  main {
    height: 100vh;
    width: 100vw;
  }

  .calendar-view {
    aspect-ratio: var(--ratio-b) / var(--ratio-a);
    display: grid;
    grid-template-areas:
      "calendar-1 calendar-2"
      "calendar-1 calendar-3";
    grid-template-columns: calc(100 / var(--ratio-b) * 1%) 1fr;
    grid-template-rows: calc(100 / var(--ratio-b) * 1%) 1fr;
    width: 100vw;
  }

  @media (max-width: 768px) {
    :global(.calendar-1) {
      margin-right: 1em;
    }

    :global(.calendar-2) {
      display: none !important;
    }

    :global(.calendar-3) {
      display: none !important;
    }

    .calendar-view {
      grid-template-areas: calendar-1;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }

  @media (max-width: 640px) {
    .calendar-view {
      aspect-ratio: var(--ratio-a-for-sm) / var(--ratio-b-for-sm);
    }
  }
</style>
