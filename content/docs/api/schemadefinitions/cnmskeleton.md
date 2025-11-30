---
title: CNmSkeleton
---

# Interface CNmSkeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmSkeleton : ISchemaClass<CNmSkeleton>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CNmSkeleton>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneIDs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L20)

```csharp
ref CUtlLeanVector<CGlobalSymbol, int> BoneIDs { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CGlobalSymbol](/docs/api/natives/cglobalsymbol), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L18)

```csharp
ref CGlobalSymbol ID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### IsPropSkeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L34)

```csharp
ref bool IsPropSkeleton { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaskDefinitions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L30)

```csharp
ref CUtlLeanVector<NmBoneMaskSetDefinition_t, int> MaskDefinitions { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[NmBoneMaskSetDefinition_t](/docs/api/schemadefinitions/nmbonemasksetdefinition_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ModelSpaceReferencePose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L26)

```csharp
ref CUtlVector<CTransform> ModelSpaceReferencePose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

### NumBonesToSampleAtLowLOD

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L28)

```csharp
ref int NumBonesToSampleAtLowLOD { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ParentIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L22)

```csharp
ref CUtlVector<int> ParentIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### ParentSpaceReferencePose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L24)

```csharp
ref CUtlVector<CTransform> ParentSpaceReferencePose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

### SecondarySkeletons

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmSkeleton.cs#L32)

```csharp
ref CUtlLeanVector<CNmSkeleton__SecondarySkeleton_t, int> SecondarySkeletons { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CNmSkeleton__SecondarySkeleton_t](/docs/api/schemadefinitions/cnmskeleton__secondaryskeleton_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

