---
title: CPointValueRemapper
---

```csharp
public interface CPointValueRemapper : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointValueRemapper>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CurrentMomentum

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L59)

```csharp
ref float CurrentMomentum { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CustomOutputValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L79)

```csharp
ref float CustomOutputValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Disabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L17)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisengageDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L33)

```csharp
ref float DisengageDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EngageDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L35)

```csharp
ref float EngageDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Engaged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L67)

```csharp
ref bool Engaged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FirstUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L69)

```csharp
ref bool FirstUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HapticsType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L51)

```csharp
ref ValueRemapperHapticsType_t HapticsType { get; }
```

#### Property Value

- [ValueRemapperHapticsType_t](/docs/api/shared/schemadefinitions/valueremapperhapticstype_t)

### InputOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L65)

```csharp
ref float InputOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InputType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L21)

```csharp
ref ValueRemapperInputType_t InputType { get; }
```

#### Property Value

- [ValueRemapperInputType_t](/docs/api/shared/schemadefinitions/valueremapperinputtype_t)

### MaximumChangePerSecond

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L31)

```csharp
ref float MaximumChangePerSecond { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MomentumModifier

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L55)

```csharp
ref float MomentumModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MomentumType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L53)

```csharp
ref ValueRemapperMomentumType_t MomentumType { get; }
```

#### Property Value

- [ValueRemapperMomentumType_t](/docs/api/shared/schemadefinitions/valueremappermomentumtype_t)

### OnDisengage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L105)

```csharp
CEntityIOOutput OnDisengage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnEngage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L103)

```csharp
CEntityIOOutput OnEngage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnReachedValueCustom

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L101)

```csharp
CEntityIOOutput OnReachedValueCustom { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnReachedValueOne

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L99)

```csharp
CEntityIOOutput OnReachedValueOne { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnReachedValueZero

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L97)

```csharp
CEntityIOOutput OnReachedValueZero { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OutputEntities

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L49)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> OutputEntities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

### OutputEntity2Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L43)

```csharp
string OutputEntity2Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputEntity3Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L45)

```csharp
string OutputEntity3Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputEntity4Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L47)

```csharp
string OutputEntity4Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputEntityName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L41)

```csharp
string OutputEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L39)

```csharp
ref ValueRemapperOutputType_t OutputType { get; }
```

#### Property Value

- [ValueRemapperOutputType_t](/docs/api/shared/schemadefinitions/valueremapperoutputtype_t)

### Position

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L92)

```csharp
SchemaUntypedField Position { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### PositionDelta

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L95)

```csharp
SchemaUntypedField PositionDelta { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### PreviousTestPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L75)

```csharp
ref Vector PreviousTestPoint { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PreviousUpdateTickTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L73)

```csharp
GameTime_t PreviousUpdateTickTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### PreviousValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L71)

```csharp
ref float PreviousValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RatchetOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L63)

```csharp
ref float RatchetOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RatchetType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L61)

```csharp
ref ValueRemapperRatchetType_t RatchetType { get; }
```

#### Property Value

- [ValueRemapperRatchetType_t](/docs/api/shared/schemadefinitions/valueremapperratchettype_t)

### RemapLineEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L29)

```csharp
ref CHandle<CBaseEntity> RemapLineEnd { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### RemapLineEndName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L25)

```csharp
string RemapLineEndName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RemapLineStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L27)

```csharp
ref CHandle<CBaseEntity> RemapLineStart { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### RemapLineStartName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L23)

```csharp
string RemapLineStartName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RequiresUseKey

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L37)

```csharp
ref bool RequiresUseKey { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SnapValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L57)

```csharp
ref float SnapValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoundDisengage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L83)

```csharp
string SoundDisengage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundEngage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L81)

```csharp
string SoundEngage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundMovingLoop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L89)

```csharp
string SoundMovingLoop { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundReachedValueOne

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L87)

```csharp
string SoundReachedValueOne { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundReachedValueZero

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L85)

```csharp
string SoundReachedValueZero { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UpdateOnClient

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L19)

```csharp
ref bool UpdateOnClient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UsingPlayer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L77)

```csharp
ref CHandle<CBasePlayerPawn> UsingPlayer { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBasePlayerPawn](/docs/api/shared/schemadefinitions/cbaseplayerpawn)>

## Methods

### DisabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L107)

```csharp
void DisabledUpdated()
```

### DisengageDistanceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L113)

```csharp
void DisengageDistanceUpdated()
```

### EngageDistanceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L114)

```csharp
void EngageDistanceUpdated()
```

### HapticsTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L118)

```csharp
void HapticsTypeUpdated()
```

### InputOffsetUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L123)

```csharp
void InputOffsetUpdated()
```

### InputTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L109)

```csharp
void InputTypeUpdated()
```

### MaximumChangePerSecondUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L112)

```csharp
void MaximumChangePerSecondUpdated()
```

### MomentumModifierUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L120)

```csharp
void MomentumModifierUpdated()
```

### MomentumTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L119)

```csharp
void MomentumTypeUpdated()
```

### OutputEntitiesUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L117)

```csharp
void OutputEntitiesUpdated()
```

### OutputTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L116)

```csharp
void OutputTypeUpdated()
```

### RatchetTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L122)

```csharp
void RatchetTypeUpdated()
```

### RemapLineEndUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L111)

```csharp
void RemapLineEndUpdated()
```

### RemapLineStartUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L110)

```csharp
void RemapLineStartUpdated()
```

### RequiresUseKeyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L115)

```csharp
void RequiresUseKeyUpdated()
```

### SnapValueUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L121)

```csharp
void SnapValueUpdated()
```

### UpdateOnClientUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L108)

```csharp
void UpdateOnClientUpdated()
```

