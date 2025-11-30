---
title: CPointValueRemapper
---

# Interface CPointValueRemapper

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPointValueRemapper : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointValueRemapper>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPointValueRemapper>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CurrentMomentum

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L60)

```csharp
ref float CurrentMomentum { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CustomOutputValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L80)

```csharp
ref float CustomOutputValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Disabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L18)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisengageDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L34)

```csharp
ref float DisengageDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EngageDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L36)

```csharp
ref float EngageDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Engaged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L68)

```csharp
ref bool Engaged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FirstUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L70)

```csharp
ref bool FirstUpdate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HapticsType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L52)

```csharp
ref ValueRemapperHapticsType_t HapticsType { get; }
```

#### Property Value

- [ValueRemapperHapticsType_t](/docs/api/schemadefinitions/valueremapperhapticstype_t)

### InputOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L66)

```csharp
ref float InputOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InputType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L22)

```csharp
ref ValueRemapperInputType_t InputType { get; }
```

#### Property Value

- [ValueRemapperInputType_t](/docs/api/schemadefinitions/valueremapperinputtype_t)

### MaximumChangePerSecond

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L32)

```csharp
ref float MaximumChangePerSecond { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MomentumModifier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L56)

```csharp
ref float MomentumModifier { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MomentumType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L54)

```csharp
ref ValueRemapperMomentumType_t MomentumType { get; }
```

#### Property Value

- [ValueRemapperMomentumType_t](/docs/api/schemadefinitions/valueremappermomentumtype_t)

### OnDisengage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L106)

```csharp
CEntityIOOutput OnDisengage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnEngage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L104)

```csharp
CEntityIOOutput OnEngage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnReachedValueCustom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L102)

```csharp
CEntityIOOutput OnReachedValueCustom { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnReachedValueOne

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L100)

```csharp
CEntityIOOutput OnReachedValueOne { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnReachedValueZero

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L98)

```csharp
CEntityIOOutput OnReachedValueZero { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OutputEntities

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L50)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> OutputEntities { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>>

### OutputEntity2Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L44)

```csharp
string OutputEntity2Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputEntity3Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L46)

```csharp
string OutputEntity3Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputEntity4Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L48)

```csharp
string OutputEntity4Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputEntityName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L42)

```csharp
string OutputEntityName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L40)

```csharp
ref ValueRemapperOutputType_t OutputType { get; }
```

#### Property Value

- [ValueRemapperOutputType_t](/docs/api/schemadefinitions/valueremapperoutputtype_t)

### Position

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L93)

```csharp
SchemaUntypedField Position { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### PositionDelta

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L96)

```csharp
SchemaUntypedField PositionDelta { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### PreviousTestPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L76)

```csharp
ref Vector PreviousTestPoint { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PreviousUpdateTickTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L74)

```csharp
GameTime_t PreviousUpdateTickTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### PreviousValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L72)

```csharp
ref float PreviousValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RatchetOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L64)

```csharp
ref float RatchetOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RatchetType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L62)

```csharp
ref ValueRemapperRatchetType_t RatchetType { get; }
```

#### Property Value

- [ValueRemapperRatchetType_t](/docs/api/schemadefinitions/valueremapperratchettype_t)

### RemapLineEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L30)

```csharp
ref CHandle<CBaseEntity> RemapLineEnd { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### RemapLineEndName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L26)

```csharp
string RemapLineEndName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RemapLineStart

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L28)

```csharp
ref CHandle<CBaseEntity> RemapLineStart { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### RemapLineStartName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L24)

```csharp
string RemapLineStartName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RequiresUseKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L38)

```csharp
ref bool RequiresUseKey { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SnapValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L58)

```csharp
ref float SnapValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoundDisengage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L84)

```csharp
string SoundDisengage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundEngage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L82)

```csharp
string SoundEngage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundMovingLoop

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L90)

```csharp
string SoundMovingLoop { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundReachedValueOne

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L88)

```csharp
string SoundReachedValueOne { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundReachedValueZero

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L86)

```csharp
string SoundReachedValueZero { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UpdateOnClient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L20)

```csharp
ref bool UpdateOnClient { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UsingPlayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L78)

```csharp
ref CHandle<CBasePlayerPawn> UsingPlayer { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBasePlayerPawn](/docs/api/schemadefinitions/cbaseplayerpawn)>

## Methods

### DisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L108)

```csharp
void DisabledUpdated()
```

### DisengageDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L114)

```csharp
void DisengageDistanceUpdated()
```

### EngageDistanceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L115)

```csharp
void EngageDistanceUpdated()
```

### HapticsTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L119)

```csharp
void HapticsTypeUpdated()
```

### InputOffsetUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L124)

```csharp
void InputOffsetUpdated()
```

### InputTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L110)

```csharp
void InputTypeUpdated()
```

### MaximumChangePerSecondUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L113)

```csharp
void MaximumChangePerSecondUpdated()
```

### MomentumModifierUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L121)

```csharp
void MomentumModifierUpdated()
```

### MomentumTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L120)

```csharp
void MomentumTypeUpdated()
```

### OutputEntitiesUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L118)

```csharp
void OutputEntitiesUpdated()
```

### OutputTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L117)

```csharp
void OutputTypeUpdated()
```

### RatchetTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L123)

```csharp
void RatchetTypeUpdated()
```

### RemapLineEndUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L112)

```csharp
void RemapLineEndUpdated()
```

### RemapLineStartUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L111)

```csharp
void RemapLineStartUpdated()
```

### RequiresUseKeyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L116)

```csharp
void RequiresUseKeyUpdated()
```

### SnapValueUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L122)

```csharp
void SnapValueUpdated()
```

### UpdateOnClientUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPointValueRemapper.cs#L109)

```csharp
void UpdateOnClientUpdated()
```

