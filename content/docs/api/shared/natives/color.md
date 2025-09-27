---
title: Color
---

```csharp
public struct Color
```

#### Inherited Members

## Constructors

**Color(byte, byte, byte, byte)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L13)

```csharp
public Color(byte r, byte g, byte b, byte a)
```

#### Parameters

- **r**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **g**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **b**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **a**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**Color(byte, byte, byte)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L20)

```csharp
public Color(byte r, byte g, byte b)
```

#### Parameters

- **r**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **g**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **b**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**Color(char, char, char, char)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L23)

```csharp
public Color(char r, char g, char b, char a)
```

#### Parameters

- **r**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **g**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **b**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **a**: [char](https://learn.microsoft.com/dotnet/api/system.char)

**Color(char, char, char)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L26)

```csharp
public Color(char r, char g, char b)
```

#### Parameters

- **r**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **g**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **b**: [char](https://learn.microsoft.com/dotnet/api/system.char)

## Fields

**A** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L11)

```csharp
public byte A
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**B** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L10)

```csharp
public byte B
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**G** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L9)

```csharp
public byte G
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**R** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L8)

```csharp
public byte R
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

**FromBuiltin(Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L29)

```csharp
public static Color FromBuiltin(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

#### Returns

- [Color](/docs/api/shared/natives/color)

**FromHex(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L37)

```csharp
public static Color FromHex(string hex)
```

#### Parameters

- **hex**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Color](/docs/api/shared/natives/color)

**FromInt32(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L62)

```csharp
public static Color FromInt32(int color)
```

#### Parameters

- **color**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [Color](/docs/api/shared/natives/color)

**ToBuiltin()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L33)

```csharp
public Color ToBuiltin()
```

#### Returns

- [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

**ToHex(bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L50)

```csharp
public string ToHex(bool includeAlpha = false)
```

#### Parameters

- **includeAlpha**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**ToInt32()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L58)

```csharp
public int ToInt32()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ToString()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L54)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

