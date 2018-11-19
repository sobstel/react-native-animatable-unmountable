react-native-animatable-unmountable
===================================

Declarative transitions and animations for React Native (with unmount effect).

It extends [react-native-animatable](https://github.com/oblador/react-native-animatable)
with possibility to define unmount transitions and animations.

## Installation

`$ npm install react-native-animatable-unmountable --save`

## Usage

See [react-native-animatable](https://github.com/oblador/react-native-animatable) for details.
It can be used exactly same way.

```js
import * as Animatable from 'react-native-animatable-unmountable';
MyCustomComponent = Animatable.animatableUnmountable(MyCustomComponent);
```

```html
<Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
```

### Unmount animations

TODO

## Additional props

| Prop | Description | Default |
|---|---|---|
|**`didMount`**||*None*|
|**`didUnmount`**||*None*|

TODO

## Example

* `cd example`
* `expo start`
