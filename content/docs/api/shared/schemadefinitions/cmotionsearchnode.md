---
title: CMotionSearchNode
---

```csharp
public interface CMotionSearchNode : ISchemaClass<CMotionSearchNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Children

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L17)

```csharp
ref CUtlVector<PointerTo<CMotionSearchNode>> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CMotionSearchNode](/docs/api/shared/schemadefinitions/cmotionsearchnode)>>

### Quantizer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L19)

```csharp
CVectorQuantizer Quantizer { get; }
```

#### Property Value

- [CVectorQuantizer](/docs/api/shared/schemadefinitions/cvectorquantizer)

### SampleCodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L21)

```csharp
ref CUtlVector<CUtlVector<SampleCode>> SampleCodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlVector](/docs/api/-1)<[SampleCode](/docs/api/shared/schemadefinitions/samplecode)>>

### SampleIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L23)

```csharp
ref CUtlVector<CUtlVector<int>> SampleIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### SelectableSamples

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L25)

```csharp
ref CUtlVector<int> SelectableSamples { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

