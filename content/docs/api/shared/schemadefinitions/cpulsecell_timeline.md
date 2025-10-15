---
title: CPulseCell_Timeline
---

```csharp
public interface CPulseCell_Timeline : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Timeline>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### OnCanceled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L23)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### OnFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L21)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### TimelineEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L17)

```csharp
ref CUtlVector<CPulseCell_Timeline__TimelineEvent_t> TimelineEvents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CPulseCell_Timeline__TimelineEvent_t](/docs/api/shared/schemadefinitions/cpulsecell_timeline__timelineevent_t)>

### WaitForChildOutflows

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L19)

```csharp
ref bool WaitForChildOutflows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

