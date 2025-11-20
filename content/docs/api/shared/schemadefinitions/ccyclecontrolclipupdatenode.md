---
title: CCycleControlClipUpdateNode
---

```csharp
public interface CCycleControlClipUpdateNode : CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CCycleControlClipUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L22)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LockWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L28)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParamIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L26)

```csharp
CAnimParamHandle ParamIndex { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### Sequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L20)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L18)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[TagSpan_t](/docs/api/shared/schemadefinitions/tagspan_t)>

### ValueSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCycleControlClipUpdateNode.cs#L24)

```csharp
ref AnimValueSource ValueSource { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

