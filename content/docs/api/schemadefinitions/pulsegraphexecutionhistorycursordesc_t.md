---
title: PulseGraphExecutionHistoryCursorDesc_t
---

# Interface PulseGraphExecutionHistoryCursorDesc_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PulseGraphExecutionHistoryCursorDesc_t : ISchemaClass<PulseGraphExecutionHistoryCursorDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PulseGraphExecutionHistoryCursorDesc_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AncestorCursorIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L18)

```csharp
ref CUtlVector<PulseCursorID_t> AncestorCursorIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PulseCursorID_t](/docs/api/schemadefinitions/pulsecursorid_t)>

### LastReferenced

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L24)

```csharp
ref float LastReferenced { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastValidEntryIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L26)

```csharp
ref int LastValidEntryIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RetiredAtNodeID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L22)

```csharp
PulseDocNodeID_t RetiredAtNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### SpawnNodeID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L20)

```csharp
PulseDocNodeID_t SpawnNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

