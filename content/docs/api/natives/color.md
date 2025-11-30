---
title: Color
---

# Struct Color

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct Color : IEquatable<Color>
```

#### Implements

- [IEquatable<Color>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Color(byte, byte, byte, byte)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L13)

```csharp
public Color(byte r, byte g, byte b, byte a)
```

#### Parameters

- **r**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **g**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **b**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **a**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Color(byte, byte, byte)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L21)

```csharp
public Color(byte r, byte g, byte b)
```

#### Parameters

- **r**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **g**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **b**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Color(int, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L25)

```csharp
public Color(int r, int g, int b)
```

#### Parameters

- **r**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **g**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **b**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Color(int, int, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L28)

```csharp
public Color(int r, int g, int b, int a)
```

#### Parameters

- **r**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **g**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **b**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **a**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Color(char, char, char, char)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L31)

```csharp
public Color(char r, char g, char b, char a)
```

#### Parameters

- **r**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **g**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **b**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **a**: [char](https://learn.microsoft.com/dotnet/api/system.char)

### Color(char, char, char)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L35)

```csharp
public Color(char r, char g, char b)
```

#### Parameters

- **r**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **g**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **b**: [char](https://learn.microsoft.com/dotnet/api/system.char)

## Fields

### A

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L11)

```csharp
public byte A
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### B

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L10)

```csharp
public byte B
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### G

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L9)

```csharp
public byte G
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### R

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L8)

```csharp
public byte R
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### Equals(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L72)

Indicates whether the current object is equal to another object of the same type.

```csharp
public readonly bool Equals(Color other)
```

#### Parameters

- **other**: [Color](/docs/api/natives/color) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(object?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L78)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### FromBuiltin(Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L44)

```csharp
public static Color FromBuiltin(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

#### Returns

- [Color](/docs/api/natives/color)

### FromHex(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L49)

```csharp
public static Color FromHex(string hex)
```

#### Parameters

- **hex**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Color](/docs/api/natives/color)

### FromInt32(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L39)

```csharp
public static Color FromInt32(int color)
```

#### Parameters

- **color**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [Color](/docs/api/natives/color)

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L79)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToBuiltin()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L57)

```csharp
public readonly Color ToBuiltin()
```

#### Returns

- [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### ToHex(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L67)

```csharp
public readonly string ToHex(bool includeAlpha = false)
```

#### Parameters

- **includeAlpha**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToInt32()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L62)

```csharp
public readonly int ToInt32()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L77)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator ==(Color, Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L81)

```csharp
public static bool operator ==(Color left, Color right)
```

#### Parameters

- **left**: [Color](/docs/api/natives/color)
- **right**: [Color](/docs/api/natives/color)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(Color, Color)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L82)

```csharp
public static bool operator !=(Color left, Color right)
```

#### Parameters

- **left**: [Color](/docs/api/natives/color)
- **right**: [Color](/docs/api/natives/color)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

