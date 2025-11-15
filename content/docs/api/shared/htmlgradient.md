---
title: HtmlGradient
---

```csharp
public static class HtmlGradient
```

#### Inheritance

#### Inherited Members

## Methods

### GenerateGradientText(string, string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L15)

```csharp
public static string GenerateGradientText(string text, string startColor, string endColor)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **startColor**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The starting color in hex format (e.g., "#FF0000").
- **endColor**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The ending color in hex format (e.g., "#0000FF").

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, params string[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L42)

```csharp
public static string GenerateGradientText(string text, params string[] colors)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **colors**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - Array of color stops in hex format (e.g., "#FF0000", "#00FF00", "#0000FF").

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, Color, Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L56)

```csharp
public static string GenerateGradientText(string text, Color startColor, Color endColor)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **startColor**: [Color](/docs/api/shared/natives/color) - The starting SwiftlyS2 native color.
- **endColor**: [Color](/docs/api/shared/natives/color) - The ending SwiftlyS2 native color.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, Color, Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L68)

```csharp
public static string GenerateGradientText(string text, Color startColor, Color endColor)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **startColor**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The starting System.Drawing color.
- **endColor**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color) - The ending System.Drawing color.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, params Color[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L79)

```csharp
public static string GenerateGradientText(string text, params Color[] colors)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **colors**: [Color](/docs/api/shared/natives/color)[] - Array of SwiftlyS2 native color stops.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, params Color[])

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L90)

```csharp
public static string GenerateGradientText(string text, params Color[] colors)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **colors**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)[] - Array of System.Drawing color stops.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

