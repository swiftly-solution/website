---
title: CRagdollProp
---

```csharp
public interface CRagdollProp : CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CRagdollProp>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllAsleep

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L29)

```csharp
ref bool AllAsleep { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AllowStretch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L57)

```csharp
ref bool AllowStretch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AwakeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L47)

```csharp
GameTime_t AwakeTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### BlendWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L59)

```csharp
ref float BlendWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamageEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L33)

```csharp
ref CHandle<CBaseEntity> DamageEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### DefaultFadeScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L61)

```csharp
ref float DefaultFadeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeOutStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L41)

```csharp
GameTime_t FadeOutStartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### FadeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L43)

```csharp
ref float FadeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FirstCollisionAfterLaunch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L31)

```csharp
ref bool FirstCollisionAfterLaunch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasBeenPhysgunned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L55)

```csharp
ref bool HasBeenPhysgunned { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Killer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L35)

```csharp
ref CHandle<CBaseEntity> Killer { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### LastOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L45)

```csharp
ref Vector LastOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LastOriginChangeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L49)

```csharp
GameTime_t LastOriginChangeTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastPhysicsInfluenceTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L39)

```csharp
GameTime_t LastPhysicsInfluenceTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastUpdateTickCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L27)

```csharp
ref uint LastUpdateTickCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PhysicsAttacker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L37)

```csharp
ref CHandle<CBasePlayerPawn> PhysicsAttacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

### RagAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L25)

```csharp
ref CUtlVector<QAngle> RagAngles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[QAngle](/docs/api/shared/natives/qangle)>

### RagEnabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L21)

```csharp
ref CUtlVector<bool> RagEnabled { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

### RagPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L23)

```csharp
ref CUtlVector<Vector> RagPos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### Ragdoll

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L17)

```csharp
ragdoll_t Ragdoll { get; }
```

#### Property Value

- [ragdoll_t](/docs/api/shared/schemadefinitions/ragdoll_t)

### RagdollMaxs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L65)

```csharp
ref CUtlVector<Vector> RagdollMaxs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### RagdollMins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L63)

```csharp
ref CUtlVector<Vector> RagdollMins { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### ShouldDeleteActivationRecord

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L67)

```csharp
ref bool ShouldDeleteActivationRecord { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L19)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StrOriginClassName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L51)

```csharp
string StrOriginClassName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StrSourceClassName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L53)

```csharp
string StrSourceClassName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### BlendWeightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L72)

```csharp
void BlendWeightUpdated()
```

### RagAnglesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L71)

```csharp
void RagAnglesUpdated()
```

### RagEnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L69)

```csharp
void RagEnabledUpdated()
```

### RagPosUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollProp.cs#L70)

```csharp
void RagPosUpdated()
```

