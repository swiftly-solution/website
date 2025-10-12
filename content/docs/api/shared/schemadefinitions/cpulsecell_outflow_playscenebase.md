---
title: CPulseCell_Outflow_PlaySceneBase
---

```csharp
public interface CPulseCell_Outflow_PlaySceneBase : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Outflow_PlaySceneBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### OnCanceled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_PlaySceneBase.cs#L18)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### OnFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_PlaySceneBase.cs#L16)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### Triggers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_PlaySceneBase.cs#L21)

```csharp
ref CUtlVector Triggers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

