<script setup lang="ts">
interface FormSelectProps {
  id: string;
  label: string;
  modelValue: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options: string[];
}

const props = withDefaults(defineProps<FormSelectProps>(), {
  placeholder: "",
  required: false,
  disabled: false,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="props.id" class="text-xs text-gray-500 block">
      {{ props.label }}
    </label>

    <select
      :id="props.id"
      :value="props.modelValue"
      class="border border-gray-300 px-2 py-1 rounded w-full text-sm focus:outline-none focus:border-sky-300"
      :placeholder="props.placeholder"
      :required="props.required"
      :disabled="props.disabled"
      @change="updateValue"
    >
      <option v-for="option in props.options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
