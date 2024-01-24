<script setup lang="ts">
interface FormInputProps {
  id: string;
  label: string;
  modelValue: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<FormInputProps>(), {
  type: "text",
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

    <input
      :id="props.id"
      :value="props.modelValue"
      :type="props.type"
      class="border border-gray-300 px-2 py-1 rounded w-full text-sm focus:outline-none focus:border-sky-300"
      :placeholder="props.placeholder"
      :required="props.required"
      :disabled="props.disabled"
      @input="updateValue"
    />
  </div>
</template>
