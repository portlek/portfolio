<template>
  <div
    class="
    h-100px
    w-100px
    relative"
  >
    <img
      src="~/assets/avatar.png"
      alt="avatar"
      class="
      absolute
      object-cover
      rounded-50%
      border-style-none"
    >
    <div
      class="
      z-2
      before:content-none
      before:right-1px
      before:bottom--1px
      before:absolute
      before:bg-#fafafc
      before:h-23px
      before:w-23px
      before:rounded-50%
      before:animate-[puls_1s_infinite]"
    >
      <div
        state="I'm available for commissions"
        class="
        absolute
        bottom-3px
        right-5px
        h-15px
        w-15px
        bg-#ffc107
        rounded-50%
        z-0
        transition-all
        duration-0.4s
        delay-0s
        text-center
        before:hover:opacity-[1]
        before:hover:translate-x-0
        before:hover:rotate-45deg
        after:hover:opacity-[1]
        after:hover:translate-x-0
        before:content-none
        before:absolute
        before:h-5px
        before:w-5px
        before:right--15px
        before:top-5px
        before:opacity-0
        before:bg-#191923
        before:pointer-events-none
        before:translate-x-20px
        before:rotate-45deg
        before:transition-all
        before:duration-0.4s
        before:delay-0s
        before:z-99
        after:text-#8c8c8e
        after:relative
        after:content-[attr(state)]
        after:w-100px
        after:block
        after:px-10px
        after:py-5px
        after:top--10px
        after:left-28px
        after:text-10px
        after:font-200
        after:shadow-availability
        after:bg-#191923
        after:opacity-0
        after:pointer-events-none
        after:translate-x-20px
        after:transition-all
        after:duration-0.4s
        after:delay-0s
        after:text-left"
      />
    </div>
  </div>
</template>

<style>
@-webkit-keyframes puls {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes puls {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
