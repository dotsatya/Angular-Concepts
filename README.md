# Angular Concepts ⚡

Angular Concepts is a personal learning and practice repository containing hands-on Angular examples. Each example is implemented as a small, focused component so that one Angular concept can be explored without the complexity of a large application.

## 📚 Topics Covered

### 🧱 Angular Fundamentals

- Standalone components
- Interpolation
- Event handling and event objects
- Conditional rendering with `@if`, `@else`, and `@switch`
- List rendering with `@for` and `@empty`
- Basic data binding
- Template reference variables

### ⚙️ Signals

- `signal()`
- Writable signals with `.set()` and `.update()`
- `computed()`
- `effect()`
- Signals compared with regular component properties

### 🎨 Styling

- Tailwind CSS utility classes
- Responsive layouts and utility-based styling
- Dynamic content presentation

> 📝 Forms, services, routing, HTTP, and RxJS are planned topics and are not currently marked as implemented.

## 🗂️ Project Structure

```text
src/
└── app/
	├── addition-component/
	├── computed-signals/
	├── counter/
	├── event-component/
	├── if-else-component/
	├── loop-component/
	├── signal-component/
	├── app.html
	├── app.ts
	└── ...
```

Each folder contains a focused example for a particular Angular concept, including its component class, template, styles, and tests where applicable.

## 🧪 Examples

| Example | Concept | Description |
| --- | --- | --- |
| ➕ `addition-component` | Event handling and input events | Reads two numbers and displays their sum. |
| 🔢 `computed-signals` | `computed()` and `effect()` | Derives a value from signals and reacts to signal changes. |
| 🔁 `counter` | Component methods and events | Implements increment, reset, and decrement actions. |
| 🖱️ `event-component` | Event handling | Inspects click and input events from the template. |
| 🎨 `if-else-component` | Conditional rendering | Selects a color and renders the matching result. |
| 🔄 `loop-component` | `@for` control flow | Renders a student list and removes individual entries. |
| 📡 `signal-component` | Writable signals | Compares signal updates with updates to a regular property. |

## 📈 Learning Progress

- [x] Components
- [x] Interpolation and basic data binding
- [x] Event handling
- [x] Signals
- [x] Computed signals
- [x] Effects
- [x] Conditional rendering
- [x] Loops
- [x] Tailwind CSS styling
- [ ] Forms
- [ ] Services
- [ ] Dependency Injection
- [ ] Routing
- [ ] HTTP / API integration
- [ ] RxJS
- [ ] Advanced Angular concepts

## 🛠️ Tech Stack

- Angular
- TypeScript
- HTML
- CSS
- Tailwind CSS
- Angular Signals
- Git and GitHub

## 🚀 How to Run

Install the project dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

Then open `http://localhost:4200/` in a browser. The application reloads automatically when source files change.

## 🧭 How This Repository Is Organized

- Each Angular concept is kept in its own component and folder.
- Examples are intentionally small so individual concepts are easy to read and understand.
- New concepts can be added as focused components without restructuring the entire project.

## 🔮 Future Concepts

The following topics may be added as the repository grows:

- Forms and form validation
- Services
- Dependency Injection
- Routing
- HTTP Client and APIs
- RxJS and Observables
- Lifecycle hooks
- Directives
- Pipes
- Component communication
- `@Input` and `@Output`
- `ViewChild`
- Content projection
- Angular Material
- Authentication
- State management

## 🎯 Goal

The goal of this repository is to build practical Angular understanding by implementing concepts individually, learning from small experiments, and gradually progressing toward larger applications.
