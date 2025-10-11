---
title: OutflowWithRequirements_t
---

```csharp
public interface OutflowWithRequirements_t : ISchemaClass<OutflowWithRequirements_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Connection** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L16)

```csharp
CPulse_OutflowConnection Connection { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)

### **CursorStateBlockIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L23)

```csharp
ref CUtlVector<int> CursorStateBlockIndex { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **DestinationFlowNodeID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L18)

```csharp
PulseDocNodeID_t DestinationFlowNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/shared/schemadefinitions/pulsedocnodeid_t)

### **RequirementNodeIDs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/OutflowWithRequirements_t.cs#L21)

```csharp
ref CUtlVector RequirementNodeIDs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

