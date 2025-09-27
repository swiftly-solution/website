---
title: CFuncRotator
---

```csharp
public interface CFuncRotator : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncRotator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AngularVelocity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L70)

```csharp
ref QAngle AngularVelocity { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**DistanceAlongArcTraveled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L26)

```csharp
ref float DistanceAlongArcTraveled { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**HasTargetOverride** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L64)

```csharp
ref bool HasTargetOverride { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsReversing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L20)

```csharp
ref bool IsReversing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IsRotating** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L18)

```csharp
ref bool IsRotating { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LSInit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L38)

```csharp
ref Quaternion LSInit { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

**LSOrientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L40)

```csharp
ref Quaternion LSOrientation { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

**LSPrevChange** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L32)

```csharp
ref Quaternion LSPrevChange { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

**LookAtForcedUp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L72)

```csharp
ref Vector LookAtForcedUp { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**OnOscillate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L46)

```csharp
CEntityIOOutput OnOscillate { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnOscillateEndArrive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L52)

```csharp
CEntityIOOutput OnOscillateEndArrive { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnOscillateEndDepart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L54)

```csharp
CEntityIOOutput OnOscillateEndDepart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnOscillateStartArrive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L48)

```csharp
CEntityIOOutput OnOscillateStartArrive { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnOscillateStartDepart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L50)

```csharp
CEntityIOOutput OnOscillateStartDepart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnRotationCompleted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L44)

```csharp
CEntityIOOutput OnRotationCompleted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnRotationStarted** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L42)

```csharp
CEntityIOOutput OnRotationStarted { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OrientationOverride** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L66)

```csharp
ref Quaternion OrientationOverride { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

**OscillateCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L58)

```csharp
ref int OscillateCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**OscillateDepart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L56)

```csharp
ref bool OscillateDepart { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PrevRotateType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L62)

```csharp
ref CFuncRotator__Rotate_t PrevRotateType { get; }
```

#### Property Value

- [CFuncRotator__Rotate_t](/docs/api/shared/schemadefinitions/cfuncrotator__rotate_t)

**RecordHistory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L76)

```csharp
ref bool RecordHistory { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ReturningToPreviousOrientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L81)

```csharp
ref bool ReturningToPreviousOrientation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RotateType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L60)

```csharp
ref CFuncRotator__Rotate_t RotateType { get; }
```

#### Property Value

- [CFuncRotator__Rotate_t](/docs/api/shared/schemadefinitions/cfuncrotator__rotate_t)

**RotatorHistory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L79)

```csharp
ref CUtlVector RotatorHistory { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**RotatorQueue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L84)

```csharp
ref CUtlVector RotatorQueue { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**RotatorQueueHistory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L87)

```csharp
ref CUtlVector RotatorQueueHistory { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**RotatorTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L16)

```csharp
ref CHandle<CBaseEntity> RotatorTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**SpaceOverride** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L68)

```csharp
ref RotatorTargetSpace_t SpaceOverride { get; }
```

#### Property Value

- [RotatorTargetSpace_t](/docs/api/shared/schemadefinitions/rotatortargetspace_t)

**StrRotatorTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L74)

```csharp
ref CUtlSymbolLarge StrRotatorTarget { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**TimeRotationStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L30)

```csharp
GameTime_t TimeRotationStart { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**TimeToReachMaxSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L22)

```csharp
ref float TimeToReachMaxSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TimeToReachZeroSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L24)

```csharp
ref float TimeToReachZeroSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TimeToWaitOscillate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L28)

```csharp
ref float TimeToWaitOscillate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**WSInit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L36)

```csharp
ref Quaternion WSInit { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

**WSPrev** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncRotator.cs#L34)

```csharp
ref Quaternion WSPrev { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

