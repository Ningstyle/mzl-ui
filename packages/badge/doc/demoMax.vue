<template>
    <m-space :size="[0, 60]">
          <m-badge :value="11" :max="10">
            <m-button>设置最大值10</m-button>
        </m-badge>
         <m-badge :value="100" :max='99'>
            <m-button>设置最大值99</m-button>
        </m-badge>
    </m-space>
</template>