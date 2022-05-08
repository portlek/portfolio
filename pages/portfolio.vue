<template>
  <div
    class="
    w-auto
    h-auto
    overflow-visible
    relative
    text-[#8c8c8e]
    lg:p-[15px] p-[0px]
    lg:before:portfolio-topleft
    lg:after:portfolio-topleft
    lg:after:top-auto
    lg:after:bottom-0"
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
      w-[100%]
      relative
      max-lg:rounded-[0]
      portfolio-default-shadow"
    >
      <div
        class="
        relative
        max-lg:w-100%
        flex
        flex-nowrap
        lg:before:portfolio-topright"
      >
        <!-- Info bar -->
        <div
          class="
          max-lg:h-[100vh!important]
          fixed
          max-lg:left-[-290px]
          max-lg:w-[290px]
          bg-[#20202a]
          w-[290px]
          min-w-[290px]
          h-[calc(100vh-30px)]
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
        <!-- Content -->
        <div
          class="
          max-lg:pl-0
          max-lg:w-auto
          pl-[290px]
          h-auto
          relative
          max-lg:pr-0
          max-lg:pt-[70px]
          overflow-hidden
          w-[100vw]
          transition-all duration-[0.55s] delay-[0s]"
        >
          <div
            class="
              bg-[#303040]/[0.88]
              absolute
              z-[9]
              left-[0]
              w-[100%]
              h-[100%]
              pointer-events-none
              opacity-0
              transition-all duration-[0.55s] delay-[0s]
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
