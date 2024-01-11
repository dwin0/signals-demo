import { runAndExtractDependencies } from "./signal.js";

class Effect {
  #effectFn;

  constructor(fn) {
    this.#effectFn = fn;
    runAndExtractDependencies(this);
  }

  execute() {
    this.#effectFn();
  }

  update() {
    this.execute();
  }
}

export function effect(fn) {
  return new Effect(fn);
}
