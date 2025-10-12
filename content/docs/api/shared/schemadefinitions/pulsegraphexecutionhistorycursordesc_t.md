---
title: PulseGraphExecutionHistoryCursorDesc_t
---

```csharp
public interface PulseGraphExecutionHistoryCursorDesc_t : ISchemaClass<PulseGraphExecutionHistoryCursorDesc_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AncestorCursorIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L17)

```csharp
ref CUtlVector AncestorCursorIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### LastReferenced

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L23)

```csharp
ref float LastReferenced { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastValidEntryIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L25)

```csharp
ref int LastValidEntryIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RetiredAtNodeID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L21)

```csharp
PulseDocNodeID_t RetiredAtNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

### SpawnNodeID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PulseGraphExecutionHistoryCursorDesc_t.cs#L19)

```csharp
PulseDocNodeID_t SpawnNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

