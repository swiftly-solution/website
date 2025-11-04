---
title: Class Helper
---

```csharp
public static class Helper
```

#### Inheritance

#### Inherited Members

## Methods

### AsSchema(nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Helper.cs#L84)

```csharp
public static T AsSchema<T>(nint ptr) where T : ISchemaClass<T>
```

#### Parameters

- **ptr**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The pointer to the schema class.

#### Returns

- T - The schema class.

#### Type Parameters

- **T**:  - The schema class to convert to.

### Colored(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Helper.cs#L65)

```csharp
public static string Colored(this string text)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to replace the color codes in.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The text with the color codes replaced.

### EstimateTextWidth(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Helper.cs#L122)

```csharp
public static float EstimateTextWidth(string text)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text string to measure.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The estimated display width in relative units.

### GetCharWidth(char)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Helper.cs#L95)

```csharp
public static float GetCharWidth(char c)
```

#### Parameters

- **c**: [char](https://learn.microsoft.com/dotnet/api/system.char) - The character to measure.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The estimated display width in relative units.

