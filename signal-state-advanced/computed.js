import { runAndExtractDependencies } from "./signal.js";

class Computed {
  #computeFn;
  #value;
  #isStale;

  constructor(computeFn) {
    this.#computeFn = computeFn;
    this.#isStale = true;
    runAndExtractDependencies(this);
  }

  get value() {
    if (this.#isStale) {
      this.#value = this.#computeFn();
      this.#isStale = false;
    }

    return this.#value;
  }

  execute() {
    this.#value = this.#computeFn();
    this.#isStale = false;
  }

  update() {
    this.#isStale = true;
  }
}

export function computed(fn) {
  return new Computed(fn);
}
