---
title: CPulseCell_Outflow_ScriptedSequence
---

```csharp
public interface CPulseCell_Outflow_ScriptedSequence : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Outflow_ScriptedSequence>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AdditionalActors

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L29)

```csharp
ref CUtlVector<PulseScriptedSequenceData_t> AdditionalActors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PulseScriptedSequenceData_t](/docs/api/shared/schemadefinitions/pulsescriptedsequencedata_t)>

### DisallowInterrupts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L25)

```csharp
ref bool DisallowInterrupts { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DontTeleportAtEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L23)

```csharp
ref bool DontTeleportAtEnd { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnsureOnNavmeshOnFinish

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L21)

```csharp
ref bool EnsureOnNavmeshOnFinish { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExpectedNumSequencesInSyncGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L19)

```csharp
ref int ExpectedNumSequencesInSyncGroup { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OnCanceled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L33)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### OnFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L31)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### ScriptedSequenceDataMain

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L27)

```csharp
PulseScriptedSequenceData_t ScriptedSequenceDataMain { get; }
```

#### Property Value

- [PulseScriptedSequenceData_t](/docs/api/shared/schemadefinitions/pulsescriptedsequencedata_t)

### SyncGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L17)

```csharp
string SyncGroup { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Triggers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ScriptedSequence.cs#L35)

```csharp
ref CUtlVector<CPulse_OutflowConnection> Triggers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulse_OutflowConnection](/docs/api/shared/schemadefinitions/cpulse_outflowconnection)>

