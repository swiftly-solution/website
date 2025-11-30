---
title: CMoveDataBase
---

# Struct CMoveDataBase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L9)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CMoveDataBase
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### AbsOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L41)

```csharp
public Vector AbsOrigin
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### AbsViewAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L25)

```csharp
public QAngle AbsViewAngles
```

#### Field Value

- [QAngle](/docs/api/natives/qangle)

### Angles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L32)

```csharp
public QAngle Angles
```

#### Field Value

- [QAngle](/docs/api/natives/qangle)

### AttackSubtickMoves

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L35)

```csharp
public CUtlVector<SubtickMove> AttackSubtickMoves
```

#### Field Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SubtickMove](/docs/api/natives/subtickmove)>

### CollisionNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L39)

```csharp
public Vector CollisionNormal
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### ForwardMove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L28)

```csharp
public float ForwardMove
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroundNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L40)

```csharp
public Vector GroundNormal
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### HasSubtickInputs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L36)

```csharp
public bool HasSubtickInputs
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastMovementImpulses

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L27)

```csharp
public Vector LastMovementImpulses
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### PlayerHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L24)

```csharp
public CHandle<CCSPlayerPawn> PlayerHandle
```

#### Field Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### SideMove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L29)

```csharp
public float SideMove
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SubtickEndFraction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L45)

```csharp
public float SubtickEndFraction
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SubtickMoves

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L34)

```csharp
public CUtlVector<SubtickMove> SubtickMoves
```

#### Field Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SubtickMove](/docs/api/natives/subtickmove)>

### SubtickStartFraction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L44)

```csharp
public float SubtickStartFraction
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TargetTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L43)

```csharp
public int TargetTick
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TickCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L42)

```csharp
public int TickCount
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TouchList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L38)

```csharp
public CUtlVector<TouchListT> TouchList
```

#### Field Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[TouchListT](/docs/api/natives/touchlistt)>

### Unknown

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L33)

```csharp
public Vector Unknown
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### UnknownFloat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L37)

```csharp
public float UnknownFloat
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UpMove

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L30)

```csharp
public float UpMove
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Velocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L31)

```csharp
public Vector Velocity
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### ViewAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L26)

```csharp
public QAngle ViewAngles
```

#### Field Value

- [QAngle](/docs/api/natives/qangle)

## Properties

### HasZeroFrametime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L14)

```csharp
public bool HasZeroFrametime { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLateCommand

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CMoveDataBase.cs#L19)

```csharp
public bool IsLateCommand { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

