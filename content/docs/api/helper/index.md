---
title: Class Helper
---

# Class Helper

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L7)

**Namespace**: [SwiftlyS2.Shared](/docs/api)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class Helper
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [Helper](/docs/api/helper)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AsProtobuf(nint, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L98)

Convert the pointer to the protobuf class.

```csharp
public static T AsProtobuf<T>(nint ptr, bool manuallyAllocated) where T : ITypedProtobuf<T>
```

#### Parameters

- **ptr**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The pointer to the protobuf class.
- **manuallyAllocated**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the pointer is manually allocated.

#### Returns

- T - The protobuf class.

#### Type Parameters

- **T**:  - The protobuf class to convert to.

### AsSchema(nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L86)

Convert the pointer to the schema class.

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

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L65)

Replace the color codes in the text with the corresponding color codes.

```csharp
public static string Colored(this string text)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text to replace the color codes in.

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The text with the color codes replaced.

### EstimateTextWidth(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L145)

Estimates the display width of a text string based on character types.

```csharp
public static float EstimateTextWidth(string text)
```

#### Parameters

- **text**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The text string to measure.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The estimated display width in relative units.

### GetCharWidth(char)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L119)

Estimates the display width of a character based on its type.
Inspired by: https://github.com/spectreconsole/wcwidth

```csharp
public static float GetCharWidth(char c)
```

#### Parameters

- **c**: [char](https://learn.microsoft.com/dotnet/api/system.char) - The character to measure.

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single) - The estimated display width in relative units.

### GetSchemaSize()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L108)

Get the size of a schema class.

```csharp
public static int GetSchemaSize<T>() where T : ISchemaClass<T>
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - The size of the schema class.

#### Type Parameters

- **T**:  - The schema class to get the size of.

### ParseHexColor(string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Helper.cs#L153)

Parses a hex color string and returns the RGBA color components.

```csharp
public static (int? r, int? g, int? b, int? a) ParseHexColor(string hexColor, bool alphaFirst = false)
```

#### Parameters

- **hexColor**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The hex color string to parse.
- **alphaFirst**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether alpha component comes first (ARGB format). Default is false (RGBA format).

#### Returns

- ([int](https://learn.microsoft.com/dotnet/api/system.int32)? [r](https://learn.microsoft.com/dotnet/api/system.valuetuple-system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32--.r), [int](https://learn.microsoft.com/dotnet/api/system.int32)? [g](https://learn.microsoft.com/dotnet/api/system.valuetuple-system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32--.g), [int](https://learn.microsoft.com/dotnet/api/system.int32)? [b](https://learn.microsoft.com/dotnet/api/system.valuetuple-system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32--.b), [int](https://learn.microsoft.com/dotnet/api/system.int32)? [a](https://learn.microsoft.com/dotnet/api/system.valuetuple-system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32-,system.nullable-system.int32--.a)) - Color components (R, G, B, A) or nulls if invalid. Alpha defaults to 255 for RGB format.

