export default {
  // Declares the template/markup that will be used by the app-button component
  template: `
    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 disabled:bg-gray-400"
        :disabled="isDisabled"
        @click="toggleDisable">
        <!-- Slot is where the content will be injected -->
        <slot />
    </button>`,
  data() {
    return {
      isDisabled: false,
    };
  },

  methods: {
    toggleDisable() {
      this.isDisabled = !this.isDisabled;
    },
  },
};
