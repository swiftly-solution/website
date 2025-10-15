---
title: QAngle
---

```csharp
public struct QAngle
```

#### Inherited Members

## Constructors

### QAngle(float, float, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L18)

```csharp
public QAngle(float pitch, float yaw, float roll)
```

#### Parameters

- **pitch**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **yaw**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **roll**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### QAngle(QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L25)

```csharp
public QAngle(QAngle other)
```

#### Parameters

- **other**: [QAngle](/docs/api/shared/natives/qangle)

## Fields

### Pitch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L14)

```csharp
public float Pitch
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Roll

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L16)

```csharp
public float Roll
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Yaw

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L15)

```csharp
public float Yaw
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### Zero

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L38)

```csharp
public static QAngle Zero { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

## Methods

### Equals(object?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L34)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

- **obj**: [object](https://learn.microsoft.com/dotnet/api/system.object)? - The object to compare with the current instance.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if <code class="paramref">obj</code> and this instance are the same type and represent the same value; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### GetHashCode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L35)

```csharp
public override int GetHashCode()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - A 32-bit signed integer that is the hash code for this instance.

### ToRadianEuler()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L32)

```csharp
public RadianEuler ToRadianEuler()
```

#### Returns

- [RadianEuler](/docs/api/shared/natives/radianeuler)

### ToString()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L36)

```csharp
public override string ToString()
```

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string) - The fully qualified type name.

## Operators

### operator +(QAngle, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L41)

```csharp
public static QAngle operator +(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [QAngle](/docs/api/shared/natives/qangle)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### operator /(QAngle, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L51)

```csharp
public static QAngle operator /(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [QAngle](/docs/api/shared/natives/qangle)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### operator /(QAngle, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L57)

```csharp
public static QAngle operator /(QAngle a, float b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### operator ==(QAngle, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L69)

```csharp
public static bool operator ==(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [QAngle](/docs/api/shared/natives/qangle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator !=(QAngle, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L72)

```csharp
public static bool operator !=(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [QAngle](/docs/api/shared/natives/qangle)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator *(QAngle, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L48)

```csharp
public static QAngle operator *(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [QAngle](/docs/api/shared/natives/qangle)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### operator *(QAngle, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L54)

```csharp
public static QAngle operator *(QAngle a, float b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### operator -(QAngle, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L45)

```csharp
public static QAngle operator -(QAngle a, QAngle b)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)
- **b**: [QAngle](/docs/api/shared/natives/qangle)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### operator -(QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/QAngle.cs#L66)

```csharp
public static QAngle operator -(QAngle a)
```

#### Parameters

- **a**: [QAngle](/docs/api/shared/natives/qangle)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

