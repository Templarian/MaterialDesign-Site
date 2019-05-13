# Windows - Getting Started

The Universal Windows Platform and WPF both use a vector format similar to SVG.

## Inline XAML

If you wanted to display the icon at `48x48` place the SVG path data in place of `M...Z`.

```
<Viewbox Width="48" Height="48">
    <Canvas Width="24" Height="24">
        <Path Data="M...Z" Fill="Black" />
    </Canvas>
</Viewbox>
```

## As a WPF UserControl 

See the VectorIcon project:

[alansingfield/VectorIcon Readme](https://github.com/alansingfield/VectorIcon/blob/master/README.md)
