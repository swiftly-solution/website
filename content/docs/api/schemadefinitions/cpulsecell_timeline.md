---
title: CPulseCell_Timeline
---

# Interface CPulseCell_Timeline

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseCell_Timeline : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Timeline>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseCell_BaseYieldingInflow](/docs/api/schemadefinitions/cpulsecell_baseyieldinginflow)
- [CPulseCell_BaseFlow](/docs/api/schemadefinitions/cpulsecell_baseflow)
- [CPulseCell_Base](/docs/api/schemadefinitions/cpulsecell_base)
- [ISchemaClass<CPulseCell_Base>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseFlow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseYieldingInflow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_Timeline>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### OnCanceled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L24)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/schemadefinitions/cpulse_resumepoint)

### OnFinished

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L22)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/schemadefinitions/cpulse_resumepoint)

### TimelineEvents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L18)

```csharp
ref CUtlVector<CPulseCell_Timeline__TimelineEvent_t> TimelineEvents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CPulseCell_Timeline__TimelineEvent_t](/docs/api/schemadefinitions/cpulsecell_timeline__timelineevent_t)>

### WaitForChildOutflows

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Timeline.cs#L20)

```csharp
ref bool WaitForChildOutflows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

