---
title: HtmlGradient
---

# Class HtmlGradient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L6)

**Namespace**: [SwiftlyS2.Shared](/docs/api)

**Assembly**: SwiftlyS2.CS2.dll

Provides utility methods for generating HTML text with gradient color effects.

```csharp
public static class HtmlGradient
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [HtmlGradient](/docs/api/htmlgradient)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### GenerateGradientText(string, string, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L15)

Generates gradient colored text by interpolating between two colors.

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

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L42)

Generates gradient colored text by interpolating across multiple color stops.

```csharp
public static string GenerateGradientText(string text, params string[] colors)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **colors**: [string](https://learn.microsoft.com/dotnet/api/system.string)[] - Array of color stops in hex format (e.g., "#FF0000", "#00FF00", "#0000FF").

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, Color, Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L56)

Generates gradient colored text by interpolating between two SwiftlyS2 native colors.

```csharp
public static string GenerateGradientText(string text, Color startColor, Color endColor)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **startColor**: [Color](/docs/api/natives/color) - The starting SwiftlyS2 native color.
- **endColor**: [Color](/docs/api/natives/color) - The ending SwiftlyS2 native color.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, Color, Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L68)

Generates gradient colored text by interpolating between two System.Drawing colors.

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

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L79)

Generates gradient colored text by interpolating across multiple SwiftlyS2 native color stops.

```csharp
public static string GenerateGradientText(string text, params Color[] colors)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **colors**: [Color](/docs/api/natives/color)[] - Array of SwiftlyS2 native color stops.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

### GenerateGradientText(string, params Color[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/HtmlGradient.cs#L90)

Generates gradient colored text by interpolating across multiple System.Drawing color stops.

```csharp
public static string GenerateGradientText(string text, params Color[] colors)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to apply gradient to.
- **colors**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)[] - Array of System.Drawing color stops.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - HTML string with each character wrapped in a colored font tag.

