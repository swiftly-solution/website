---
title: CCycleControlClipUpdateNode
---

# Interface CCycleControlClipUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCycleControlClipUpdateNode : CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CCycleControlClipUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CLeafUpdateNode](/docs/api/schemadefinitions/cleafupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CLeafUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCycleControlClipUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Duration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L22)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LockWhenWaning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L28)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParamIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L26)

```csharp
CAnimParamHandle ParamIndex { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L20)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/schemadefinitions/hsequence)

### Tags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L18)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[TagSpan_t](/docs/api/schemadefinitions/tagspan_t)>

### ValueSource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L24)

```csharp
ref AnimValueSource ValueSource { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/schemadefinitions/animvaluesource)

