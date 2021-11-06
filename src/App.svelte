<script>
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

    nextNMonth (n) {
      const cloned = new Date(this.date.getTime())
      cloned.setMonth(cloned.getMonth() + n)
      return new Calendar(cloned)
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

  const calendar = new Calendar(new Date())
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
</script>

<main>
  <div class="calendar-view">
    <div class="calendar calendar-1">
      <div class="calendar-title">{months[calendar.date.getMonth()]} {calendar.date.getFullYear()}</div>
      <div class="calendar-days">
        {#each days as day}
        <div class="calendar-day">{day}</div>
        {/each}
      </div>
      <div class="calendar-body">
        {#each calendar.sixWeeks as date, i}
        <div
          class="calendar-date"
          class:calendar-date-border-bottom={i < 35}
          class:calendar-date-border-right={(i + 1) % 7 !== 0}
          class:calendar-date-text-gray={date.getMonth() !== calendar.date.getMonth()}
          class:calendar-saturday={(i + 1) % 7 === 0}
          class:calendar-sunday={i % 7 === 0}
        >{date.getDate()}</div>
        {/each}
      </div>
    </div>
    <div class="calendar calendar-2">
      <div class="calendar-title">{months[calendar.nextNMonth(1).date.getMonth()]} {calendar.nextNMonth(1).date.getFullYear()}</div>
      <div class="calendar-days">
        {#each days as day}
        <div class="calendar-day">{day}</div>
        {/each}
      </div>
      <div class="calendar-body">
        {#each calendar.nextNMonth(1).sixWeeks as date, i}
        <div
          class="calendar-date"
          class:calendar-date-border-bottom={i < 35}
          class:calendar-date-border-right={(i + 1) % 7 !== 0}
          class:calendar-date-text-gray={date.getMonth() !== calendar.nextNMonth(1).date.getMonth()}
          class:calendar-saturday={(i + 1) % 7 === 0}
          class:calendar-sunday={i % 7 === 0}
        >{date.getDate()}</div>
        {/each}
      </div>
    </div>
    <div class="calendar calendar-3">
      <div class="calendar-title">{months[calendar.nextNMonth(2).date.getMonth()]} {calendar.nextNMonth(2).date.getFullYear()}</div>
      <div class="calendar-days">
        {#each days as day}
        <div class="calendar-day">{day}</div>
        {/each}
      </div>
      <div class="calendar-body">
        {#each calendar.nextNMonth(2).sixWeeks as date, i}
        <div
          class="calendar-date"
          class:calendar-date-border-bottom={i < 35}
          class:calendar-date-border-right={(i + 1) % 7 !== 0}
          class:calendar-date-text-gray={date.getMonth() !== calendar.nextNMonth(2).date.getMonth()}
          class:calendar-saturday={(i + 1) % 7 === 0}
          class:calendar-sunday={i % 7 === 0}
        >{date.getDate()}</div>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  :root {
    --gray-100: #F1F5F9;
    --gray-200: #E2E8F0;
    --gray-300: #CBD5E1;
    --gray-400: #94A3B8;
    --gray-900: #0F172A;
    --indigo-100: #E0E7FF;
    --red-100: #FEE2E2;
  }

  :global(body) {
    margin: 0;
  }

  main {
    color: var(--gray-900);
    height: 100vh;
    width: 100vw;
  }

  .calendar {
    border: 1px solid var(--gray-300);
    border-radius: 16.18px;
    display: flex;
    flex-direction: column;
    margin: 1em;
    overflow: hidden;
  }

  .calendar-1 {
    grid-area: calendar-1;
    margin-right: 0.5em;
  }

  .calendar-2 {
    grid-area: calendar-2;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
  }

  .calendar-3 {
    grid-area: calendar-3;
    margin-left: 0.5em;
    margin-top: 0.5em;
  }

  .calendar-body {
    display: grid;
    flex: 1;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .calendar-date {
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
    background-color: var(--gray-100);
    border-bottom: 1px solid var(--gray-300);
    flex: 1;
    font-weight: bold;
    text-align: center;
  }

  .calendar-days {
    display: flex;
  }

  .calendar-saturday {
    background-color: var(--indigo-100);
  }

  .calendar-sunday {
    background-color: var(--red-100);
  }

  .calendar-title {
    background-color: var(--gray-200);
    font-size: 1.618em;
    text-align: center;
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

  @media (max-width: 1080px) {
    .calendar-view {
      grid-template-areas: calendar-1;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .calendar-2 {
      display: none;
    }

    .calendar-3 {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .calendar {
      border-radius: 14.14px;
    }

    .calendar-title {
      font-size: 1.414em;
    }
  
    .calendar-view {
      aspect-ratio: 1 / 1.414;
    }
  }
</style>
