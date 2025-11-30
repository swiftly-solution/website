---
title: OutflowWithRequirements_t
---

# Interface OutflowWithRequirements_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface OutflowWithRequirements_t : ISchemaClass<OutflowWithRequirements_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<OutflowWithRequirements_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Connection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L18)

```csharp
CPulse_OutflowConnection Connection { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/schemadefinitions/cpulse_outflowconnection)

### CursorStateBlockIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L24)

```csharp
ref CUtlVector<int> CursorStateBlockIndex { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### DestinationFlowNodeID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L20)

```csharp
PulseDocNodeID_t DestinationFlowNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### RequirementNodeIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L22)

```csharp
ref CUtlVector<PulseDocNodeID_t> RequirementNodeIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)>

