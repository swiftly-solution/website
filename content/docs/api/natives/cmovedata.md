---
title: CMoveData
---

# Struct CMoveData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L7)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CMoveData
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L10)

```csharp
public CMoveDataBase Base
```

#### Field Value

- [CMoveDataBase](/docs/api/natives/cmovedatabase)

### ClientMaxSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L32)

```csharp
public float ClientMaxSpeed
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ContinuousAcceleration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L23)

Continuous acceleration in units per second squared (u/s²).

```csharp
public Vector ContinuousAcceleration
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### FrameVelocityDelta

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L29)

Immediate delta in u/s. Air acceleration bypasses per second acceleration,
applies up to half of its impulse to the velocity and the rest goes straight into this.

```csharp
public Vector FrameVelocityDelta
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### FrictionDecel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L33)

```csharp
public float FrictionDecel
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GameCodeMovedPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L35)

```csharp
public bool GameCodeMovedPlayer
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InAir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L34)

```csharp
public bool InAir
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputRotated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L18)

World space input vector. Used to compare against the movement services' previous rotation for ground movement stuff.

```csharp
public Vector InputRotated
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### MaxSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L31)

```csharp
public float MaxSpeed
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OldAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L13)

```csharp
public QAngle OldAngles
```

#### Field Value

- [QAngle](/docs/api/natives/qangle)

### OutWishVel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveData.cs#L12)

```csharp
public Vector OutWishVel
```

#### Field Value

- [Vector](/docs/api/natives/vector)

