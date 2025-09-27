---
title: CBlend2DUpdateNode
---

```csharp
public interface CBlend2DUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBlend2DUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnimEventsAndTagsOnMostWeightedOnly** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L46)

```csharp
ref bool AnimEventsAndTagsOnMostWeightedOnly { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**BlendMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L36)

```csharp
ref Blend2DMode BlendMode { get; }
```

#### Property Value

- [Blend2DMode](/docs/api/shared/schemadefinitions/blend2dmode)

**BlendSourceX** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L28)

```csharp
ref AnimValueSource BlendSourceX { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

**BlendSourceY** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L32)

```csharp
ref AnimValueSource BlendSourceY { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

**Damping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L26)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

**Items** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L17)

```csharp
ref CUtlVector Items { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**LockBlendOnReset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L42)

```csharp
ref bool LockBlendOnReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LockWhenWaning** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L44)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Loop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L40)

```csharp
ref bool Loop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NodeItemIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L24)

```csharp
ref CUtlVector<int> NodeItemIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**ParamSpans** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L22)

```csharp
CParamSpanUpdater ParamSpans { get; }
```

#### Property Value

- [CParamSpanUpdater](/docs/api/shared/schemadefinitions/cparamspanupdater)

**ParamX** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L30)

```csharp
CAnimParamHandle ParamX { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

**ParamY** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L34)

```csharp
CAnimParamHandle ParamY { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

**PlaybackSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L38)

```csharp
ref float PlaybackSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Tags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlend2DUpdateNode.cs#L20)

```csharp
ref CUtlVector Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

