---
title: QAngle
---

# Struct QAngle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L10)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

QAngle is a type that contains 3 float, representing an angle.
Degree Euler. Pitch, Yaw, Roll

```csharp
public struct QAngle
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### QAngle(float, float, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L17)

```csharp
public QAngle(float pitch, float yaw, float roll)
```

#### Parameters

- **pitch**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **yaw**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **roll**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### QAngle(QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L24)

```csharp
public QAngle(QAngle other)
```

#### Parameters

- **other**: [QAngle](/docs/api/natives/qangle)

## Fields

### Pitch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L13)

```csharp
public float Pitch
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Roll

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L15)

```csharp
public float Roll
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Yaw

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L14)

```csharp
public float Yaw
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### X

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L37)

X-axis accessor for Pitch rotation (up/down).

```csharp
public float X { readonly get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Remarks

This is just a mapped accessor to the Pitch field.

### Y

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L48)

Y-axis accessor for Yaw rotation (left/right).

```csharp
public float Y { readonly get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Remarks

This is just a mapped accessor to the Yaw field.

### Z

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L59)

Z-axis accessor for Roll rotation (roll/tilt).

```csharp
public float Z { readonly get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Remarks

This is just a mapped accessor to the Roll field.

### Zero

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L69)

```csharp
public static QAngle Zero { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

## Methods

### Equals(object?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L65)

Indicates whether this instance and a specified object are equal.

```csharp
public override readonly bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L66)

Returns the hash code for this instance.

```csharp
public override readonly int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToDirectionVectors(out Vector, out Vector, out Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L116)

Calculates forward, right, and up basis vectors that correspond to this angle.
Usage: <code>angle.ToDirectionVectors(out var forward, out var right, out var up);</code>

```csharp
public readonly void ToDirectionVectors(out Vector forward, out Vector right, out Vector up)
```

#### Parameters

- **forward**: [Vector](/docs/api/natives/vector) - Forward direction (X: north, Z: up).
- **right**: [Vector](/docs/api/natives/vector) - Right direction.
- **up**: [Vector](/docs/api/natives/vector) - Up direction.

### ToRadianEuler()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L64)

```csharp
public readonly RadianEuler ToRadianEuler()
```

#### Returns

- [RadianEuler](/docs/api/natives/radianeuler)

### ToString()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L67)

Returns the fully qualified type name of this instance.

```csharp
public override readonly string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator +(QAngle, QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L72)

```csharp
public static QAngle operator +(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [QAngle](/docs/api/natives/qangle)

#### Returns

- [QAngle](/docs/api/natives/qangle)

### operator /(QAngle, QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L81)

```csharp
public static QAngle operator /(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [QAngle](/docs/api/natives/qangle)

#### Returns

- [QAngle](/docs/api/natives/qangle)

### operator /(QAngle, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L87)

```csharp
public static QAngle operator /(QAngle a, float b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [QAngle](/docs/api/natives/qangle)

### operator ==(QAngle, QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L101)

```csharp
public static bool operator ==(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [QAngle](/docs/api/natives/qangle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(QAngle, QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L104)

```csharp
public static bool operator !=(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [QAngle](/docs/api/natives/qangle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator *(QAngle, QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L78)

```csharp
public static QAngle operator *(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [QAngle](/docs/api/natives/qangle)

#### Returns

- [QAngle](/docs/api/natives/qangle)

### operator *(QAngle, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L84)

```csharp
public static QAngle operator *(QAngle a, float b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [QAngle](/docs/api/natives/qangle)

### operator -(QAngle, QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L75)

```csharp
public static QAngle operator -(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)
- **b**: [QAngle](/docs/api/natives/qangle)

#### Returns

- [QAngle](/docs/api/natives/qangle)

### operator -(QAngle)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L98)

```csharp
public static QAngle operator -(QAngle a)
```

#### Parameters

- **a**: [QAngle](/docs/api/natives/qangle)

#### Returns

- [QAngle](/docs/api/natives/qangle)

