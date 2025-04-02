export default {
  // the class prop is an object that contains all the classes that will be used
  // this object is used to conditionally apply classes to the button
  // the syntax is :class="{ 'class-name': condition }"
  // note that :class can accept also an array or string
  template: `
    <button
        :class="{
            'font-bold py-2 px-4 rounded ml-2 disabled:bg-gray-400': true,
            'bg-blue-500 hover:bg-blue-700 text-white' : buttonStyle === 'primary',
            'bg-red-500 hover:bg-red-700 text-white' : buttonStyle === 'secondary',           
        }"  
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

  // props are how we pass data from the parent component to the child component
  // type is the type of data that is expected to be passed in
  // default is the value that will be used if no value is passed in
  // always use camelCase for prop names
  // however when passing in the template use kebab-case
  props: {
    buttonStyle: {
      type: String,
      default: "primary",
    },
  },

  methods: {
    toggleDisable() {
      this.isDisabled = !this.isDisabled;
    },
  },
};
