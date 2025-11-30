---
title: Vector4D
---

# Struct Vector4D

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct Vector4D
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Vector4D(float, float, float, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L13)

```csharp
public Vector4D(float x, float y, float z, float w)
```

#### Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **w**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### Vector4D(Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L20)

```csharp
public Vector4D(Vector4D other)
```

#### Parameters

- **other**: [Vector4D](/docs/api/natives/vector4d)

## Fields

### W

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L11)

```csharp
public float W
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### X

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L8)

```csharp
public float X
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Y

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L9)

```csharp
public float Y
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Z

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L10)

```csharp
public float Z
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### One

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L41)

```csharp
public static Vector4D One { get; }
```

#### Property Value

- [Vector4D](/docs/api/natives/vector4d)

### Zero

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L39)

```csharp
public static Vector4D Zero { get; }
```

#### Property Value

- [Vector4D](/docs/api/natives/vector4d)

## Methods

### Deconstruct(out float, out float, out float, out float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L77)

```csharp
public void Deconstruct(out float x, out float y, out float z, out float w)
```

#### Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **w**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### Dot(Vector4D, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L43)

```csharp
public static float Dot(Vector4D a, Vector4D b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Dot(Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L46)

```csharp
public float Dot(Vector4D other)
```

#### Parameters

- **other**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Equals(object?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L35)

Indicates whether this instance and a specified object are equal.

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### FromBuiltin(Vector4)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L31)

```csharp
public static Vector4D FromBuiltin(Vector4 vector)
```

#### Parameters

- **vector**: [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L36)

Returns the hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### Length()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L49)

```csharp
public float Length()
```

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LengthSquared()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L52)

```csharp
public float LengthSquared()
```

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Normalize()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L55)

```csharp
public void Normalize()
```

### Normalized()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L67)

```csharp
public Vector4D Normalized()
```

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### ToBuiltin()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L27)

```csharp
public Vector4 ToBuiltin()
```

#### Returns

- [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L37)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator +(Vector4D, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L84)

```csharp
public static Vector4D operator +(Vector4D a, Vector4D b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### operator /(Vector4D, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L94)

```csharp
public static Vector4D operator /(Vector4D a, Vector4D b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### operator /(Vector4D, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L106)

```csharp
public static Vector4D operator /(Vector4D a, float b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### operator ==(Vector4D, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L120)

```csharp
public static bool operator ==(Vector4D a, Vector4D b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(Vector4D, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L124)

```csharp
public static bool operator !=(Vector4D a, Vector4D b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator *(Vector4D, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L90)

```csharp
public static Vector4D operator *(Vector4D a, Vector4D b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### operator *(Vector4D, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L98)

```csharp
public static Vector4D operator *(Vector4D a, float b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### operator *(float, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L102)

```csharp
public static Vector4D operator *(float b, Vector4D a)
```

#### Parameters

- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **a**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### operator -(Vector4D, Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L87)

```csharp
public static Vector4D operator -(Vector4D a, Vector4D b)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)
- **b**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

### operator -(Vector4D)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector4D.cs#L116)

```csharp
public static Vector4D operator -(Vector4D a)
```

#### Parameters

- **a**: [Vector4D](/docs/api/natives/vector4d)

#### Returns

- [Vector4D](/docs/api/natives/vector4d)

