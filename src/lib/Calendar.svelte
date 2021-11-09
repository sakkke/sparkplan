<script>
  import { currentMonth } from '../stores'
  import '@fontsource/lato'
  import { fly } from 'svelte/transition'

  let klass = ''

  export let date
  export { klass as class }

  class Calendar {
    constructor (date) {
      this.date = date
    }

    get firstDateOfMonth () {
      return Calendar.getFirstDateOfMonth(this.date)
    }

    get firstDateOfWeek () {
      return Calendar.getFirstDateOfWeek(this.date)
    }

    get sixWeeks () {
      return Calendar.getSixWeeks(
        Calendar.getFirstDateOfWeek(this.firstDateOfMonth)
      )
    }

    get week () {
      return Calendar.getWeek(this.firstDateOfWeek)
    }

    static getFirstDateOfMonth (date) {
      const cloned = new Date(date.getTime())
      cloned.setDate(1)
      return cloned
    }

    static getWeek (date) {
      const cloned = new Date(date.getTime())
      const result = []
      for (let i = 0; i < 7; i++) {
        if (i !== 0) cloned.setDate(cloned.getDate() + 1)
        result.push(new Date(cloned.getTime()))
      }
      return result
    }

    static getFirstDateOfWeek (date) {
      const cloned = new Date(date.getTime())
      while (cloned.getDay() !== 0) {
        cloned.setDate(cloned.getDate() - 1)
      }
      return cloned
    }

    static getSixWeeks (date) {
      const cloned = new Date(date.getTime())
      const result = []
      for (let i = 0; i < 42; i++) {
        if (i !== 0) cloned.setDate(cloned.getDate() + 1)
        result.push(new Date(cloned.getTime()))
      }
      return result
    }
  }

  $: calendar = new Calendar(date)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const now = new Date()
</script>

<div class="{klass} calendar">
  <div class="calendar-head">
    <button class="calendar-previous" on:click={() => {
      $currentMonth--
      calendar = calendar
    }}>
      <span>&lt;</span>
    </button>
    <div class="calendar-title"><span class="calendar-title-month">{months[calendar.date.getMonth()]}</span> <span class="calendar-title-year">{calendar.date.getFullYear()}</span></div>
    <button class="calendar-next" on:click={() => {
      $currentMonth++
      calendar = calendar
    }}>
      <span>&gt;</span>
    </button>
  </div>
  <div class="calendar-days">
    {#each days as day}
    <div class="calendar-day">{day}</div>
    {/each}
  </div>
  <div class="calendar-body">
    {#each calendar.sixWeeks as date, i(date)}
    <div
      class="calendar-date"
      class:calendar-date-border-bottom={i < 35}
      class:calendar-date-border-right={(i + 1) % 7 !== 0}
      class:calendar-date-text-gray={date.getMonth() !== calendar.date.getMonth()}
      class:calendar-saturday={(i + 1) % 7 === 0}
      class:calendar-sunday={i % 7 === 0}
      class:calendar-today={
        now.getMonth() === date.getMonth() &&
        now.getDate() === date.getDate()
      }
      in:fly={{ delay: 500 + (250 / 21) * i, duration: 500, x: -200 * Math.sin(i), y: 200 * Math.cos(i) }}
      out:fly={{ delay: (250 / 21) * i, duration: 500, x: 200 * Math.sin(i), y: -200 * Math.cos(i) }}
    >{date.getDate()}</div>
    {/each}
  </div>
</div>

<style>
  :root {
    --gray-100: #F1F5F9;
    --gray-200: #E2E8F0;
    --gray-300: #CBD5E1;
    --gray-400: #94A3B8;
    --gray-900: #0F172A;
    --indigo-100: #E0E7FF;
    --red-100: #FEE2E2;
    --yellow-100: #FEF3C7;
  }

  .calendar {
    border: 1px solid var(--gray-300);
    border-radius: calc(var(--ratio-b) * 10 * 1px);
    color: var(--gray-900);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .calendar-body {
    display: grid;
    flex: 1;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .calendar-date {
    background-color: #fff;
    font-family: Lato;
    padding: 0.25em;
    transition-duration: 500ms;
  }

  .calendar-date:hover {
    filter: brightness(80%);
  }

  .calendar-date-border-bottom {
    border-bottom: 1px solid var(--gray-300);
  }

  .calendar-date-border-right {
    border-right: 1px solid var(--gray-300);
  }

  .calendar-date-text-gray {
    color: var(--gray-400);
  }

  .calendar-day {
    flex: 1;
    font-family: Lato;
    font-weight: bold;
    text-align: center;
  }

  .calendar-days {
    background-color: var(--gray-100);
    border-bottom: 1px solid var(--gray-300);
    display: flex;
    padding: 0.25em;
  }

  .calendar-head {
    background-image: linear-gradient(var(--gray-200), var(--gray-100), var(--gray-200));
    display: flex;
    padding: 0.5em;
  }

  .calendar-head button {
    align-items: center;
    background-image: linear-gradient(var(--gray-100), #fff, var(--gray-100));
    border: 1px solid var(--gray-300);
    border-radius: 100%;
    display: flex;
    height: calc(var(--ratio-b) * 2 * 1em);
    justify-content: center;
    margin-bottom: auto;
    margin-top: auto;
    transition-duration: 500ms;
    width: calc(var(--ratio-b) * 2 * 1em);
  }

  .calendar-head button:hover {
    filter: brightness(80%);
  }

  .calendar-head button span {
    color: var(--gray-400);
    font-family: Lato;
    font-size: calc(var(--ratio-b) * 1em);
  }

  .calendar-next {
  }

  .calendar-previous {
  }

  .calendar-saturday {
    background-color: var(--indigo-100);
  }

  .calendar-sunday {
    background-color: var(--red-100);
  }

  .calendar-title {
    flex: 1;
    font-family: Lato;
    font-size: calc(var(--ratio-b) * 1em);
    margin-bottom: auto;
    margin-top: auto;
    text-align: center;
  }

  .calendar-title-month {
  }

  .calendar-title-year {
    font-size: calc(var(--ratio-b) * 0.5 * 1em);
  }

  .calendar-today {
    background-color: var(--yellow-100);
  }

  @media (max-width: 640px) {
    .calendar {
      border-radius: calc(var(--ratio-b-for-sm) * 10 * 1px);
    }

    .calendar-head button span {
      font-size: calc(var(--ratio-b-for-sm) * 1em);
    }

    .calendar-title {
      font-size: calc(var(--ratio-b-for-sm) * 1em);
    }
  }
</style>
