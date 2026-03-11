# 🛸 ctrl-ui-kit | KeyVort_OS Design System

Bienvenido al núcleo visual del ecosistema **KeyVort**. Esta librería contiene todos los componentes transversales, átomos y moléculas utilizados en nuestras aplicaciones de productividad y finanzas.

## 🛠 Tech Stack
* **Framework:** Angular 19+ (Signals Architecture).
* **UI Engine:** Ionic Standalone Components.
* **Styling:** SCSS modular.
* **State Management:** Angular Signals (evitar `ngModel` y `ngClass` legacy).

---

## 🎨 Principios de Diseño (Source of Truth)

Para mantener la coherencia en todo el ecosistema, todo componente nuevo debe respetar estas reglas:

### 1. Tipografía Humana y Técnica
* **JetBrains Mono:** Exclusiva para títulos, números, indicadores financieros y elementos que requieran precisión técnica.
* **Inter:** Para etiquetas de interfaz, párrafos y lectura general.

### 2. Ergonomía Visual
* **Fondo Claro (Ergo):** Usar `#F1F5F9` (Slate 100) para evitar la fatiga visual del usuario.
* **Modo Oscuro:** Activado mediante la clase `.dark` en el `body`. Las variables cambian automáticamente.

### 3. Cero Hardcoding
**Prohibido** usar colores hexadecimales en los componentes. Siempre utiliza las variables semánticas:
* `--ctrl-primary`: Color principal de la aplicación activa (Verde en Cash, Índigo en Tasks).
* `--ctrl-bg`: Color de fondo ergonómico.
* `--ctrl-text`: Color de texto dinámico según el tema.

---

## 🤖 El Corazón: Command (Mascota)

Command es nuestro guía visual. Sus animaciones deben seguir los principios de *Squash & Stretch* para sentirse "vivo".

| Personalidad | App | Animación | Efecto Visual |
| :--- | :--- | :--- | :--- |
| `cash-lick` | **Ctrl_Cash** | Caja Registradora | Se aplasta (squash) y muestra `$` amarillo en la cara. |
| `task-done` | **Ctrl_Tasks** | Asentimiento | Baja la cabeza y muestra `✓` naranja en la cara. |

---

## 🚀 Guía para Colaboradores

Si vas a crear o modificar un componente, asegúrate de:

1. **Usar Signals:** Utiliza `input()`, `output()` y `model()` para la reactividad.
2. **Archivos de Barril:** Si creas un componente nuevo, expórtalo en el `public-api.ts`.
3. **Interactividad:** Todo elemento interactivo debe tener transiciones suaves (mínimo `0.2s ease-in-out`).

---

## 📦 Instalación y Uso (Monorepo)

Si trabajas dentro del monorepo principal, puedes compilar la librería para reflejar los cambios:
```bash
ng build ctrl-ui-kit --watch
