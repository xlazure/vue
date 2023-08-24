<template>
  <div class="steps">
    <label v-for="(item, index) in itemSteps" class="steps__item">
      <input
        class="steps__item-radio"
        :key="item.label"
        v-model="step"
        type="radio"
        :name="item.label"
        :value="item.label"
      />
      <a :href="item.link">
        <div class="steps__item-button">
          {{ item.label }}
        </div>
      </a>
    </label>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
const step = ref('')
const itemSteps = [
  {
    label: 'Dane osobowe',
    icon: '',
    link: '/creator/personaldataview'
  },
  {
    label: 'Doświadczenie',
    icon: '',
    link: '/creator/experienceview'
  },
  {
    label: 'Wykształcenie',
    icon: '',
    link: '/creator/educationview'
  },
  {
    label: 'Umiejętności',
    icon: '',
    link: '/creator/skillsview'
  },
  {
    label: 'Klauzula CV',
    icon: '',
    link: '/creator/cvview'
  },
  {
    label: 'Zainteresowania',
    icon: '',
    link: '/creator/hobbyview'
  },
  {
    label: 'Języki Obce',
    icon: '',
    link: '/creator/languagesview'
  },
  {
    label: 'Oprogramowanie',
    icon: '',
    link: '/creator/softwareview'
  },
  {
    label: 'Kursy',
    icon: '',
    link: '/creator/coursesview'
  },
  {
    label: 'Podsumowanie',
    icon: '',
    link: '/creator/summaryview'
  }
]

watch(step, () => {
  console.log('change step')
})
</script>

<style lang="scss" scoped>
.steps {
  display: flex;
  /* width: 100%; */
  &__item {
    width: 100%;
    border-right: 1px dotted black;
    border-bottom: 1px dotted black;
    /* background-color: rgb(200, 200, 200); */

    &-radio {
      display: none;
    }

    &-button {
      display: block;
      width: 100%;
      padding: 12px;
      text-align: center;
    }

    &-radio:checked + &-button {
      background-color: blanchedalmond;
    }
  }
}
.step .item-step {
  font-size: clamp(0.625rem, 0.0536rem + 0.8929vw, 1.125rem);

  & .q-radio__inner {
    display: none !important;
  }
}
</style>
