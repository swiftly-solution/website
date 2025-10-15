---
title: CBreakableProp
---

```csharp
public interface CBreakableProp : CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BreakableContentsType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L46)

```csharp
ref BreakableContentsType_t BreakableContentsType { get; }
```

#### Property Value

- [BreakableContentsType_t](/docs/api/shared/schemadefinitions/breakablecontentstype_t)

### Breaker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L40)

```csharp
ref CHandle<CBaseEntity> Breaker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### CPropDataComponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L17)

```csharp
CPropDataComponent CPropDataComponent { get; }
```

#### Property Value

- [CPropDataComponent](/docs/api/shared/schemadefinitions/cpropdatacomponent)

### DefBurstOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L38)

```csharp
ref Vector DefBurstOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### DefBurstScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L36)

```csharp
ref float DefBurstScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DefaultFadeScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L72)

```csharp
ref float DefaultFadeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ExplodeDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L54)

```csharp
ref float ExplodeDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ExplodeRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L56)

```csharp
ref float ExplodeRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ExplosionBuildupSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L60)

```csharp
string ExplosionBuildupSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExplosionCustomEffect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L62)

```csharp
string ExplosionCustomEffect { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExplosionCustomSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L64)

```csharp
string ExplosionCustomSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExplosionDelay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L58)

```csharp
ref float ExplosionDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ExplosionModifier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L66)

```csharp
string ExplosionModifier { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### HasBreakPiecesOrCommands

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L52)

```csharp
ref bool HasBreakPiecesOrCommands { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ImpactEnergyScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L28)

```csharp
ref float ImpactEnergyScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastAttacker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L74)

```csharp
ref CHandle<CBaseEntity> LastAttacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### LastPhysicsInfluenceTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L70)

```csharp
GameTime_t LastPhysicsInfluenceTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### MinHealthDmg

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L30)

```csharp
ref int MinHealthDmg { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnBreak

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L21)

```csharp
CEntityIOOutput OnBreak { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnHealthChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L24)

```csharp
SchemaUntypedField OnHealthChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### OnStartDeath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L19)

```csharp
CEntityIOOutput OnStartDeath { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnTakeDamage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L26)

```csharp
CEntityIOOutput OnTakeDamage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OriginalBlockLOS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L80)

```csharp
ref bool OriginalBlockLOS { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PerformanceMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L42)

```csharp
ref PerformanceMode_t PerformanceMode { get; }
```

#### Property Value

- [PerformanceMode_t](/docs/api/shared/schemadefinitions/performancemode_t)

### PhysicsAttacker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L68)

```csharp
ref CHandle<CBasePlayerPawn> PhysicsAttacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

### PreferredCarryAngles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L32)

```csharp
ref QAngle PreferredCarryAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### PressureDelay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L34)

```csharp
ref float PressureDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PreventDamageBeforeTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L44)

```csharp
GameTime_t PreventDamageBeforeTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### PuntSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L76)

```csharp
string PuntSound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StrBreakableContentsParticleOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L50)

```csharp
string StrBreakableContentsParticleOverride { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StrBreakableContentsPropGroupOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L48)

```csharp
string StrBreakableContentsPropGroupOverride { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UsePuntSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L78)

```csharp
ref bool UsePuntSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CPropDataComponentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L82)

```csharp
void CPropDataComponentUpdated()
```

