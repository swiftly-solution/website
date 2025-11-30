---
title: CPulseCell_InlineNodeSkipSelector
---

# Interface CPulseCell_InlineNodeSkipSelector

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseCell_InlineNodeSkipSelector : CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_InlineNodeSkipSelector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseCell_BaseFlow](/docs/api/schemadefinitions/cpulsecell_baseflow)
- [CPulseCell_Base](/docs/api/schemadefinitions/cpulsecell_base)
- [ISchemaClass<CPulseCell_Base>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseFlow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_InlineNodeSkipSelector>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### And

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L20)

```csharp
ref bool And { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FailOutflow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L24)

```csharp
CPulse_OutflowConnection FailOutflow { get; }
```

#### Property Value

- [CPulse_OutflowConnection](/docs/api/schemadefinitions/cpulse_outflowconnection)

### FlowNodeID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L18)

```csharp
PulseDocNodeID_t FlowNodeID { get; }
```

#### Property Value

- [PulseDocNodeID_t](/docs/api/schemadefinitions/pulsedocnodeid_t)

### PassOutflow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_InlineNodeSkipSelector.cs#L22)

```csharp
PulseSelectorOutflowList_t PassOutflow { get; }
```

#### Property Value

- [PulseSelectorOutflowList_t](/docs/api/schemadefinitions/pulseselectoroutflowlist_t)

