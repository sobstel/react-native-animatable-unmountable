# react-native-animatable-unmountable

Declarative transitions and animations for React Native (with unmount effect).

It extends [react-native-animatable](https://github.com/oblador/react-native-animatable)
with possibility to define unmount transitions and animations.

![preview](http://g.recordit.co/C94VH4Y1Z7.gif)

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

Key is to define `mounted` property and set it true (mounted) or false (unmounted).
See example.

```html
<Animatable.Text
  mounted={this.state.mounted}
  animation='flipInY'
  duration={2000}
  unmountAnimation='flipOutY'
  unmountDuration={2000}
>
  If you're going through hell, keep going
</Animatable.Text>
```

## Additional props

| Prop | Description | Default |
|---|---|---|
|**`mounted`**|Set to false to unmount component and trigger unmount animation|*true*|
|**`unmountAnimation`**|Name of the unmount animation.|*None*|
|**`unmountDuration`**|For how long the unmount animation will run (milliseconds). |`1000`|
|**`unmountDelay`**|Optionally delay the unmount animation (milliseconds).|`0`|

## Example

* `cd example`
* `expo start`
