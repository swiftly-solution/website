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

