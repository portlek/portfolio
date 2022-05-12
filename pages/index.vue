<template>
  <div
    class="
    lg:p-[15px] p-0
    lg:before:portfolio-topleft
    lg:after:portfolio-topleft
    lg:after:top-auto
    lg:after:bottom-0
    w-auto
    h-auto
    overflow-visible
    relative
    text-[#8c8c8e]"
  >
    <div
      class="
      h-auto
      overflow-visible
      overflow-x-hidden
      max-w-[1440px]
      mx-auto
      bg-[#1e1e28]
      bg-cover
      w-full
      relative
      max-lg:rounded-none
      portfolio-default-shadow"
    >
      <div
        class="
        relative
        max-lg:w-full
        flex
        flex-nowrap
        lg:before:portfolio-topright"
      >
        <div
          class="
          lg:h-[calc(100vh-30px)]
          lg:left-[0]
          h-[100vh!important]
          left-[-290px]
          fixed
          bg-[#20202a]
          w-[290px]
          min-w-[290px]
          z-999
          portfolio-default-shadow
          transition-all duration-[0.55s] delay-[0s]
          px-[15px]"
        >
          <div
            class="
            p-[15px]"
          >
            <SideHeader />
            <SideAvatarHeader />
            <SideBottomBar />
          </div>
        </div>
        <div
          class="
          lg:pl-[290px]
          lg:w-auto
          pl-0
          w-[100vw]
          h-auto
          relative
          max-lg:pr-0
          max-lg:pt-[70px]
          overflow-hidden
          transition-all duration-[0.55s] delay-[0s]"
        >
          <ContentTop />
          <ContentBottom />
        </div>
      </div>
    </div>
  </div>
</template>
