---
title: CSeqMultiFetch
---

# Interface CSeqMultiFetch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSeqMultiFetch : ISchemaClass<CSeqMultiFetch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSeqMultiFetch>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CalculatePoseParameters

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L32)

```csharp
ref bool CalculatePoseParameters { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FixedBlendWeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L34)

```csharp
ref bool FixedBlendWeight { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FixedBlendWeightVals

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L36)

```csharp
ISchemaFixedArray<float> FixedBlendWeightVals { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L18)

```csharp
CSeqMultiFetchFlag Flags { get; }
```

#### Property Value

- [CSeqMultiFetchFlag](/docs/api/schemadefinitions/cseqmultifetchflag)

### GroupSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L22)

```csharp
ISchemaFixedArray<int> GroupSize { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### LocalCyclePoseParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L30)

```csharp
ref int LocalCyclePoseParameter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LocalPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L24)

```csharp
ISchemaFixedArray<int> LocalPose { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### LocalReferenceArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L20)

```csharp
ref CUtlVector<short> LocalReferenceArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### PoseKeyArray0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L26)

```csharp
ref CUtlVector<float> PoseKeyArray0 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### PoseKeyArray1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L28)

```csharp
ref CUtlVector<float> PoseKeyArray1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

