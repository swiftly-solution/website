---
title: Vector2D
---

```csharp
public struct Vector2D
```

#### Inherited Members

## Constructors

**Vector2D(float, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L15)

```csharp
public Vector2D(float x, float y)
```

#### Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)

**Vector2D(Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L20)

```csharp
public Vector2D(Vector2D other)
```

#### Parameters

- **other**: [Vector2D](/docs/api/shared/natives/vector2d)

## Fields

**X** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L12)

```csharp
public float X
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Y** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L13)

```csharp
public float Y
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

**One** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L85)

```csharp
public static Vector2D One { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

**Zero** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L83)

```csharp
public static Vector2D Zero { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

## Methods

**Deconstruct(out float, out float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L73)

```csharp
public void Deconstruct(out float x, out float y)
```

#### Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)

**Distance(Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L40)

```csharp
public float Distance(Vector2D other)
```

#### Parameters

- **other**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DistanceSquared(Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L44)

```csharp
public float DistanceSquared(Vector2D other)
```

#### Parameters

- **other**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Dot(Vector2D, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L47)

```csharp
public static float Dot(Vector2D a, Vector2D b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Dot(Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L50)

```csharp
public float Dot(Vector2D other)
```

#### Parameters

- **other**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Equals(object?)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L79)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

**FromBuiltin(Vector2)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L29)

```csharp
public static Vector2D FromBuiltin(Vector2 vector)
```

#### Parameters

- **vector**: [Vector2](https://learn.microsoft.com/dotnet/api/system.numerics.vector2)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**GetHashCode()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L80)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

**Length()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L33)

```csharp
public float Length()
```

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LengthSquared()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L37)

```csharp
public float LengthSquared()
```

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Normalize()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L53)

```csharp
public void Normalize()
```

**Normalized()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L63)

```csharp
public Vector2D Normalized()
```

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**ToBuiltin()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L25)

```csharp
public Vector2 ToBuiltin()
```

#### Returns

- [Vector2](https://learn.microsoft.com/dotnet/api/system.numerics.vector2)

**ToString()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L81)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

**operator +(Vector2D, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L88)

```csharp
public static Vector2D operator +(Vector2D a, Vector2D b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**operator /(Vector2D, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L98)

```csharp
public static Vector2D operator /(Vector2D a, Vector2D b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**operator /(Vector2D, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L107)

```csharp
public static Vector2D operator /(Vector2D a, float b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**operator ==(Vector2D, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L119)

```csharp
public static bool operator ==(Vector2D a, Vector2D b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**operator !=(Vector2D, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L122)

```csharp
public static bool operator !=(Vector2D a, Vector2D b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**operator *(Vector2D, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L95)

```csharp
public static Vector2D operator *(Vector2D a, Vector2D b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**operator *(Vector2D, float)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L101)

```csharp
public static Vector2D operator *(Vector2D a, float b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**operator *(float, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L104)

```csharp
public static Vector2D operator *(float b, Vector2D a)
```

#### Parameters

- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **a**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**operator -(Vector2D, Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L92)

```csharp
public static Vector2D operator -(Vector2D a, Vector2D b)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)
- **b**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

**operator -(Vector2D)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector2D.cs#L116)

```csharp
public static Vector2D operator -(Vector2D a)
```

#### Parameters

- **a**: [Vector2D](/docs/api/shared/natives/vector2d)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

