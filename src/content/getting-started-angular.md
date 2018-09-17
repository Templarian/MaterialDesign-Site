# Angular - Getting Started

Angular content here.

We're still in the process of writing a first party library. Until then a component could be as simple as below.

```js
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  template: `
    <svg version="1.1" viewBox="0 0 24 24" style="display:inline-block;width:1.5rem">
        <path [attr.d]="data" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
    </svg>
  `
})
export class IconComponent  {
    @Input('path') data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
}
```

```js
import { Component } from '@angular/core';
import { mdiAccount } from '@mdi/js';

@Component({
  selector: 'app',
  template: `
    <div>
      <icon path="mdiAccount"></icon>
    </div>
  `
})
export class AppComponent  {
    mdiAccount: string = mdiAccount;
}
```
