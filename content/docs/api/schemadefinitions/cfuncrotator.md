---
title: CFuncRotator
---

# Interface CFuncRotator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFuncRotator : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncRotator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFuncRotator>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AngularVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L72)

```csharp
ref QAngle AngularVelocity { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### DistanceAlongArcTraveled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L28)

```csharp
ref float DistanceAlongArcTraveled { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HasTargetOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L66)

```csharp
ref bool HasTargetOverride { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReversing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L22)

```csharp
ref bool IsReversing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRotating

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L20)

```csharp
ref bool IsRotating { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LSInit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L40)

```csharp
ref Quaternion LSInit { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### LSOrientation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L42)

```csharp
ref Quaternion LSOrientation { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### LSPrevChange

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L34)

```csharp
ref Quaternion LSPrevChange { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### LookAtForcedUp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L74)

```csharp
ref Vector LookAtForcedUp { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### OnOscillate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L48)

```csharp
CEntityIOOutput OnOscillate { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnOscillateEndArrive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L54)

```csharp
CEntityIOOutput OnOscillateEndArrive { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnOscillateEndDepart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L56)

```csharp
CEntityIOOutput OnOscillateEndDepart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnOscillateStartArrive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L50)

```csharp
CEntityIOOutput OnOscillateStartArrive { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnOscillateStartDepart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L52)

```csharp
CEntityIOOutput OnOscillateStartDepart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnRotationCompleted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L46)

```csharp
CEntityIOOutput OnRotationCompleted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnRotationStarted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L44)

```csharp
CEntityIOOutput OnRotationStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OrientationOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L68)

```csharp
ref Quaternion OrientationOverride { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### OscillateCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L60)

```csharp
ref int OscillateCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OscillateDepart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L58)

```csharp
ref bool OscillateDepart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PrevRotateType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L64)

```csharp
ref CFuncRotator__Rotate_t PrevRotateType { get; }
```

#### Property Value

- [CFuncRotator__Rotate_t](/docs/api/schemadefinitions/cfuncrotator__rotate_t)

### RecordHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L78)

```csharp
ref bool RecordHistory { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReturningToPreviousOrientation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L82)

```csharp
ref bool ReturningToPreviousOrientation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RotateType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L62)

```csharp
ref CFuncRotator__Rotate_t RotateType { get; }
```

#### Property Value

- [CFuncRotator__Rotate_t](/docs/api/schemadefinitions/cfuncrotator__rotate_t)

### RotatorHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L80)

```csharp
ref CUtlVector<RotatorHistoryEntry_t> RotatorHistory { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RotatorHistoryEntry_t](/docs/api/schemadefinitions/rotatorhistoryentry_t)>

### RotatorQueue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L84)

```csharp
ref CUtlVector<RotatorQueueEntry_t> RotatorQueue { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RotatorQueueEntry_t](/docs/api/schemadefinitions/rotatorqueueentry_t)>

### RotatorQueueHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L86)

```csharp
ref CUtlVector<RotatorHistoryEntry_t> RotatorQueueHistory { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RotatorHistoryEntry_t](/docs/api/schemadefinitions/rotatorhistoryentry_t)>

### RotatorTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L18)

```csharp
ref CHandle<CBaseEntity> RotatorTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### SpaceOverride

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L70)

```csharp
ref RotatorTargetSpace_t SpaceOverride { get; }
```

#### Property Value

- [RotatorTargetSpace_t](/docs/api/schemadefinitions/rotatortargetspace_t)

### StrRotatorTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L76)

```csharp
string StrRotatorTarget { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TimeRotationStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L32)

```csharp
GameTime_t TimeRotationStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### TimeToReachMaxSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L24)

```csharp
ref float TimeToReachMaxSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeToReachZeroSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L26)

```csharp
ref float TimeToReachZeroSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeToWaitOscillate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L30)

```csharp
ref float TimeToWaitOscillate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WSInit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L38)

```csharp
ref Quaternion WSInit { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### WSPrev

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L36)

```csharp
ref Quaternion WSPrev { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

