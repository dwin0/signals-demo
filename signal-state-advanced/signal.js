let RUNNING_TASK = null;

export function runAndExtractDependencies(task) {
  RUNNING_TASK = task;
  task.execute(); // reads value during execution (getter function runs)
  RUNNING_TASK = null;
}

class Signal {
  #value;
  #dependencies;

  constructor(initialValue) {
    this.#dependencies = new Set();
    this.#value = initialValue;
  }

  get value() {
    if (RUNNING_TASK) {
      console.log("adding", RUNNING_TASK);
      this.#dependencies.add(RUNNING_TASK);
    }
    return this.#value;
  }

  set value(newValue) {
    if (newValue === this.#value) {
      return;
    }

    this.#value = newValue;
    this.#notifyAllDependencies();
  }

  #notifyAllDependencies() {
    this.#dependencies.forEach((dependency) => dependency.update());
  }
}

export function signal(initialValue) {
  return new Signal(initialValue);
}
