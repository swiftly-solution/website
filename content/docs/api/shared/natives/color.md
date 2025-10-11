---
title: Color
---

```csharp
public struct Color : IEquatable<Color>
```

#### Implements

#### Inherited Members

## Constructors

### **Color(byte, byte, byte, byte)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L13)

```csharp
public Color(byte r, byte g, byte b, byte a)
```

#### Parameters

- **r**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **g**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **b**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **a**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **Color(byte, byte, byte)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L20)

```csharp
public Color(byte r, byte g, byte b)
```

#### Parameters

- **r**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **g**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)
- **b**: [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **Color(int, int, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L23)

```csharp
public Color(int r, int g, int b)
```

#### Parameters

- **r**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **g**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **b**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Color(int, int, int, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L25)

```csharp
public Color(int r, int g, int b, int a)
```

#### Parameters

- **r**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **g**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **b**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **a**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Color(char, char, char, char)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L28)

```csharp
public Color(char r, char g, char b, char a)
```

#### Parameters

- **r**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **g**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **b**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **a**: [char](https://learn.microsoft.com/dotnet/api/system.char)

### **Color(char, char, char)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L31)

```csharp
public Color(char r, char g, char b)
```

#### Parameters

- **r**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **g**: [char](https://learn.microsoft.com/dotnet/api/system.char)
- **b**: [char](https://learn.microsoft.com/dotnet/api/system.char)

## Fields

### **A** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L11)

```csharp
public byte A
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **B** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L10)

```csharp
public byte B
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **G** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L9)

```csharp
public byte G
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### **R** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L8)

```csharp
public byte R
```

#### Field Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### **Equals(object?)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L71)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### **Equals(Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L74)

```csharp
public bool Equals(Color other)
```

#### Parameters

- **other**: [Color](/docs/api/shared/natives/color) - An object to compare with this object.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### **FromBuiltin(Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L34)

```csharp
public static Color FromBuiltin(Color color)
```

#### Parameters

- **color**: [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

#### Returns

- [Color](/docs/api/shared/natives/color)

### **FromHex(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L42)

```csharp
public static Color FromHex(string hex)
```

#### Parameters

- **hex**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Color](/docs/api/shared/natives/color)

### **FromInt32(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L67)

```csharp
public static Color FromInt32(int color)
```

#### Parameters

- **color**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [Color](/docs/api/shared/natives/color)

### **GetHashCode()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L72)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### **ToBuiltin()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L38)

```csharp
public Color ToBuiltin()
```

#### Returns

- [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### **ToHex(bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L55)

```csharp
public string ToHex(bool includeAlpha = false)
```

#### Parameters

- **includeAlpha**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ToInt32()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L63)

```csharp
public int ToInt32()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ToString()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L59)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### **operator ==(Color, Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L79)

```csharp
public static bool operator ==(Color left, Color right)
```

#### Parameters

- **left**: [Color](/docs/api/shared/natives/color)
- **right**: [Color](/docs/api/shared/natives/color)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **operator !=(Color, Color)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Color.cs#L80)

```csharp
public static bool operator !=(Color left, Color right)
```

#### Parameters

- **left**: [Color](/docs/api/shared/natives/color)
- **right**: [Color](/docs/api/shared/natives/color)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

