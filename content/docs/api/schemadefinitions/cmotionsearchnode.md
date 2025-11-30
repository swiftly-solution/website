---
title: CMotionSearchNode
---

# Interface CMotionSearchNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMotionSearchNode : ISchemaClass<CMotionSearchNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMotionSearchNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Children

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L18)

```csharp
ref CUtlVector<PointerTo<CMotionSearchNode>> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CMotionSearchNode](/docs/api/schemadefinitions/cmotionsearchnode)>>

### Quantizer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L20)

```csharp
CVectorQuantizer Quantizer { get; }
```

#### Property Value

- [CVectorQuantizer](/docs/api/schemadefinitions/cvectorquantizer)

### SampleCodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L22)

```csharp
ref CUtlVector<CUtlVector<SampleCode>> SampleCodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlVector](/docs/api/natives/cutlvectort)<[SampleCode](/docs/api/schemadefinitions/samplecode)>>

### SampleIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L24)

```csharp
ref CUtlVector<CUtlVector<int>> SampleIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>>

### SelectableSamples

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionSearchNode.cs#L26)

```csharp
ref CUtlVector<int> SelectableSamples { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

