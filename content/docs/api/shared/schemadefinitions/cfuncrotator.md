---
title: CFuncRotator
---

```csharp
public interface CFuncRotator : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncRotator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AngularVelocity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L71)

```csharp
ref QAngle AngularVelocity { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### DistanceAlongArcTraveled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L27)

```csharp
ref float DistanceAlongArcTraveled { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasTargetOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L65)

```csharp
ref bool HasTargetOverride { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReversing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L21)

```csharp
ref bool IsReversing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRotating

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L19)

```csharp
ref bool IsRotating { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LSInit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L39)

```csharp
ref Quaternion LSInit { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### LSOrientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L41)

```csharp
ref Quaternion LSOrientation { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### LSPrevChange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L33)

```csharp
ref Quaternion LSPrevChange { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### LookAtForcedUp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L73)

```csharp
ref Vector LookAtForcedUp { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### OnOscillate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L47)

```csharp
CEntityIOOutput OnOscillate { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnOscillateEndArrive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L53)

```csharp
CEntityIOOutput OnOscillateEndArrive { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnOscillateEndDepart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L55)

```csharp
CEntityIOOutput OnOscillateEndDepart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnOscillateStartArrive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L49)

```csharp
CEntityIOOutput OnOscillateStartArrive { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnOscillateStartDepart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L51)

```csharp
CEntityIOOutput OnOscillateStartDepart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnRotationCompleted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L45)

```csharp
CEntityIOOutput OnRotationCompleted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnRotationStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L43)

```csharp
CEntityIOOutput OnRotationStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OrientationOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L67)

```csharp
ref Quaternion OrientationOverride { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### OscillateCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L59)

```csharp
ref int OscillateCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OscillateDepart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L57)

```csharp
ref bool OscillateDepart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PrevRotateType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L63)

```csharp
ref CFuncRotator__Rotate_t PrevRotateType { get; }
```

#### Property Value

- [CFuncRotator__Rotate_t](/docs/api/shared/schemadefinitions/cfuncrotator__rotate_t)

### RecordHistory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L77)

```csharp
ref bool RecordHistory { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReturningToPreviousOrientation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L81)

```csharp
ref bool ReturningToPreviousOrientation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RotateType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L61)

```csharp
ref CFuncRotator__Rotate_t RotateType { get; }
```

#### Property Value

- [CFuncRotator__Rotate_t](/docs/api/shared/schemadefinitions/cfuncrotator__rotate_t)

### RotatorHistory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L79)

```csharp
ref CUtlVector<RotatorHistoryEntry_t> RotatorHistory { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RotatorHistoryEntry_t](/docs/api/shared/schemadefinitions/rotatorhistoryentry_t)>

### RotatorQueue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L83)

```csharp
ref CUtlVector<RotatorQueueEntry_t> RotatorQueue { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RotatorQueueEntry_t](/docs/api/shared/schemadefinitions/rotatorqueueentry_t)>

### RotatorQueueHistory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L85)

```csharp
ref CUtlVector<RotatorHistoryEntry_t> RotatorQueueHistory { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RotatorHistoryEntry_t](/docs/api/shared/schemadefinitions/rotatorhistoryentry_t)>

### RotatorTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L17)

```csharp
ref CHandle<CBaseEntity> RotatorTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### SpaceOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L69)

```csharp
ref RotatorTargetSpace_t SpaceOverride { get; }
```

#### Property Value

- [RotatorTargetSpace_t](/docs/api/shared/schemadefinitions/rotatortargetspace_t)

### StrRotatorTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L75)

```csharp
string StrRotatorTarget { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TimeRotationStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L31)

```csharp
GameTime_t TimeRotationStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### TimeToReachMaxSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L23)

```csharp
ref float TimeToReachMaxSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeToReachZeroSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L25)

```csharp
ref float TimeToReachZeroSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeToWaitOscillate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L29)

```csharp
ref float TimeToWaitOscillate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WSInit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L37)

```csharp
ref Quaternion WSInit { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### WSPrev

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L35)

```csharp
ref Quaternion WSPrev { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

