---
title: CTriggerFan
---

```csharp
public interface CTriggerFan : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CTriggerFan>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Direction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L19)

```csharp
ref Vector Direction { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Falloff

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L31)

```csharp
ref bool Falloff { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FanEndLS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L39)

```csharp
ref Vector FanEndLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### FanOriginLS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L37)

```csharp
ref Vector FanOriginLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### FanOriginOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L17)

```csharp
ref Vector FanOriginOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### FanOriginWS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L35)

```csharp
ref Vector FanOriginWS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Force

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L29)

```csharp
ref float Force { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InfoFan

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L27)

```csharp
ref CHandle<CInfoFan> InfoFan { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CInfoFan](/docs/api/shared/schemadefinitions/cinfofan)>

### InfoFan1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L43)

```csharp
string InfoFan1 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ManagerFanIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L65)

```csharp
ref int ManagerFanIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NPCForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L53)

```csharp
ref float NPCForce { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoiseDegrees

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L57)

```csharp
ref float NoiseDegrees { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NoiseDelta

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L25)

```csharp
ref Quaternion NoiseDelta { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### NoiseDirectionTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L41)

```csharp
ref Vector NoiseDirectionTarget { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NoiseSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L59)

```csharp
ref float NoiseSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ParticleForceScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L47)

```csharp
ref float ParticleForceScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerForce

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L49)

```csharp
ref float PlayerForce { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlayerWindblock

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L51)

```csharp
ref bool PlayerWindblock { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PushAwayFromInfoTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L23)

```csharp
ref bool PushAwayFromInfoTarget { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PushPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L61)

```csharp
ref bool PushPlayer { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PushTowardsInfoTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L21)

```csharp
ref bool PushTowardsInfoTarget { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RampDown

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L63)

```csharp
ref bool RampDown { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RampTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L55)

```csharp
ref float RampTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RampTimer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L33)

```csharp
CountdownTimer RampTimer { get; }
```

#### Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### RopeForceScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L45)

```csharp
ref float RopeForceScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### DirectionUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L68)

```csharp
void DirectionUpdated()
```

### FalloffUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L74)

```csharp
void FalloffUpdated()
```

### FanOriginOffsetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L67)

```csharp
void FanOriginOffsetUpdated()
```

### ForceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L73)

```csharp
void ForceUpdated()
```

### InfoFanUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L72)

```csharp
void InfoFanUpdated()
```

### NoiseDeltaUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L71)

```csharp
void NoiseDeltaUpdated()
```

### PushAwayFromInfoTargetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L70)

```csharp
void PushAwayFromInfoTargetUpdated()
```

### PushTowardsInfoTargetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L69)

```csharp
void PushTowardsInfoTargetUpdated()
```

### RampTimerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTriggerFan.cs#L75)

```csharp
void RampTimerUpdated()
```

