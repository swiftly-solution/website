---
title: Vector
---

# Struct Vector

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L12)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

3-Dimensional vector for source 2.

No more cssharp chaos.

```csharp
public struct Vector
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Vector(float, float, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L20)

```csharp
public Vector(float x, float y, float z)
```

#### Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### Vector(Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L27)

```csharp
public Vector(Vector other)
```

#### Parameters

- **other**: [Vector](/docs/api/natives/vector)

## Fields

### X

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L15)

```csharp
public float X
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Y

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L16)

```csharp
public float Y
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Z

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L17)

```csharp
public float Z
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### One

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L129)

```csharp
public static Vector One { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Zero

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L128)

```csharp
public static Vector Zero { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

## Methods

### Cross(Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L51)

```csharp
public readonly Vector Cross(Vector other)
```

#### Parameters

- **other**: [Vector](/docs/api/natives/vector)

#### Returns

- [Vector](/docs/api/natives/vector)

### Deconstruct(out float, out float, out float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L82)

```csharp
public readonly void Deconstruct(out float x, out float y, out float z)
```

#### Parameters

- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### Distance(Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L45)

```csharp
public readonly float Distance(Vector other)
```

#### Parameters

- **other**: [Vector](/docs/api/natives/vector)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceSquared(Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L48)

```csharp
public readonly float DistanceSquared(Vector other)
```

#### Parameters

- **other**: [Vector](/docs/api/natives/vector)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Dot(Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L54)

```csharp
public readonly float Dot(Vector other)
```

#### Parameters

- **other**: [Vector](/docs/api/natives/vector)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Dot(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L131)

```csharp
public static float Dot(Vector a, Vector b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [Vector](/docs/api/natives/vector)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Equals(object?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L123)

Indicates whether this instance and a specified object are equal.

```csharp
public override readonly bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### FromBuiltin(Vector3)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L127)

```csharp
public static Vector FromBuiltin(Vector3 vector)
```

#### Parameters

- **vector**: [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Returns

- [Vector](/docs/api/natives/vector)

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L124)

Returns the hash code for this instance.

```csharp
public override readonly int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### Length()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L39)

```csharp
public readonly float Length()
```

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LengthSquared()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L42)

```csharp
public readonly float LengthSquared()
```

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Normalize()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L57)

```csharp
public void Normalize()
```

### Normalized()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L70)

```csharp
public readonly Vector Normalized()
```

#### Returns

- [Vector](/docs/api/natives/vector)

### ToBuiltin()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L34)

```csharp
public readonly Vector3 ToBuiltin()
```

#### Returns

- [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### ToQAngles()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L94)

Converts this forward vector into Euler QAngles (pitch, yaw, roll).
Usage: <code>forward.ToQAngles(out var angles);</code>

```csharp
public readonly QAngle ToQAngles()
```

#### Returns

- [QAngle](/docs/api/natives/qangle) - Resulting <xref href="SwiftlyS2.Shared.Natives.QAngle" data-throw-if-not-resolved="false"></xref>.

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L125)

Returns the fully qualified type name of this instance.

```csharp
public override readonly string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator +(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L134)

```csharp
public static Vector operator +(Vector a, Vector b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [Vector](/docs/api/natives/vector)

#### Returns

- [Vector](/docs/api/natives/vector)

### operator /(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L143)

```csharp
public static Vector operator /(Vector a, Vector b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [Vector](/docs/api/natives/vector)

#### Returns

- [Vector](/docs/api/natives/vector)

### operator /(Vector, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L152)

```csharp
public static Vector operator /(Vector a, float b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Vector](/docs/api/natives/vector)

### operator ==(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L166)

```csharp
public static bool operator ==(Vector a, Vector b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [Vector](/docs/api/natives/vector)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L169)

```csharp
public static bool operator !=(Vector a, Vector b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [Vector](/docs/api/natives/vector)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator *(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L140)

```csharp
public static Vector operator *(Vector a, Vector b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [Vector](/docs/api/natives/vector)

#### Returns

- [Vector](/docs/api/natives/vector)

### operator *(Vector, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L146)

```csharp
public static Vector operator *(Vector a, float b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [Vector](/docs/api/natives/vector)

### operator *(float, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L149)

```csharp
public static Vector operator *(float b, Vector a)
```

#### Parameters

- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **a**: [Vector](/docs/api/natives/vector)

#### Returns

- [Vector](/docs/api/natives/vector)

### operator -(Vector, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L137)

```csharp
public static Vector operator -(Vector a, Vector b)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)
- **b**: [Vector](/docs/api/natives/vector)

#### Returns

- [Vector](/docs/api/natives/vector)

### operator -(Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/Vector.cs#L163)

```csharp
public static Vector operator -(Vector a)
```

#### Parameters

- **a**: [Vector](/docs/api/natives/vector)

#### Returns

- [Vector](/docs/api/natives/vector)

