---
title: CPointValueRemapper
---

```csharp
public interface CPointValueRemapper : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointValueRemapper>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CurrentMomentum** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L58)

```csharp
ref float CurrentMomentum { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**CustomOutputValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L78)

```csharp
ref float CustomOutputValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L16)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**DisengageDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L32)

```csharp
ref float DisengageDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**EngageDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L34)

```csharp
ref float EngageDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Engaged** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L66)

```csharp
ref bool Engaged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**FirstUpdate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L68)

```csharp
ref bool FirstUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**HapticsType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L50)

```csharp
ref ValueRemapperHapticsType_t HapticsType { get; }
```

#### Property Value

- [ValueRemapperHapticsType_t](/docs/api/shared/schemadefinitions/valueremapperhapticstype_t)

**InputOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L64)

```csharp
ref float InputOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**InputType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L20)

```csharp
ref ValueRemapperInputType_t InputType { get; }
```

#### Property Value

- [ValueRemapperInputType_t](/docs/api/shared/schemadefinitions/valueremapperinputtype_t)

**MaximumChangePerSecond** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L30)

```csharp
ref float MaximumChangePerSecond { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MomentumModifier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L54)

```csharp
ref float MomentumModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MomentumType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L52)

```csharp
ref ValueRemapperMomentumType_t MomentumType { get; }
```

#### Property Value

- [ValueRemapperMomentumType_t](/docs/api/shared/schemadefinitions/valueremappermomentumtype_t)

**OnDisengage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L104)

```csharp
CEntityIOOutput OnDisengage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnEngage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L102)

```csharp
CEntityIOOutput OnEngage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnReachedValueCustom** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L100)

```csharp
CEntityIOOutput OnReachedValueCustom { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnReachedValueOne** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L98)

```csharp
CEntityIOOutput OnReachedValueOne { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnReachedValueZero** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L96)

```csharp
CEntityIOOutput OnReachedValueZero { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OutputEntities** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L48)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> OutputEntities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

**OutputEntity2Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L42)

```csharp
ref CUtlSymbolLarge OutputEntity2Name { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**OutputEntity3Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L44)

```csharp
ref CUtlSymbolLarge OutputEntity3Name { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**OutputEntity4Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L46)

```csharp
ref CUtlSymbolLarge OutputEntity4Name { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**OutputEntityName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L40)

```csharp
ref CUtlSymbolLarge OutputEntityName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**OutputType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L38)

```csharp
ref ValueRemapperOutputType_t OutputType { get; }
```

#### Property Value

- [ValueRemapperOutputType_t](/docs/api/shared/schemadefinitions/valueremapperoutputtype_t)

**Position** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L91)

```csharp
SchemaUntypedField Position { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**PositionDelta** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L94)

```csharp
SchemaUntypedField PositionDelta { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**PreviousTestPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L74)

```csharp
ref Vector PreviousTestPoint { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**PreviousUpdateTickTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L72)

```csharp
GameTime_t PreviousUpdateTickTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**PreviousValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L70)

```csharp
ref float PreviousValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**RatchetOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L62)

```csharp
ref float RatchetOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**RatchetType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L60)

```csharp
ref ValueRemapperRatchetType_t RatchetType { get; }
```

#### Property Value

- [ValueRemapperRatchetType_t](/docs/api/shared/schemadefinitions/valueremapperratchettype_t)

**RemapLineEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L28)

```csharp
ref CHandle<CBaseEntity> RemapLineEnd { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**RemapLineEndName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L24)

```csharp
ref CUtlSymbolLarge RemapLineEndName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**RemapLineStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L26)

```csharp
ref CHandle<CBaseEntity> RemapLineStart { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**RemapLineStartName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L22)

```csharp
ref CUtlSymbolLarge RemapLineStartName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**RequiresUseKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L36)

```csharp
ref bool RequiresUseKey { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SnapValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L56)

```csharp
ref float SnapValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SoundDisengage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L82)

```csharp
ref CUtlSymbolLarge SoundDisengage { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**SoundEngage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L80)

```csharp
ref CUtlSymbolLarge SoundEngage { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**SoundMovingLoop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L88)

```csharp
ref CUtlSymbolLarge SoundMovingLoop { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**SoundReachedValueOne** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L86)

```csharp
ref CUtlSymbolLarge SoundReachedValueOne { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**SoundReachedValueZero** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L84)

```csharp
ref CUtlSymbolLarge SoundReachedValueZero { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**UpdateOnClient** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L18)

```csharp
ref bool UpdateOnClient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**UsingPlayer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L76)

```csharp
ref CHandle<CBasePlayerPawn> UsingPlayer { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

## Methods

**DisabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L106)

```csharp
void DisabledUpdated()
```

**DisengageDistanceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L112)

```csharp
void DisengageDistanceUpdated()
```

**EngageDistanceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L113)

```csharp
void EngageDistanceUpdated()
```

**HapticsTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L117)

```csharp
void HapticsTypeUpdated()
```

**InputOffsetUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L122)

```csharp
void InputOffsetUpdated()
```

**InputTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L108)

```csharp
void InputTypeUpdated()
```

**MaximumChangePerSecondUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L111)

```csharp
void MaximumChangePerSecondUpdated()
```

**MomentumModifierUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L119)

```csharp
void MomentumModifierUpdated()
```

**MomentumTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L118)

```csharp
void MomentumTypeUpdated()
```

**OutputEntitiesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L116)

```csharp
void OutputEntitiesUpdated()
```

**OutputTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L115)

```csharp
void OutputTypeUpdated()
```

**RatchetTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L121)

```csharp
void RatchetTypeUpdated()
```

**RemapLineEndUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L110)

```csharp
void RemapLineEndUpdated()
```

**RemapLineStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L109)

```csharp
void RemapLineStartUpdated()
```

**RequiresUseKeyUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L114)

```csharp
void RequiresUseKeyUpdated()
```

**SnapValueUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L120)

```csharp
void SnapValueUpdated()
```

**UpdateOnClientUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L107)

```csharp
void UpdateOnClientUpdated()
```

