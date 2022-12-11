<template>
  <div class="drawer drawer-mobile">
    <input id="main-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content bg-base-200 flex flex-col items-start justify-start">
      <LayoutHeader />

      <div class="p-4 w-full">
        <main>
          <slot />
        </main>
      </div>

    </div> 
    <div class="drawer-side">
      <label for="main-drawer" class="drawer-overlay"></label>
      <div class="menu p-4 w-80 bg-bodyBG text-base-content">
        <LayoutSidebar />
      </div>
    </div>
  </div>


</template>