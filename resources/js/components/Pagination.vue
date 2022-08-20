<template>
<div>
  <ul :class="classes.wrapper">
    <li :class="[element(false), prevElementIsDisabled]">
      <button
        :class="[button(false), prevButtonIsDisabled]"
        @click="firstPage()"
      >
        &laquo;
      </button>
    </li>
    <li :class="[element(false), prevElementIsDisabled]">
      <button
        :class="[button(false), prevButtonIsDisabled]"
        @click="previousPage()"
      >
        &lsaquo;
      </button>
    </li>
    <template v-for="(page, n) in pages">
      <li :class="[element(page == currentPage)]" :key="n">
        <button
          :class="[button(page == currentPage)]"
          @click="setCurrent(page)"
        >
          {{ page }}
        </button>
      </li>
    </template>
    <li :class="[element(false), nextElementIsDisabled]">
      <button
        :class="[button(false), nextButtonIsDisabled]"
        @click="nextPage()"
      >
        &rsaquo;
      </button>
    </li>
    <li :class="[element(false), nextElementIsDisabled]">
      <button
        :class="[button(false), nextButtonIsDisabled]"
        @click="lastPage()"
      >
        &raquo;
      </button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: null,
    },
    total: {
      type: Number,
      default: null,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    limit: {
      type: Number,
      default: 5,
    },
    classes: {
      type: Object,
      default() {
        return {
          wrapper: "table border-collapse text-center text-sm",
          element: "w-8 h-8  table-cell text-gray-500",
          activeElement: "w-8 h-8 text-primary table-cell",
          disabledElement: "w-8 h-8  table-cell cursor-not-allowed",
          activeButton:
            "w-full h-full text-primary font-semibold hover:text-white rounded hover:rounded  hover:bg-secondary transition duration-100 ease-in-out ring-none focus:outline-none focus:ring-opacity-50",
          disabledButton:
            "opacity-25 w-full h-full pointer-events-none transition duration-100 ease-in-out",
          button:
            "hover:bg-pastel rounded hover:text-white w-full h-full transition duration-100 ease-in-out ring-none focus:outline-none focus:ring-opacity-50",
        };
      },
    },
  },
  data() {
    return {
      currentPage: this.value ?? 1,
    };
  },
  computed: {
    totalPagination() {
      if (this.perPage <= 0) {
        return 0;
      }
      return Math.ceil(this.total / this.perPage);
    },
    pages() {
      const numShown = Math.min(this.limit, this.totalPagination);
      let first = this.currentPage - Math.floor(numShown / 2);
      first = Math.max(first, 1);
      first = Math.min(first, this.totalPagination - numShown + 1);
      return [...Array(numShown)].map((k, i) => i + first);
    },
    prevElementIsDisabled() {
      return this.currentPage === null || this.currentPage <= 1
        ? this.classes.disabledElement
        : "";
    },
    nextElementIsDisabled() {
      return this.currentPage === null ||
        this.currentPage >= this.totalPagination
        ? this.classes.disabledElement
        : "";
    },
    prevButtonIsDisabled() {
      return this.currentPage === null || this.currentPage <= 1
        ? this.classes.disabledButton
        : "";
    },
    nextButtonIsDisabled() {
      return this.currentPage === null ||
        this.currentPage >= this.totalPagination
        ? this.classes.disabledButton
        : "";
    },
  },
  watch: {
    value(val) {
      this.currentPage = val;
    },
  },
  methods: {
    setCurrent(page) {
      this.currentPage = page;
      this.$emit("set", page);
    },
    previousPage() {
      this.currentPage === null
        ? 1
        : this.setCurrent(Math.max(this.currentPage - 1, 1));
    },
    nextPage() {
      this.currentPage === null
        ? this.totalPagination
        : this.setCurrent(Math.min(this.currentPage + 1, this.totalPagination));
    },
    firstPage() {
      this.setCurrent(1);
    },
    lastPage() {
      this.setCurrent(this.totalPagination);
    },
    element(condition) {
      return condition ? this.classes.activeElement : this.classes.element;
    },
    button(condition) {
      return condition ? this.classes.activeButton : this.classes.button;
    },
  },
};
</script>