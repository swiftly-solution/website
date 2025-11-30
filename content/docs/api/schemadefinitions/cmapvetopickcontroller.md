---
title: CMapVetoPickController
---

# Interface CMapVetoPickController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMapVetoPickController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CMapVetoPickController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMapVetoPickController>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L34)

```csharp
ISchemaFixedArray<int> AccountIDs { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### CurrentPhase

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L50)

```csharp
ref int CurrentPhase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DblPreMatchDraftSequenceTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L22)

```csharp
ref double DblPreMatchDraftSequenceTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### DraftType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L26)

```csharp
ref int DraftType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapId0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L36)

```csharp
ISchemaFixedArray<int> MapId0 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L38)

```csharp
ISchemaFixedArray<int> MapId1 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L40)

```csharp
ISchemaFixedArray<int> MapId2 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId3

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L42)

```csharp
ISchemaFixedArray<int> MapId3 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId4

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L44)

```csharp
ISchemaFixedArray<int> MapId4 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId5

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L46)

```csharp
ISchemaFixedArray<int> MapId5 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### NeedToPlayFiveSecondsRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L20)

```csharp
ref bool NeedToPlayFiveSecondsRemaining { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnLevelTransition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L69)

```csharp
SchemaUntypedField OnLevelTransition { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### OnMapPicked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L60)

```csharp
SchemaUntypedField OnMapPicked { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### OnMapVetoed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L57)

```csharp
SchemaUntypedField OnMapVetoed { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### OnNewPhaseStarted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L66)

```csharp
SchemaUntypedField OnNewPhaseStarted { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### OnSidesPicked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L63)

```csharp
SchemaUntypedField OnSidesPicked { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### PhaseDurationTicks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L54)

```csharp
ref int PhaseDurationTicks { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PhaseStartTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L52)

```csharp
ref int PhaseStartTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayedIntroVcd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L18)

```csharp
ref bool PlayedIntroVcd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PreMatchDraftStateChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L24)

```csharp
ref bool PreMatchDraftStateChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartingSide0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L48)

```csharp
ISchemaFixedArray<int> StartingSide0 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### TeamWinningCoinToss

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L28)

```csharp
ref int TeamWinningCoinToss { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamWithFirstChoice

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L30)

```csharp
ISchemaFixedArray<int> TeamWithFirstChoice { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VoteMapIdsList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L32)

```csharp
ISchemaFixedArray<int> VoteMapIdsList { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

## Methods

### AccountIDsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L75)

```csharp
void AccountIDsUpdated()
```

### CurrentPhaseUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L83)

```csharp
void CurrentPhaseUpdated()
```

### DraftTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L71)

```csharp
void DraftTypeUpdated()
```

### MapId0Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L76)

```csharp
void MapId0Updated()
```

### MapId1Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L77)

```csharp
void MapId1Updated()
```

### MapId2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L78)

```csharp
void MapId2Updated()
```

### MapId3Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L79)

```csharp
void MapId3Updated()
```

### MapId4Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L80)

```csharp
void MapId4Updated()
```

### MapId5Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L81)

```csharp
void MapId5Updated()
```

### PhaseDurationTicksUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L85)

```csharp
void PhaseDurationTicksUpdated()
```

### PhaseStartTickUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L84)

```csharp
void PhaseStartTickUpdated()
```

### StartingSide0Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L82)

```csharp
void StartingSide0Updated()
```

### TeamWinningCoinTossUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L72)

```csharp
void TeamWinningCoinTossUpdated()
```

### TeamWithFirstChoiceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L73)

```csharp
void TeamWithFirstChoiceUpdated()
```

### VoteMapIdsListUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L74)

```csharp
void VoteMapIdsListUpdated()
```

