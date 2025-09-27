---
title: CSeqMultiFetch
---

```csharp
public interface CSeqMultiFetch : ISchemaClass<CSeqMultiFetch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CalculatePoseParameters** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L30)

```csharp
ref bool CalculatePoseParameters { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**FixedBlendWeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L32)

```csharp
ref bool FixedBlendWeight { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**FixedBlendWeightVals** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L34)

```csharp
ISchemaFixedArray<float> FixedBlendWeightVals { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

**Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L16)

```csharp
CSeqMultiFetchFlag Flags { get; }
```

#### Property Value

- [CSeqMultiFetchFlag](/docs/api/shared/schemadefinitions/cseqmultifetchflag)

**GroupSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L20)

```csharp
ISchemaFixedArray<int> GroupSize { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**LocalCyclePoseParameter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L28)

```csharp
ref int LocalCyclePoseParameter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LocalPose** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L22)

```csharp
ISchemaFixedArray<int> LocalPose { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**LocalReferenceArray** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L18)

```csharp
ref CUtlVector<short> LocalReferenceArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

**PoseKeyArray0** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L24)

```csharp
ref CUtlVector<float> PoseKeyArray0 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

**PoseKeyArray1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqMultiFetch.cs#L26)

```csharp
ref CUtlVector<float> PoseKeyArray1 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

