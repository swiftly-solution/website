---
title: CMapVetoPickController
---

```csharp
public interface CMapVetoPickController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CMapVetoPickController>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccountIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L33)

```csharp
ISchemaFixedArray<int> AccountIDs { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### CurrentPhase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L49)

```csharp
ref int CurrentPhase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DblPreMatchDraftSequenceTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L21)

```csharp
ref double DblPreMatchDraftSequenceTime { get; }
```

#### Property Value

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### DraftType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L25)

```csharp
ref int DraftType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MapId0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L35)

```csharp
ISchemaFixedArray<int> MapId0 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L37)

```csharp
ISchemaFixedArray<int> MapId1 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L39)

```csharp
ISchemaFixedArray<int> MapId2 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId3

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L41)

```csharp
ISchemaFixedArray<int> MapId3 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId4

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L43)

```csharp
ISchemaFixedArray<int> MapId4 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MapId5

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L45)

```csharp
ISchemaFixedArray<int> MapId5 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### NeedToPlayFiveSecondsRemaining

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L19)

```csharp
ref bool NeedToPlayFiveSecondsRemaining { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnLevelTransition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L68)

```csharp
SchemaUntypedField OnLevelTransition { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### OnMapPicked

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L59)

```csharp
SchemaUntypedField OnMapPicked { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### OnMapVetoed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L56)

```csharp
SchemaUntypedField OnMapVetoed { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### OnNewPhaseStarted

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L65)

```csharp
SchemaUntypedField OnNewPhaseStarted { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### OnSidesPicked

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L62)

```csharp
SchemaUntypedField OnSidesPicked { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### PhaseDurationTicks

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L53)

```csharp
ref int PhaseDurationTicks { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PhaseStartTick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L51)

```csharp
ref int PhaseStartTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayedIntroVcd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L17)

```csharp
ref bool PlayedIntroVcd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PreMatchDraftStateChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L23)

```csharp
ref bool PreMatchDraftStateChanged { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartingSide0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L47)

```csharp
ISchemaFixedArray<int> StartingSide0 { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### TeamWinningCoinToss

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L27)

```csharp
ref int TeamWinningCoinToss { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TeamWithFirstChoice

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L29)

```csharp
ISchemaFixedArray<int> TeamWithFirstChoice { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### VoteMapIdsList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L31)

```csharp
ISchemaFixedArray<int> VoteMapIdsList { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

## Methods

### AccountIDsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L74)

```csharp
void AccountIDsUpdated()
```

### CurrentPhaseUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L82)

```csharp
void CurrentPhaseUpdated()
```

### DraftTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L70)

```csharp
void DraftTypeUpdated()
```

### MapId0Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L75)

```csharp
void MapId0Updated()
```

### MapId1Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L76)

```csharp
void MapId1Updated()
```

### MapId2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L77)

```csharp
void MapId2Updated()
```

### MapId3Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L78)

```csharp
void MapId3Updated()
```

### MapId4Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L79)

```csharp
void MapId4Updated()
```

### MapId5Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L80)

```csharp
void MapId5Updated()
```

### PhaseDurationTicksUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L84)

```csharp
void PhaseDurationTicksUpdated()
```

### PhaseStartTickUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L83)

```csharp
void PhaseStartTickUpdated()
```

### StartingSide0Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L81)

```csharp
void StartingSide0Updated()
```

### TeamWinningCoinTossUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L71)

```csharp
void TeamWinningCoinTossUpdated()
```

### TeamWithFirstChoiceUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L72)

```csharp
void TeamWithFirstChoiceUpdated()
```

### VoteMapIdsListUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMapVetoPickController.cs#L73)

```csharp
void VoteMapIdsListUpdated()
```

