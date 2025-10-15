---
title: CBlend2DUpdateNode
---

```csharp
public interface CBlend2DUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBlend2DUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimEventsAndTagsOnMostWeightedOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L45)

```csharp
ref bool AnimEventsAndTagsOnMostWeightedOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BlendMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L35)

```csharp
ref Blend2DMode BlendMode { get; }
```

#### Property Value

- [Blend2DMode](/docs/api/shared/schemadefinitions/blend2dmode)

### BlendSourceX

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L27)

```csharp
ref AnimValueSource BlendSourceX { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

### BlendSourceY

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L31)

```csharp
ref AnimValueSource BlendSourceY { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

### Damping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L25)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### Items

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L17)

```csharp
ref CUtlVector<BlendItem_t> Items { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[BlendItem_t](/docs/api/shared/schemadefinitions/blenditem_t)>

### LockBlendOnReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L41)

```csharp
ref bool LockBlendOnReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L43)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Loop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L39)

```csharp
ref bool Loop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NodeItemIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L23)

```csharp
ref CUtlVector<int> NodeItemIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ParamSpans

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L21)

```csharp
CParamSpanUpdater ParamSpans { get; }
```

#### Property Value

- [CParamSpanUpdater](/docs/api/shared/schemadefinitions/cparamspanupdater)

### ParamX

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L29)

```csharp
CAnimParamHandle ParamX { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### ParamY

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L33)

```csharp
CAnimParamHandle ParamY { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### PlaybackSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L37)

```csharp
ref float PlaybackSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L19)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[TagSpan_t](/docs/api/shared/schemadefinitions/tagspan_t)>

