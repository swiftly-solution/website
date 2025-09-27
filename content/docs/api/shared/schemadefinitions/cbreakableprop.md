---
title: CBreakableProp
---

```csharp
public interface CBreakableProp : CBaseProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CBaseProp>, ISchemaClass<CBreakableProp>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BreakableContentsType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L45)

```csharp
ref BreakableContentsType_t BreakableContentsType { get; }
```

#### Property Value

- [BreakableContentsType_t](/docs/api/shared/schemadefinitions/breakablecontentstype_t)

**Breaker** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L39)

```csharp
ref CHandle<CBaseEntity> Breaker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**CPropDataComponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L16)

```csharp
CPropDataComponent CPropDataComponent { get; }
```

#### Property Value

- [CPropDataComponent](/docs/api/shared/schemadefinitions/cpropdatacomponent)

**DefBurstOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L37)

```csharp
ref Vector DefBurstOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**DefBurstScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L35)

```csharp
ref float DefBurstScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DefaultFadeScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L71)

```csharp
ref float DefaultFadeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ExplodeDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L53)

```csharp
ref float ExplodeDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ExplodeRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L55)

```csharp
ref float ExplodeRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ExplosionBuildupSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L59)

```csharp
ref CUtlSymbolLarge ExplosionBuildupSound { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**ExplosionCustomEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L61)

```csharp
ref CUtlSymbolLarge ExplosionCustomEffect { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**ExplosionCustomSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L63)

```csharp
ref CUtlSymbolLarge ExplosionCustomSound { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**ExplosionDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L57)

```csharp
ref float ExplosionDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ExplosionModifier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L65)

```csharp
ref CUtlSymbolLarge ExplosionModifier { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**HasBreakPiecesOrCommands** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L51)

```csharp
ref bool HasBreakPiecesOrCommands { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ImpactEnergyScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L27)

```csharp
ref float ImpactEnergyScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LastAttacker** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L73)

```csharp
ref CHandle<CBaseEntity> LastAttacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**LastPhysicsInfluenceTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L69)

```csharp
GameTime_t LastPhysicsInfluenceTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**MinHealthDmg** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L29)

```csharp
ref int MinHealthDmg { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**OnBreak** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L20)

```csharp
CEntityIOOutput OnBreak { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnHealthChanged** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L23)

```csharp
SchemaUntypedField OnHealthChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**OnStartDeath** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L18)

```csharp
CEntityIOOutput OnStartDeath { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnTakeDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L25)

```csharp
CEntityIOOutput OnTakeDamage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OriginalBlockLOS** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L79)

```csharp
ref bool OriginalBlockLOS { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PerformanceMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L41)

```csharp
ref PerformanceMode_t PerformanceMode { get; }
```

#### Property Value

- [PerformanceMode_t](/docs/api/shared/schemadefinitions/performancemode_t)

**PhysicsAttacker** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L67)

```csharp
ref CHandle<CBasePlayerPawn> PhysicsAttacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

**PreferredCarryAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L31)

```csharp
ref QAngle PreferredCarryAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**PressureDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L33)

```csharp
ref float PressureDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PreventDamageBeforeTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L43)

```csharp
GameTime_t PreventDamageBeforeTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**PuntSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L75)

```csharp
ref CUtlSymbolLarge PuntSound { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**StrBreakableContentsParticleOverride** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L49)

```csharp
ref CUtlString StrBreakableContentsParticleOverride { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**StrBreakableContentsPropGroupOverride** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L47)

```csharp
ref CUtlString StrBreakableContentsPropGroupOverride { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**UsePuntSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L77)

```csharp
ref bool UsePuntSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**CPropDataComponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBreakableProp.cs#L81)

```csharp
void CPropDataComponentUpdated()
```

