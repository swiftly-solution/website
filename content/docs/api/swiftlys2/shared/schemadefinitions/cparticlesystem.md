---
title: CParticleSystem
---

```csharp
public interface CParticleSystem : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CParticleSystem>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Active** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L18)

```csharp
ref bool Active { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**AnimateDuringGameplayPause** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L26)

```csharp
ref bool AnimateDuringGameplayPause { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ControlPointEnts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L38)

```csharp
ISchemaFixedArray<CHandle<CBaseEntity>> ControlPointEnts { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

**ControlPointNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L50)

```csharp
string ControlPointNames { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**DataCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L52)

```csharp
ref int DataCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**DataCPValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L54)

```csharp
ref Vector DataCPValue { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**EffectIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L28)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> EffectIndex { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

**EffectName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L48)

```csharp
string EffectName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**FreezeTransitionDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L22)

```csharp
ref float FreezeTransitionDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Frozen** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L20)

```csharp
ref bool Frozen { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NoFreeze** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L42)

```csharp
ref bool NoFreeze { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NoRamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L44)

```csharp
ref bool NoRamp { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NoSave** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L40)

```csharp
ref bool NoSave { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PreSimTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L32)

```csharp
ref float PreSimTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ServerControlPointAssignments** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L36)

```csharp
ISchemaFixedArray<byte> ServerControlPointAssignments { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

**ServerControlPoints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L34)

```csharp
ISchemaFixedArray<Vector> ServerControlPoints { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

**SnapshotFileName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L16)

```csharp
string SnapshotFileName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**StartActive** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L46)

```csharp
ref bool StartActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L30)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**StopType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L24)

```csharp
ref int StopType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Tint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L58)

```csharp
ref Color Tint { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

**TintCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L56)

```csharp
ref int TintCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

**ActiveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L61)

```csharp
void ActiveUpdated()
```

**AnimateDuringGameplayPauseUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L65)

```csharp
void AnimateDuringGameplayPauseUpdated()
```

**ControlPointEntsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L71)

```csharp
void ControlPointEntsUpdated()
```

**EffectIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L66)

```csharp
void EffectIndexUpdated()
```

**FreezeTransitionDurationUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L63)

```csharp
void FreezeTransitionDurationUpdated()
```

**FrozenUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L62)

```csharp
void FrozenUpdated()
```

**NoFreezeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L73)

```csharp
void NoFreezeUpdated()
```

**NoRampUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L74)

```csharp
void NoRampUpdated()
```

**NoSaveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L72)

```csharp
void NoSaveUpdated()
```

**PreSimTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L68)

```csharp
void PreSimTimeUpdated()
```

**ServerControlPointAssignmentsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L70)

```csharp
void ServerControlPointAssignmentsUpdated()
```

**ServerControlPointsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L69)

```csharp
void ServerControlPointsUpdated()
```

**SnapshotFileNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L60)

```csharp
void SnapshotFileNameUpdated()
```

**StartTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L67)

```csharp
void StartTimeUpdated()
```

**StopTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleSystem.cs#L64)

```csharp
void StopTypeUpdated()
```

