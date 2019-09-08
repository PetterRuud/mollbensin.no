<template>
  <div class="grid">
    <div class="box">
      <div class="box-inner">
        <div class="box-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            />
          </svg>
          <h4>+47 382 67 144</h4>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-inner">
        <div class="box-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <h4>post@mollbensin.no</h4>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-inner">
        <div class="box-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <h4>Holumsveien 816, 4519 Holum</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$red: #d11e39;

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  text-align: center;
  svg {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto 12px;
    fill: $red;
  }
}
</style>
