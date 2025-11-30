---
title: CSequenceUpdateNode
---

# Interface CSequenceUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSequenceUpdateNode : CSequenceUpdateNodeBase, CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CSequenceUpdateNodeBase>, ISchemaClass<CSequenceUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSequenceUpdateNodeBase](/docs/api/schemadefinitions/csequenceupdatenodebase)
- [CLeafUpdateNode](/docs/api/schemadefinitions/cleafupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CLeafUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSequenceUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSequenceUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Duration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L20)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ParamSpans

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L22)

```csharp
CParamSpanUpdater ParamSpans { get; }
```

#### Property Value

- [CParamSpanUpdater](/docs/api/schemadefinitions/cparamspanupdater)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L18)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/schemadefinitions/hsequence)

### Tags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceUpdateNode.cs#L24)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[TagSpan_t](/docs/api/schemadefinitions/tagspan_t)>

