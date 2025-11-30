---
title: CPulseCell_FireCursors
---

# Interface CPulseCell_FireCursors

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_FireCursors.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseCell_FireCursors : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_FireCursors>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseCell_BaseYieldingInflow](/docs/api/schemadefinitions/cpulsecell_baseyieldinginflow)
- [CPulseCell_BaseFlow](/docs/api/schemadefinitions/cpulsecell_baseflow)
- [CPulseCell_Base](/docs/api/schemadefinitions/cpulsecell_base)
- [ISchemaClass<CPulseCell_Base>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseFlow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseYieldingInflow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_FireCursors>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### OnCanceled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_FireCursors.cs#L24)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/schemadefinitions/cpulse_resumepoint)

### OnFinished

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_FireCursors.cs#L22)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/schemadefinitions/cpulse_resumepoint)

### Outflows

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_FireCursors.cs#L18)

```csharp
ref CUtlVector<CPulse_OutflowConnection> Outflows { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CPulse_OutflowConnection](/docs/api/schemadefinitions/cpulse_outflowconnection)>

### WaitForChildOutflows

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_FireCursors.cs#L20)

```csharp
ref bool WaitForChildOutflows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

